import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/client-layout";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Arvind Ltd. | Fashioning Possibilities",
  description: "Arvind Limited is a leading textile and fashion conglomerate with businesses spanning fabric & apparel, brands & retail, real estate, engineering, environmental solutions, advanced materials, and telecom.",
  keywords: "Arvind, textile, fashion, fabric, apparel, retail, real estate, engineering, sustainability",
  openGraph: {
    title: "Arvind Ltd. | Fashioning Possibilities",
    description: "Leading textile and fashion conglomerate with diverse business portfolio",
    url: "https://www.arvind.com",
    siteName: "Arvind Ltd.",
    images: [
      {
        url: "https://www.arvind.com/sites/all/themes/arvind/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arvind Ltd.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arvind Ltd. | Fashioning Possibilities",
    description: "Leading textile and fashion conglomerate with diverse business portfolio",
    creator: "@arvindlimited",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WJL2CJV');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
