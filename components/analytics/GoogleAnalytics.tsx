"use client";

import Script from "next/script";
import { useConsent } from "@/components/ui/ConsentContext";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

function isValidGaId(id: string): boolean {
  return /^G-[A-Z0-9]+$/.test(id);
}

export default function GoogleAnalytics() {
  const { consent } = useConsent();

  if (consent !== "accepted" || !isValidGaId(GA_MEASUREMENT_ID)) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics-4"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
