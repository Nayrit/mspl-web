"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

interface JourneyTimelineProps {
  heading: string;
  milestones: TimelineMilestone[];
}

export default function JourneyTimeline({ heading, milestones }: JourneyTimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={ref} className="section-padding bg-parchment-50" aria-label="Journey timeline">
      <div className="container-editorial">
        <ScrollFadeIn direction="up">
          <h2 className="font-display text-display-md font-bold text-charcoal mb-16 lg:mb-20">{heading}</h2>
        </ScrollFadeIn>

        <div className="relative">
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-charcoal-100 lg:-translate-x-px" />
          <motion.div
            className="absolute left-4 lg:left-1/2 top-0 w-px lg:-translate-x-px origin-top"
            style={{ height: lineHeight, backgroundColor: "#e0271c" }}
          />

          <div className="space-y-12 lg:space-y-0">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <ScrollFadeIn key={m.year} direction={isLeft ? "right" : "left"} delay={i * 0.08}>
                  <div
                    className={`relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 mb-12 lg:mb-20 items-center ${isLeft ? "" : "lg:direction-rtl"}`}
                    onMouseEnter={() => setActive(i)}
                  >
                    <div className={`${isLeft ? "lg:pr-16 lg:text-right" : "lg:col-start-2 lg:pl-16"} pl-12 lg:pl-0`}>
                      <span className="font-display font-bold text-primary text-2xl lg:text-3xl mb-2 block">{m.year}</span>
                      <h3 className="font-display text-xl lg:text-2xl font-bold text-charcoal mb-3">{m.title}</h3>
                      <p className="font-sans text-sm text-charcoal-400 leading-relaxed">{m.description}</p>
                    </div>

                    <div className={`hidden lg:block ${isLeft ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"}`} />

                    <motion.div
                      className="absolute left-4 lg:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 border-2 border-parchment-50"
                      style={{ top: "1.5rem", backgroundColor: active === i ? "#e0271c" : "#c8cacc" }}
                      animate={{ scale: active === i ? 1.4 : 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </ScrollFadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
