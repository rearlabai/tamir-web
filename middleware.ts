import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { env } from '@/lib/env';

// Best-effort, per-instance abuse guard. This is not a distributed rate limiter.
const rateLimit = new Map<string, { count: number; resetAt: number }>();

const RATE_LIMITS = {
  '/vehicle': { maxRequests: 60, windowMs: 60_000 },
  default: { maxRequests: 200, windowMs: 60_000 },
};

function getRateLimit(pathname: string) {
  if (pathname.startsWith('/vehicle')) return RATE_LIMITS['/vehicle'];
  return RATE_LIMITS.default;
}

function checkRateLimit(ip: string, pathname: string): boolean {
  const limit = getRateLimit(pathname);
  const key = `${ip}:${pathname.split('/')[1] || 'root'}`;
  const now = Date.now();
  const record = rateLimit.get(key);

  if (!record || now > record.resetAt) {
    rateLimit.set(key, { count: 1, resetAt: now + limit.windowMs });
    return true;
  }

  if (record.count >= limit.maxRequests) return false;

  record.count += 1;
  return true;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Get client IP
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    '127.0.0.1';

  // Rate limiting
  if (!checkRateLimit(ip, pathname)) {
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'Retry-After': '60',
        'Content-Type': 'text/plain',
      },
    });
  }

  // Force HTTPS in production
  if (
    env.isProduction &&
    request.headers.get('x-forwarded-proto') === 'http'
  ) {
    return NextResponse.redirect(
      `https://${request.headers.get('host')}${pathname}`,
      { status: 301 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
