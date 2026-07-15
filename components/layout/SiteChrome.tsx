"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import CookieConsent from "@/components/ui/CookieConsent";
import SplashScreen from "@/components/ui/SplashScreen";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <SplashScreen />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <FloatingCTA />
      <WhatsAppButton />
      <CookieConsent />
    </>
  );
}
