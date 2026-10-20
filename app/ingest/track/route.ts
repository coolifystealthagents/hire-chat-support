import { type NextRequest } from 'next/server';
import { createFixedWindowLimiter, readBoundedBody, requestClientKey, RequestLimitError } from '@/lib/request-safety.mjs';

const TRACKING_API = 'https://acrtracking.stealthagents.us/api/track';
const MAX_BODY_BYTES = 256_000;
const trackingLimiter = createFixedWindowLimiter({ limit: 120, windowMs: 60_000 });

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    if (!trackingLimiter.allow(requestClientKey(request))) return Response.json({ status: 'error' }, { status: 429 });
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.toLowerCase().startsWith('application/json')) return Response.json({ status: 'error' }, { status: 415 });
    const bytes = await readBoundedBody(request, MAX_BODY_BYTES);
    const parsed = JSON.parse(new TextDecoder().decode(bytes));
    if (!parsed || Array.isArray(parsed) || typeof parsed !== 'object' || Object.keys(parsed).length > 100) {
      return Response.json({ status: 'error' }, { status: 400 });
    }
    const body = JSON.stringify(parsed);
    const clientIp = requestClientKey(request);
    const upstream = await fetch(TRACKING_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': request.headers.get('user-agent') || '',
        'Accept-Language': request.headers.get('accept-language') || '',
        'X-Forwarded-For': clientIp,
        'X-ACR-Client-IP': clientIp,
      },
      body,
      cache: 'no-store',
      signal: AbortSignal.timeout(10_000),
    });
    return new Response(await upstream.text(), {
      status: upstream.status,
      headers: {
        'Content-Type': upstream.headers.get('content-type') || 'application/json',
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    if (error instanceof RequestLimitError) return Response.json({ status: 'error' }, { status: error.status });
    if (error instanceof SyntaxError) return Response.json({ status: 'error' }, { status: 400 });
    return Response.json({ status: 'error' }, { status: 502 });
  }
}
