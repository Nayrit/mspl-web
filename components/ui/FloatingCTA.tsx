"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/components/ui/LanguageContext";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2"
        >
          {/* Expanded panel */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="bg-charcoal text-parchment-50 p-5 w-64 shadow-2xl"
              >
                <p className="font-display text-lg font-bold mb-1">{t.closing.headline1} {t.closing.headline2}</p>
                <p className="font-sans text-xs text-parchment-100/60 mb-4">{t.closing.turnaround} <strong className="text-parchment-50">{t.closing.days}</strong></p>
                <div className="space-y-2">
                  <Link href="/contact" className="flex items-center gap-2 font-sans text-xs font-semibold text-primary hover:text-primary-light transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    msplbd@gmail.com
                  </Link>
                  <a href="tel:+88022335096" className="flex items-center gap-2 font-sans text-xs font-semibold text-primary hover:text-primary-light transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    +880 2 2233 50096
                  </a>
                </div>
                {/* Red accent bar */}
                <div className="mt-4 h-0.5 w-full bg-primary" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main FAB */}
          <motion.button
            onClick={() => setExpanded(!expanded)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 bg-primary text-parchment-50 shadow-lg shadow-primary/30 flex items-center justify-center relative overflow-hidden group"
            aria-label="Get in touch"
            style={{ borderRadius: "0" }}
          >
            <motion.div
              animate={{ rotate: expanded ? 45 : 0 }}
              transition={{ duration: 0.25 }}
            >
              {expanded ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )}
            </motion.div>
            {/* Ripple bg on hover */}
            <span className="absolute inset-0 bg-primary-dark scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full origin-center opacity-30" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
