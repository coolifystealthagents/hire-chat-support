export class RequestLimitError extends Error {
  constructor(message = 'Payload too large', status = 413) {
    super(message);
    this.name = 'RequestLimitError';
    this.status = status;
  }
}

export async function readBoundedBody(request, maxBytes) {
  const declared = request.headers.get('content-length');
  if (declared !== null) {
    const length = Number(declared);
    if (!Number.isFinite(length) || length < 0 || length > maxBytes) throw new RequestLimitError();
  }
  if (!request.body) return new Uint8Array();
  const reader = request.body.getReader();
  const chunks = [];
  let total = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > maxBytes) {
        await reader.cancel();
        throw new RequestLimitError();
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }
  const body = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) { body.set(chunk, offset); offset += chunk.byteLength; }
  return body;
}

export function createFixedWindowLimiter({ limit, windowMs, maxKeys = 10_000 }) {
  const entries = new Map();
  return {
    allow(key, now = Date.now()) {
      let entry = entries.get(key);
      if (!entry || now >= entry.resetAt) entry = { count: 0, resetAt: now + windowMs };
      entry.count += 1;
      entries.set(key, entry);
      if (entries.size > maxKeys) {
        for (const [candidate, value] of entries) {
          if (now >= value.resetAt || entries.size > maxKeys) entries.delete(candidate);
          if (entries.size <= maxKeys) break;
        }
      }
      return entry.count <= limit;
    },
  };
}

export function requestClientHint(request) {
  // This hint preserves the ACR attribution contract but is not an
  // authenticated identity and is never the sole resource limit.
  return request.headers.get('cf-connecting-ip') || request.headers.get('x-real-ip') || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
}

export function mediaType(request) {
  return (request.headers.get('content-type') || '').split(';', 1)[0].trim().toLowerCase();
}
