import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getUser } from '@/app/utils/auth';

export async function middleware(request: NextRequest) {
  const user = await getUser(request);

  // Public paths that don't require authentication
  const publicPaths = ['/', '/api/auth/login', '/api/auth/register'];
  if (publicPaths.includes(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  // Check if user is authenticated
  if (!user) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Role-based route protection
  if (request.nextUrl.pathname.startsWith('/judge') && user.role !== 'JUDGE') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (request.nextUrl.pathname.startsWith('/participant') && user.role !== 'PARTICIPANT') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
}; 