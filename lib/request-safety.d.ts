declare module '@/lib/request-safety.mjs' {
  export class RequestLimitError extends Error { status: number }
  export function readBoundedBody(request: Request, maxBytes: number): Promise<Uint8Array>;
  export function createFixedWindowLimiter(options: { limit: number; windowMs: number; maxKeys?: number }): { allow(key: string, now?: number): boolean };
  export function createLayeredLimiter(options: { clientLimit: number; globalLimit: number; windowMs: number }): { allow(clientHint: string, now?: number): boolean };
  export function requestClientHint(request: Request): string;
  export function mediaType(request: Request): string;
}
