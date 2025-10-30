import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/client-layout";
import Script from "next/script";

export const metadata: Metadata = {
  title: "YelloTickell Pvt Ltd | Fashioning Possibilities",
  description: "YelloTickell Pvt Ltd is a modern, multi-domain company focused on innovation and sustainable growth.",
  keywords: "YelloTickell, innovation, sustainability, fabric, apparel, engineering, retail",
  themeColor: "#FFC107",
  openGraph: {
    title: "YelloTickell Pvt Ltd | Fashioning Possibilities",
    description: "Innovation-driven company with a diverse portfolio",
    url: "https://tickell.example.com",
    siteName: "YelloTickell Pvt Ltd",
    images: [
      {
        url: "/images/landing_logo.png",
        width: 1200,
        height: 630,
        alt: "YelloTickell Pvt Ltd",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YelloTickell Pvt Ltd | Fashioning Possibilities",
    description: "Innovation-driven company with a diverse portfolio",
    creator: "@yellowtickell",
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
