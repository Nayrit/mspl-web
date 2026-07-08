"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/components/ui/LanguageContext";
import RotatingWords from "@/components/ui/RotatingWords";

const slides = [
  { src: "/hero-bg.jpg",   alt: "Master Simex — industrial paper manufacturing facility" },
  { src: "/hero-bg-2.jpg", alt: "Master Simex — paper roll warehouse" },
  { src: "/hero-bg-3.jpg", alt: "Master Simex — offset printing press" },
  { src: "/hero-bg-4.jpg", alt: "Master Simex — manufacturing campus" },
];
const SLIDE_MS = 5000;

export default function HeroSection() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);
  const [paused,  setPaused]  = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY      = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const dimness  = useTransform(scrollYProgress, [0, 0.7], [0.5, 0.88]);
  const scrollLineScale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const contentRotateX = useTransform(springY, v => v * -0.15);

  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent(c => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, SLIDE_MS);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, paused, next]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    mouseX.set(x * 18);
    mouseY.set(y * 12);
  };

  const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.13, delayChildren: 0.4 } } } as const;
  const item    = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: "easeOut" as const } } } as const;

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[100svh] min-h-[640px] overflow-hidden"
      style={{ backgroundColor: "#25282b" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => { setPaused(false); mouseX.set(0); mouseY.set(0); }}
      onMouseMove={handleMouseMove}
      aria-label="Hero"
    >
      <motion.div className="absolute inset-0 w-full h-[130%] -top-[15%]" style={{ y: bgY }}>
        <AnimatePresence initial={false}>
          <motion.img
            key={slides[current].src}
            src={slides[current].src}
            alt={slides[current].alt}
            fetchPriority={current === 0 ? "high" : "auto"}
            className="absolute inset-0 w-full h-full object-cover object-center"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
          />
        </AnimatePresence>
        <motion.div className="absolute inset-0" style={{ backgroundColor: "#25282b", opacity: dimness }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#25282b] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#25282b]/60 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        className="relative z-10 h-full flex flex-col justify-end container-editorial pb-10"
        style={{ y: contentY, x: springX, rotateX: contentRotateX }}
      >
        <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-5xl">
          <motion.div variants={item} className="mb-7">
            <span className="inline-flex items-center gap-3 font-sans text-[0.65rem] font-medium tracking-[0.2em] uppercase" style={{ color: "#e0271c" }}>
              {t.hero.eyebrow}
            </span>
          </motion.div>

          <motion.h1 variants={item} className="font-display font-bold text-[#faf8f5] mb-4" style={{ fontSize: "clamp(3rem,7vw,7.5rem)", lineHeight: 1.03, letterSpacing: "-0.03em" }}>
            {t.hero.headline1}
            <br />
            <span style={{ color: "#e0271c" }}>{t.hero.headline2}</span>
          </motion.h1>

          <motion.p variants={item} className="font-display font-medium mb-7" style={{ fontSize: "clamp(1.25rem,2.5vw,2rem)", lineHeight: 1.2, letterSpacing: "-0.02em", color: "rgba(250,248,245,0.35)" }}>
            <RotatingWords words={t.hero.rotating} className="text-primary" />
          </motion.p>

          <motion.p variants={item} className="text-body-xl font-sans font-light max-w-2xl mb-11" style={{ color: "rgba(250,248,245,0.65)" }}>
            {t.hero.sub}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-14">
            <Link href="/what-we-do" id="hero-cta-primary"
              className="inline-flex items-center gap-2 font-sans font-semibold text-sm tracking-wide px-8 py-4 group transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              style={{ backgroundColor: "#e0271c", color: "#faf8f5" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#b51f16")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#e0271c")}
            >
              {t.hero.cta1}
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/contact" id="hero-cta-secondary"
              className="inline-flex items-center gap-2 font-sans font-medium text-sm tracking-wide px-8 py-4 transition-all duration-300"
              style={{ border: "1px solid rgba(250,248,245,0.3)", color: "#faf8f5" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#e0271c"; (e.currentTarget as HTMLElement).style.color = "#e0271c"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(250,248,245,0.3)"; (e.currentTarget as HTMLElement).style.color = "#faf8f5"; }}
            >
              {t.hero.cta2}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex items-center gap-6 pb-6"
        >
          <div className="flex items-center gap-3" role="tablist">
            {slides.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setCurrent(i)}
                className="relative h-0.5 overflow-hidden transition-all duration-500"
                style={{ width: i === current ? "2.5rem" : "1rem" }}
              >
                <span className="absolute inset-0" style={{ backgroundColor: "rgba(250,248,245,0.2)" }} />
                {i === current && (
                  <motion.span
                    className="absolute inset-0"
                    style={{ backgroundColor: "#e0271c", transformOrigin: "left", scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>

          <span className="font-sans text-[0.6rem] tracking-[0.22em]" style={{ color: "rgba(250,248,245,0.3)" }}>
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>

          <div className="ml-auto flex items-center gap-2">
            {[prev, next].map((fn, idx) => (
              <button
                key={idx}
                onClick={fn}
                aria-label={idx === 0 ? "Previous slide" : "Next slide"}
                className="w-10 h-10 flex items-center justify-center transition-all duration-300"
                style={{ border: "1px solid rgba(250,248,245,0.15)", color: "rgba(250,248,245,0.5)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#e0271c"; (e.currentTarget as HTMLElement).style.color = "#e0271c"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(250,248,245,0.15)"; (e.currentTarget as HTMLElement).style.color = "rgba(250,248,245,0.5)"; }}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={idx === 0 ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
                </svg>
              </button>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden xl:block select-none pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.span
            key={current}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="font-display font-bold"
            style={{ fontSize: "9rem", lineHeight: 1, color: "rgba(250,248,245,0.04)", letterSpacing: "-0.05em" }}
          >
            {String(current + 1).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px z-20 origin-left"
        style={{ backgroundColor: "#e0271c", scaleX: scrollLineScale }}
      />

      <motion.div
        className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="font-sans text-[0.55rem] tracking-[0.25em] uppercase" style={{ color: "rgba(250,248,245,0.25)" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-10"
          style={{ background: "linear-gradient(to bottom, rgba(224,39,28,0.6), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
