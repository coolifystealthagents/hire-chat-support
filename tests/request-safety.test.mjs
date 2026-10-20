import assert from 'node:assert/strict';
import test from 'node:test';
import {
  RequestLimitError,
  createFixedWindowLimiter,
  mediaType,
  readBoundedBody,
  requestClientKey,
} from '../lib/request-safety.mjs';

test('readBoundedBody rejects an oversized declared body before reading it', async () => {
  const request = {
    headers: new Headers({ 'content-length': '101' }),
    get body() { throw new Error('body must not be read'); },
  };
  await assert.rejects(() => readBoundedBody(request, 100), (error) => error instanceof RequestLimitError && error.status === 413);
});

test('readBoundedBody rejects a chunked body once its actual size crosses the limit', async () => {
  const request = new Request('https://example.test', {
    method: 'POST',
    body: new ReadableStream({ start(controller) { controller.enqueue(new Uint8Array(60)); controller.enqueue(new Uint8Array(60)); controller.close(); } }),
    duplex: 'half',
  });
  await assert.rejects(() => readBoundedBody(request, 100), (error) => error instanceof RequestLimitError && error.status === 413);
});

test('readBoundedBody returns the complete body inside the limit', async () => {
  const request = new Request('https://example.test', { method: 'POST', body: 'safe body' });
  assert.equal(new TextDecoder().decode(await readBoundedBody(request, 100)), 'safe body');
});

test('media types are normalized exactly and forwarded chains cannot select a limiter key', () => {
  assert.equal(mediaType(new Request('https://example.test', { headers: { 'content-type': 'application/json; charset=utf-8' } })), 'application/json');
  assert.equal(mediaType(new Request('https://example.test', { headers: { 'content-type': 'application/jsonp' } })), 'application/jsonp');
  assert.equal(requestClientKey(new Request('https://example.test', { headers: { 'x-forwarded-for': 'spoofed' } })), 'unknown');
  assert.equal(requestClientKey(new Request('https://example.test', { headers: { 'x-real-ip': '10.0.0.2', 'x-forwarded-for': 'spoofed' } })), '10.0.0.2');
});

test('fixed-window limiter blocks only after the configured allowance and resets', () => {
  const limiter = createFixedWindowLimiter({ limit: 2, windowMs: 1_000, maxKeys: 10 });
  assert.equal(limiter.allow('client', 0), true);
  assert.equal(limiter.allow('client', 500), true);
  assert.equal(limiter.allow('client', 999), false);
  assert.equal(limiter.allow('client', 1_000), true);
});
