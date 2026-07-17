import type { Metadata } from "next";
import { DM_Serif_Display, Source_Sans_3, Work_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Navbar from "@/component/navbar";
import ScrollToTop from "@/component/scroll-to-top";
import Footer from "@/component/footer";
import MobileActionBar from "@/component/mobile-bar";
import RevealObserver from "@/component/reveal-observer";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Skinsa Aesthetic",
  description: "Premium aesthetic skincare clinic",
  icons: {
    icon: [
      { url: "/logo-skinsa.jpg", sizes: "any" },
      { url: "/logo-skinsa.jpg", sizes: "16x16", type: "image/png" },
      { url: "/logo-skinsa.jpg", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/logo-skinsa.jpg",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        url: "/logo-skinsa.jpg",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/logo-skinsa.jpg",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${workSans.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-work-sans)]">
        {/* Google Ads Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17635706476"
          strategy="afterInteractive"
        />

        {/* Google Ads Configuration */}
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17635706476');
          `}
        </Script>

        {/* Facebook Meta Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;
            n.push=n;
            n.loaded=!0;
            n.version='2.0';
            n.queue=[];
            t=b.createElement(e);
            t.async=!0;
            t.src=v;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}
            (window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '27154693444226014');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){
                (c[a].q=c[a].q||[]).push(arguments)
              };
              t=l.createElement(r);
              t.async=1;
              t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xnrtrkocd4");
          `}
        </Script>

        {/* Meta Pixel NoScript Fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=27154693444226014&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Optional Components */}
        {/* <ScrollToTop /> */}
        <RevealObserver />

        {children}
      </body>
    </html>
  );
}