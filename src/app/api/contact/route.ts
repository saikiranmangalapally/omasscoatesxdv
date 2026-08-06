import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, createRateLimitResponse } from '@/lib/rateLimit';

export async function POST(req: NextRequest) {
  // Get Client IP
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1';

  // Check Rate Limit (Max 5 form submissions per IP per 60 seconds)
  const rateLimit = checkRateLimit(ip, 5, 60000);

  if (!rateLimit.success) {
    return createRateLimitResponse(rateLimit.reset);
  }

  try {
    const body = await req.json();
    const { name, phone, service } = body;

    // Strict Input Validation & Sanitization
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Invalid name. Name must be at least 2 characters.' },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== 'string' || !/^[6-9]\d{9}$/.test(phone.replace(/[\s-]/g, ''))) {
      return NextResponse.json(
        { error: 'Invalid phone number. Please enter a valid 10-digit Indian phone number.' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Request received successfully. Our Senior CA will call you in 5 minutes.',
      },
      {
        status: 200,
        headers: {
          'X-RateLimit-Limit': '5',
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
          'X-RateLimit-Reset': rateLimit.reset.toString(),
        },
      }
    );
  } catch (err) {
    return NextResponse.json(
      { error: 'Invalid JSON payload.' },
      { status: 400 }
    );
  }
}
