"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useLang } from "@/components/ui/LanguageContext";

export default function ClosingCTABand() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ backgroundColor: "#25282b" }} aria-label="Get in touch">
      <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: "#e0271c" }} />

      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden xl:block pr-20">
        <motion.span
          className="font-display font-bold"
          style={{ fontSize: "18rem", lineHeight: 1, color: "rgba(250,248,245,0.02)", letterSpacing: "-0.05em" }}
          animate={isInView ? { opacity: [0.02, 0.04, 0.02] } : {}}
          transition={{ duration: 4, repeat: Infinity }}
        >
          10
        </motion.span>
      </div>

      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: "linear-gradient(rgba(250,248,245,1) 1px,transparent 1px),linear-gradient(90deg,rgba(250,248,245,1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="container-editorial py-24 lg:py-36 relative z-10">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity:0,x:-20 }} animate={isInView?{opacity:1,x:0}:{}} transition={{ duration:0.6 }} className="flex items-center gap-3 mb-8">
            <span className="block h-px w-8" style={{ backgroundColor: "#e0271c" }} />
            <span className="font-sans font-medium" style={{ fontSize:"0.6875rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"rgba(224,39,28,0.8)" }}>
              {t.closing.eyebrow}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity:0,y:30 }} animate={isInView?{opacity:1,y:0}:{}} transition={{ duration:0.8,delay:0.1 }}
            className="font-display font-bold mb-8"
            style={{ fontSize:"clamp(2.5rem,5.5vw,5.5rem)",lineHeight:1.05,letterSpacing:"-0.025em",color:"#faf8f5" }}
          >
            {t.closing.headline}
          </motion.h2>

          <motion.p initial={{ opacity:0,y:20 }} animate={isInView?{opacity:1,y:0}:{}} transition={{ duration:0.7,delay:0.2 }}
            className="font-sans font-light max-w-xl mb-12"
            style={{ fontSize:"clamp(1.0625rem,1.5vw,1.25rem)",lineHeight:1.8,color:"rgba(250,248,245,0.55)" }}
          >
            {t.closing.body}
          </motion.p>

          <motion.div initial={{ opacity:0,y:20 }} animate={isInView?{opacity:1,y:0}:{}} transition={{ duration:0.7,delay:0.3 }} className="flex flex-wrap items-center gap-6">
            <Link href="/contact" id="closing-cta"
              className="inline-flex items-center gap-2 font-sans font-semibold text-sm tracking-wide px-8 py-4 group transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              style={{ backgroundColor: "#e0271c", color: "#faf8f5" }}
              onMouseEnter={e=>(e.currentTarget.style.backgroundColor="#b51f16")}
              onMouseLeave={e=>(e.currentTarget.style.backgroundColor="#e0271c")}
            >
              {t.closing.cta}
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(224,39,28,0.15)" }}>
                <svg className="w-4 h-4" style={{ color:"#e0271c" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="font-sans text-sm" style={{ color:"rgba(250,248,245,0.5)" }}>
                {t.closing.turnaround}{" "}
                <strong style={{ color:"rgba(250,248,245,0.85)",fontWeight:600 }}>{t.closing.days}</strong>
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity:0 }} animate={isInView?{opacity:1}:{}} transition={{ duration:1,delay:0.5 }}
          className="absolute right-0 bottom-0 hidden xl:block pr-16 pb-16"
        >
          <div className="text-right space-y-1">
            <p className="font-sans text-xs tracking-widest uppercase" style={{ color:"rgba(250,248,245,0.2)" }}>Contact us directly</p>
            <a href="tel:+88022335096" className="block font-sans text-sm transition-colors" style={{ color:"rgba(250,248,245,0.4)" }}
              onMouseEnter={e=>(e.currentTarget.style.color="#e0271c")} onMouseLeave={e=>(e.currentTarget.style.color="rgba(250,248,245,0.4)")}>
              +880 2 2233 50096
            </a>
            <a href="mailto:msplbd@gmail.com" className="block font-sans text-sm transition-colors" style={{ color:"rgba(250,248,245,0.4)" }}
              onMouseEnter={e=>(e.currentTarget.style.color="#e0271c")} onMouseLeave={e=>(e.currentTarget.style.color="rgba(250,248,245,0.4)")}>
              msplbd@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
