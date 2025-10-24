import { NextResponse } from 'next/server';

const TARGET = 'https://www.arvind.com/corporate-social-responsibility';

export async function GET() {
  try {
    const res = await fetch(TARGET, { cache: 'no-store' });
    const html = await res.text();

    // Inject a <base> tag so relative URLs resolve to the source site
    const injected = html.replace(
      /<head(\s[^>]*)?>/i,
      (m) => `${m}\n  <base href="https://www.arvind.com/" />\n  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />`
    );

    return new NextResponse(injected, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        // Ensure it can be framed by our site
        'X-Frame-Options': 'ALLOWALL',
        'Cache-Control': 'no-store',
      },
    });
  } catch (err) {
    return new NextResponse(
      `<html><body><h1>Failed to load CSR page</h1><p>${(err as Error).message}</p></body></html>`,
      { status: 502, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    );
  }
}
