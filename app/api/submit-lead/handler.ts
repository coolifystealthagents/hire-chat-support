import { NextResponse } from 'next/server';
import { sendLeadFallbackToMattermost } from '../../../lib/lead-fallback-mattermost';
import { createLayeredLimiter, mediaType, readBoundedBody, requestClientHint, RequestLimitError } from '@/lib/request-safety.mjs';

const personalDomains = new Set(['gmail.com','yahoo.com','hotmail.com','outlook.com','icloud.com','aol.com','proton.me','protonmail.com']);
const MAX_BODY_BYTES = 64_000;
const MAX_FIELDS = 30;
const MAX_FIELD_CHARS = 4_000;
const leadLimiter = createLayeredLimiter({ clientLimit: 10, globalLimit: 300, windowMs: 60_000 });

const response = (message: string, status: number) => NextResponse.json({ ok: false, message }, { status });

export async function handleLead(request: Request, requireFull = false) {
  try {
    const contentType = request.headers.get('content-type') || '';
    if (!['multipart/form-data', 'application/x-www-form-urlencoded'].includes(mediaType(request))) {
      return response('Unsupported request format.', 415);
    }
    const body = await readBoundedBody(request, MAX_BODY_BYTES);
    const bodyBuffer = new ArrayBuffer(body.byteLength);
    new Uint8Array(bodyBuffer).set(body);
    const boundedRequest = new Request(request.url, { method: 'POST', headers: { 'content-type': contentType }, body: bodyBuffer });
    const form = await boundedRequest.formData();
    const keys = [...form.keys()];
    if (keys.length > MAX_FIELDS || new Set(keys).size !== keys.length || [...form.values()].some((value) => typeof value !== 'string' || value.length > MAX_FIELD_CHARS)) {
      return response('Please shorten your request.', 400);
    }
    if (form.get('website_url')) return NextResponse.json({ ok: true });
    const source = String(form.get('source') || '');
    const full = requireFull || source.startsWith('contact-page');
    const firstName = String(form.get('first_name') || '').trim();
    const lastName = String(form.get('last_name') || '').trim();
    const legacyName = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim().toLowerCase();
    const company = String(form.get('company') || '').trim();
    const companySize = String(form.get('company_size') || '').trim();
    const positions = String(form.get('positions_to_fill') || '').trim();
    const referral = String(form.get('referral_source') || '').trim();
    if (!/^\S+@\S+\.\S+$/.test(email) || email.length > 254 || (full ? (!firstName || !lastName || !company || !companySize || !positions || !referral) : !legacyName)) {
      return response('Please complete every required field.', 400);
    }
    if (full && personalDomains.has(email.split('@')[1])) return response('Please use your business email address.', 400);
    if (!leadLimiter.allow(requestClientHint(request))) return response('Please wait before trying again.', 429);
    const endpoint = process.env.ACR_LEAD_ENDPOINT;
    if (endpoint) {
      const payload = Object.fromEntries(form.entries());
      delete payload.website_url;
      const forwarded = await fetch(endpoint, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(10_000),
      });
      if (!forwarded.ok) return response('We could not send your request.', 502);
    }
    void sendLeadFallbackToMattermost({
      name: [firstName, lastName].filter(Boolean).join(' ') || legacyName,
      email,
      phone: String(form.get('phone') || ''),
      business: company,
      message: String(form.get('message') || ''),
      companySize,
      positions,
      referral,
      pageUrl: String(form.get('_page_url') || request.headers.get('referer') || ''),
      userAgent: request.headers.get('user-agent') || '',
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof RequestLimitError) return response('Payload too large.', error.status);
    return response('We could not send your request.', 502);
  }
}
