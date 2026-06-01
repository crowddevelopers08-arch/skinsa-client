import type { Metadata } from "next";
import Script from "next/script";
import Navbared from "@/component/navthank";
import ThankYouPage from "@/component/thank-you";
import Footers from "@/component/thank-footer";

export const metadata: Metadata = {
  title: "Thank You | Skinsa Aesthetic",
  description: "Thank you for contacting Skinsa Aesthetic Clinic.",
};

export default function Page() {
  return (
    <>
      {/* Google Ads Conversion Tracking */}
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-17635706476/vBC1CJ7wirccEOyMrtlB'
          });
        `}
      </Script>
      
      <Navbared />
      <ThankYouPage />
      <Footers />
    </>
  );
}