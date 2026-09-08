import type { Metadata, Viewport } from "next";
import { Source_Serif_4, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/layout/JsonLd";
import SiteChrome from "@/components/layout/SiteChrome";
import { LanguageProvider } from "@/components/ui/LanguageContext";
import { ConsentProvider } from "@/components/ui/ConsentContext";
import { SplashProvider } from "@/components/ui/SplashProvider";
import { SiteImagesProvider } from "@/components/ui/SiteImagesContext";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import { getImagePathMap } from "@/lib/cms/images";
import { getSiteUrl } from "@/lib/site-url";
import { organizationJsonLd, localBusinessJsonLd } from "@/lib/seo";

/** Serve from CDN / Data Cache; CMS uploads call revalidateTag("image-catalog"). */
export const revalidate = false;

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
});
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#d61016",
};

export const metadata: Metadata = {
  title: {
    default: "Master Simex Paper Limited | Paper Converting, Printing & Packaging in Bangladesh",
    template: "%s | Master Simex Paper Limited",
  },
  description: "Master Simex Paper Limited is a part of MS Group and a leading Bangladeshi manufacturer of secure forms, thermal rolls, offset print, packaging, rigid boxes and labels. ISO 9001:2015 certified. Made in-house since 2002.",
  keywords: ["paper converting Bangladesh","printing packaging Dhaka","OMR forms Bangladesh","rigid box manufacturer","thermal paper rolls","security printing Bangladesh","Master Simex","MSPL"],
  authors: [{ name: "Master Simex Paper Limited" }],
  metadataBase: new URL(getSiteUrl()),
  openGraph: {
    type: "website", locale: "en_US", url: "https://www.mastersimex.com",
    title: "Master Simex Paper Limited | Paper Converting, Printing & Packaging",
    description: "Leading Bangladeshi manufacturer of secure forms, thermal rolls, offset print, packaging, rigid boxes and labels. ISO 9001:2015 certified since 2002.",
    siteName: "Master Simex Paper Limited",
    images: [{ url: "/mspl-logo.png", width: 512, height: 512, alt: "Master Simex Paper Limited" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Simex Paper Limited | Paper Converting, Printing & Packaging",
    description: "Leading Bangladeshi manufacturer of secure forms, thermal rolls, offset print, packaging, rigid boxes and labels. ISO 9001:2015 certified.",
    images: ["/mspl-logo.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/mspl-logo.png", type: "image/png" },
      { url: "/icon.png" },
    ],
    shortcut: "/mspl-logo.png",
    apple: "/mspl-logo.png",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const imageMap = await getImagePathMap();

  return (
    <html lang="en" className={`${sourceSerif.variable} ${sourceSans.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/mspl-logo.png" />
        <link rel="shortcut icon" href="/mspl-logo.png" />
        <link rel="apple-touch-icon" href="/mspl-logo.png" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
      </head>
      <body className="font-sans antialiased" style={{ backgroundColor: "#faf8f5", color: "#25282b" }}>
        <ConsentProvider>
          <SiteImagesProvider map={imageMap}>
            <SplashProvider>
              <LanguageProvider>
                <GoogleAnalytics />
                <JsonLd data={[organizationJsonLd(), localBusinessJsonLd()]} />
                <SiteChrome>{children}</SiteChrome>
              </LanguageProvider>
            </SplashProvider>
          </SiteImagesProvider>
        </ConsentProvider>
      </body>
    </html>
  );
}
