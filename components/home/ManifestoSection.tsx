"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/components/ui/LanguageContext";

export default function ManifestoSection() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const words = t.manifesto.body.split(" ");

  return (
    <section ref={ref} className="relative section-padding overflow-hidden" style={{ backgroundColor: "#faf8f5" }} aria-label="Our manifesto">
      {/* Paper texture bg */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{ backgroundImage: "url('/paper-texture.jpg')", backgroundSize: "cover" }} />

      {/* Left red bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: "#e0271c" }} />

      <div className="container-editorial relative">
        {/* Decorative quote */}
        <motion.span
          className="absolute -top-4 -left-2 font-display font-bold select-none pointer-events-none"
          style={{ fontSize: "14rem", lineHeight: 1, color: "rgba(224,39,28,0.05)", letterSpacing: "-0.05em" }}
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 1.2 }}
        >
          &ldquo;
        </motion.span>

        <div className="max-w-4xl lg:ml-[8%]">
          <blockquote>
            <p className="font-display font-medium" style={{ fontSize: "clamp(1.5rem,3vw,3rem)", lineHeight: 1.22, letterSpacing: "-0.02em", color: "#25282b" }}>
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  style={{ marginRight: "0.27em" }}
                  initial={{ opacity: 0, y: 18 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                  transition={{ duration: 0.45, delay: i * 0.022, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {word}
                </motion.span>
              ))}
            </p>
          </blockquote>

          {/* Attribution */}
          <motion.div
            className="mt-12 flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.8 }}
          >
            <span className="block h-px w-12" style={{ backgroundColor: "#e0271c" }} />
            <span className="font-sans font-medium" style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#72777d" }}>
              {t.manifesto.attribution}
            </span>
          </motion.div>

          {/* Inline stats */}
          <motion.div
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t"
            style={{ borderColor: "#e4e5e6" }}
            initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 1 }}
          >
            {[
              { num: "95%",  label: "Client retention rate" },
              { num: "23+",  label: "Years of manufacturing" },
              { num: "< 1%", label: "Defect rate across all lines" },
            ].map(({ num, label }) => (
              <div key={label} className="group">
                <p
                  className="font-display font-bold mb-2 transition-colors duration-300"
                  style={{ fontSize: "clamp(2.5rem,5vw,3.5rem)", lineHeight: 1, color: "#25282b" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#e0271c")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#25282b")}
                >
                  {num}
                </p>
                <p className="font-sans text-sm" style={{ color: "#72777d" }}>{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
