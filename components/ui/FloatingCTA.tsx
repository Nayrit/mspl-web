"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/components/ui/LanguageContext";
import { siteConfig } from "@/lib/site";

export default function FloatingCTA() {
  const [expanded, setExpanded] = useState(false);
  const { t } = useLang();

  const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hello Master Simex, I'd like to enquire about your products.")}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-charcoal text-parchment-50 p-5 w-72 shadow-2xl border border-white/10 rounded-xl"
          >
            <p className="font-display text-lg font-bold mb-1">{t.closing.headline}</p>
            <p className="font-sans text-xs text-parchment-100/60 mb-4">
              {t.closing.turnaround} <strong className="text-parchment-50">{t.closing.days}</strong>
            </p>

            <div className="space-y-2.5">
              {/* WhatsApp Option inside + menu */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-lg font-sans text-xs font-semibold text-white transition-all shadow-md hover:brightness-110"
                style={{ backgroundColor: "#25D366" }}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider bg-white/20 px-1.5 py-0.5 rounded">
                  Instant
                </span>
              </a>

              {/* Request Quote */}
              <Link
                href="/contact?quote=1"
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 font-sans text-xs font-semibold text-primary hover:text-primary-light transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t.nav.requestQuote}
              </Link>

              {/* Get in touch */}
              <Link
                href="/contact"
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 font-sans text-xs font-semibold text-parchment-100/80 hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t.nav.getInTouch}
              </Link>

              {/* Direct Phone Call */}
              <a
                href={`tel:${siteConfig.phones[0].replace(/\s|-/g, "")}`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 font-sans text-xs font-semibold text-parchment-100/80 hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {siteConfig.phones[0]}
              </a>
            </div>

            <div className="mt-4 h-0.5 w-full bg-primary rounded-full" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setExpanded(!expanded)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="px-5 py-3.5 rounded-full bg-primary text-parchment-50 shadow-lg shadow-primary/40 flex items-center gap-2.5 relative overflow-hidden group transition-all"
        aria-label="Contact us"
      >
        <div className="flex items-center gap-2.5 z-10">
          {expanded ? (
            <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          )}
          <span className="font-sans text-sm font-semibold tracking-wide">
            {expanded ? "Close" : "Contact us"}
          </span>
        </div>
        <span className="absolute inset-0 bg-primary-dark scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full origin-center opacity-30" />
      </motion.button>
    </div>
  );
}
