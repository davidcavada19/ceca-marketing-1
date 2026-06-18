import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (pathname === '/en') {
    return NextResponse.redirect(new URL('/', request.url), 301)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/en'],
}