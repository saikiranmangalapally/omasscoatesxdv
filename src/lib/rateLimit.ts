import { NextResponse } from 'next/server';

interface RateLimitStore {
  [ip: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

/**
 * In-memory Token Bucket Rate Limiter
 * @param ip Client IP Address
 * @param limit Maximum allowed requests per window (default 10 requests)
 * @param windowMs Time window in milliseconds (default 60,000ms = 1 minute)
 */
export function checkRateLimit(ip: string, limit = 10, windowMs = 60000) {
  const now = Date.now();

  // Clean expired entries periodically
  if (!store[ip] || store[ip].resetTime < now) {
    store[ip] = {
      count: 1,
      resetTime: now + windowMs,
    };
    return {
      success: true,
      remaining: limit - 1,
      reset: Math.ceil(windowMs / 1000),
    };
  }

  store[ip].count += 1;
  const currentCount = store[ip].count;
  const remaining = Math.max(0, limit - currentCount);
  const resetSeconds = Math.ceil((store[ip].resetTime - now) / 1000);

  if (currentCount > limit) {
    return {
      success: false,
      remaining: 0,
      reset: resetSeconds,
    };
  }

  return {
    success: true,
    remaining,
    reset: resetSeconds,
  };
}

export function createRateLimitResponse(resetSeconds: number) {
  return NextResponse.json(
    {
      error: 'Too Many Requests',
      message: 'You have exceeded the allowed request limit. Please try again later.',
    },
    {
      status: 429,
      headers: {
        'X-RateLimit-Limit': '10',
        'X-RateLimit-Remaining': '0',
        'X-RateLimit-Reset': resetSeconds.toString(),
        'Retry-After': resetSeconds.toString(),
      },
    }
  );
}
