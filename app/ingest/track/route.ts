import { type NextRequest } from 'next/server';
import { createLayeredLimiter, mediaType, readBoundedBody, requestClientHint, RequestLimitError } from '@/lib/request-safety.mjs';

const TRACKING_API = 'https://acrtracking.stealthagents.us/api/track';
const MAX_BODY_BYTES = 256_000;
const trackingLimiter = createLayeredLimiter({ clientLimit: 120, globalLimit: 6_000, windowMs: 60_000 });

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') || '';
    if (mediaType(request) !== 'application/json') return Response.json({ status: 'error' }, { status: 415 });
    const bytes = await readBoundedBody(request, MAX_BODY_BYTES);
    const parsed = JSON.parse(new TextDecoder().decode(bytes));
    if (!parsed || Array.isArray(parsed) || typeof parsed !== 'object' || Object.keys(parsed).length > 100) {
      return Response.json({ status: 'error' }, { status: 400 });
    }
    const clientHint = requestClientHint(request);
    if (!trackingLimiter.allow(clientHint)) return Response.json({ status: 'error' }, { status: 429 });
    const body = JSON.stringify(parsed);
    const upstream = await fetch(TRACKING_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': request.headers.get('user-agent') || '',
        'Accept-Language': request.headers.get('accept-language') || '',
        'X-Forwarded-For': clientHint,
        'X-ACR-Client-IP': clientHint,
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
