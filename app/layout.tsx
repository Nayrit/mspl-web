import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/layout/JsonLd";
import { LanguageProvider } from "@/components/ui/LanguageContext";
import { ConsentProvider } from "@/components/ui/ConsentContext";
import { SplashProvider } from "@/components/ui/SplashProvider";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import CustomCursor from "@/components/ui/CustomCursor";
import FloatingCTA from "@/components/ui/FloatingCTA";
import CookieConsent from "@/components/ui/CookieConsent";
import SplashScreen from "@/components/ui/SplashScreen";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { organizationJsonLd, localBusinessJsonLd } from "@/lib/seo";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Master Simex Paper Limited | Paper Converting, Printing & Packaging in Bangladesh",
    template: "%s | Master Simex Paper Limited",
  },
  description: "Master Simex Paper Limited is a part of MS Group and a leading Bangladeshi manufacturer of secure forms, thermal rolls, offset print, packaging, rigid boxes and labels. ISO 9001:2015 certified. Made in-house since 2002.",
  keywords: ["paper converting Bangladesh","printing packaging Dhaka","OMR forms Bangladesh","rigid box manufacturer","thermal paper rolls","security printing Bangladesh","Master Simex","MSPL"],
  authors: [{ name: "Master Simex Paper Limited" }],
  metadataBase: new URL("https://www.mastersimex.com"),
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/mspl-logo.png" />
        <link rel="shortcut icon" href="/mspl-logo.png" />
        <link rel="apple-touch-icon" href="/mspl-logo.png" />
      </head>
      <body className="font-sans antialiased" style={{ backgroundColor: "#faf8f5", color: "#25282b" }}>
        <ConsentProvider>
          <SplashProvider>
            <LanguageProvider>
              <SplashScreen />
              <GoogleAnalytics />
              <JsonLd data={[organizationJsonLd(), localBusinessJsonLd()]} />
              <CustomCursor />
              <Header />
              <main id="main-content">{children}</main>
              <Footer />
              <FloatingCTA />
              <WhatsAppButton />
              <CookieConsent />
            </LanguageProvider>
          </SplashProvider>
        </ConsentProvider>
      </body>
    </html>
  );
}
