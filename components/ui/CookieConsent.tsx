"use client";

import Link from "next/link";
import { useConsent } from "@/components/ui/ConsentContext";

export default function CookieConsent() {
  const { bannerVisible, accept, reject } = useConsent();

  if (!bannerVisible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
    >
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-charcoal text-parchment-50 p-5 md:p-6 shadow-2xl border-t-2 border-primary">
          <p className="font-sans text-sm text-parchment-100/75 max-w-2xl">
            We use cookies to understand how our site is used and to improve it. Analytics cookies load only if you accept.{" "}
            <Link href="/privacy-policy" className="text-primary hover:underline">Learn more</Link>
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={reject}
              className="font-sans text-xs font-semibold tracking-wider uppercase px-5 py-3 border border-parchment-100/30 text-parchment-100/80 hover:border-parchment-100 hover:text-parchment-100 transition-colors"
            >
              Reject
            </button>
            <button
              type="button"
              onClick={accept}
              className="font-sans text-xs font-semibold tracking-wider uppercase px-6 py-3 transition-colors hover:brightness-110"
              style={{ backgroundColor: "#e0271c", color: "#faf8f5" }}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
