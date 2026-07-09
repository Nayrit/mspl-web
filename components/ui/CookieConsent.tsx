"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("mspl-cookie-consent")) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const accept = () => {
    localStorage.setItem("mspl-cookie-consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("mspl-cookie-consent", "rejected");
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
    >
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-charcoal text-parchment-50 p-5 md:p-6 shadow-2xl border-t-2 border-primary">
          <p className="font-sans text-sm text-parchment-100/75 max-w-2xl">
            We use cookies to understand how our site is used and to improve it.{" "}
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
