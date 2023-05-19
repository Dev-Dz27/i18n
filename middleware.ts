import { NextRequest, NextResponse } from 'next/server'

const singleSegmentPagePattern  = /^\/(\w+)$/; // Regular expression pattern to match pages like '/contact', '/about', etc.

export default function middleware(req: NextRequest) {


  const country = req.geo?.country?.toLowerCase() || 'us'
  const locale = req.headers.get('accept-language')?.split(',')?.[0] || 'en-US'
  const match = req.nextUrl.pathname.match(singleSegmentPagePattern );
  // Check if the requested path is the home page
  if (req.nextUrl.pathname === '/') {
    // Rewrite the path to the localized home page (pages/[locale]/[country])
    req.nextUrl.pathname = `/${locale}/${country}`
  } else if (match) {
    const [, page] = match;
    req.nextUrl.pathname = `/${locale}/${country}/${page}`;  }

  return NextResponse.rewrite(req.nextUrl)
}
