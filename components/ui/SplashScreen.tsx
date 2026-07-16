"use client";

import { useEffect, useState, useSyncExternalStore, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LOGO_COLORS, PAGE_TRANSITION_EASE } from "@/lib/brand-colors";
import { useSplash } from "@/components/ui/SplashProvider";
import { useSiteImage } from "@/components/ui/SiteImagesContext";

type SplashPhase = "show" | "exit" | "hidden";

function subscribeReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isCoarsePointer(): boolean {
  return window.matchMedia("(pointer: coarse)").matches;
}

export default function SplashScreen() {
  const { completeSplash } = useSplash();
  const logo = useSiteImage("brand-logo", "/mspl-logo-256.webp");
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    () => false,
  );
  const [phase, setPhase] = useState<SplashPhase>("show");
  const finishing = useRef(false);

  const finish = useCallback(() => {
    if (finishing.current) return;
    finishing.current = true;
    setPhase("exit");
    window.setTimeout(() => {
      setPhase("hidden");
      completeSplash();
      document.body.style.overflow = "";
    }, 700);
  }, [completeSplash]);

  useEffect(() => {
    if (reducedMotion) {
      completeSplash();
      return;
    }

    document.body.style.overflow = "hidden";

    const coarse = isCoarsePointer();
    const exitAt = coarse ? 900 : 1500;
    const doneAt = coarse ? 1400 : 2100;

    const exitTimer = window.setTimeout(() => setPhase("exit"), exitAt);
    const doneTimer = window.setTimeout(() => {
      finishing.current = true;
      setPhase("hidden");
      completeSplash();
      document.body.style.overflow = "";
    }, doneAt);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
      document.body.style.overflow = "";
    };
  }, [completeSplash, reducedMotion]);

  if (reducedMotion || phase === "hidden") return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="splash"
        className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden cursor-pointer"
        style={{ backgroundColor: LOGO_COLORS.black }}
        initial={{ y: 0 }}
        animate={phase === "exit" ? { y: "-100%" } : { y: 0 }}
        transition={{ duration: 0.7, ease: PAGE_TRANSITION_EASE }}
        aria-hidden={phase === "exit"}
        aria-label="Loading Master Simex. Tap to skip."
        role="button"
        tabIndex={0}
        onClick={() => phase === "show" && finish()}
        onKeyDown={(e) => {
          if (phase === "show" && (e.key === "Enter" || e.key === " " || e.key === "Escape")) {
            e.preventDefault();
            finish();
          }
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ backgroundColor: LOGO_COLORS.red }}
        />

        <motion.div
          className="flex flex-col items-center gap-5 px-6 text-center pointer-events-none"
          initial={{ scale: 2.5, opacity: 0 }}
          animate={
            phase === "exit"
              ? { scale: 1.15, opacity: 0 }
              : { scale: 1, opacity: 1 }
          }
          transition={{
            duration: phase === "exit" ? 0.55 : 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            animate={
              phase === "show"
                ? { scale: [1, 1.04, 1], opacity: [1, 0.94, 1] }
                : { scale: 1, opacity: 1 }
            }
            transition={{
              duration: 2,
              repeat: phase === "show" ? Infinity : 0,
              ease: "easeInOut",
            }}
          >
            <img
              src={logo}
              alt="Master Simex Paper Limited"
              width={240}
              height={80}
              decoding="async"
              className="w-[min(72vw,240px)] h-auto object-contain"
            />
          </motion.div>

          <motion.div
            className="flex items-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={phase === "show" ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="h-px w-8 sm:w-12" style={{ backgroundColor: LOGO_COLORS.greyDark }} />
            <p
              className="font-sans text-[0.65rem] sm:text-xs tracking-[0.2em] uppercase"
              style={{ color: LOGO_COLORS.grey }}
            >
              Paper Converting
              <span style={{ color: LOGO_COLORS.green }}> · </span>
              Printing
              <span style={{ color: LOGO_COLORS.green }}> · </span>
              Packaging
            </p>
            <span className="h-px w-8 sm:w-12" style={{ backgroundColor: LOGO_COLORS.greyDark }} />
          </motion.div>

          <motion.p
            className="font-sans text-[0.6rem] sm:text-[0.65rem] tracking-[0.28em] uppercase"
            style={{ color: LOGO_COLORS.greyDark }}
            initial={{ opacity: 0 }}
            animate={phase === "show" ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Since 2002
          </motion.p>
        </motion.div>

        <motion.p
          className="absolute bottom-8 left-0 right-0 text-center font-sans text-[0.65rem] tracking-[0.18em] uppercase pointer-events-none"
          style={{ color: "rgba(250,248,245,0.35)" }}
          initial={{ opacity: 0 }}
          animate={phase === "show" ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Tap to continue
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}
