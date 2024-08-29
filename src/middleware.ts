import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function middleware(request: NextRequest) {
  const tokenCookie = request.cookies.get('jwt');

  // Extract the token value as a string
  const token = tokenCookie ? tokenCookie.value : null;

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error('JWT_SECRET is not defined');
    }

    jwt.verify(token, secret); // Verify the JWT
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/user/:path*','/admin/:path*'],
};
