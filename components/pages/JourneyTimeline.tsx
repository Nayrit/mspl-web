"use client";

import { useState } from "react";
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
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate milestones to create a seamless infinite loop right to left
  const displayMilestones = [...milestones, ...milestones];

  return (
    <section className="section-padding bg-parchment-50 overflow-hidden relative border-y border-charcoal-100" aria-label="Journey timeline">
      {/* GPU Hardware-accelerated infinite right-to-left scrolling animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes journeyScrollLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-journey-scroll {
          display: flex;
          width: max-content;
          animation: journeyScrollLeft 42s linear infinite;
          will-change: transform;
        }
        .animate-journey-scroll.is-paused {
          animation-play-state: paused;
        }
      `}} />

      <div className="container-editorial mb-12 lg:mb-16">
        <ScrollFadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-display font-bold text-xs uppercase tracking-widest text-primary mb-3 block">
                Our History &amp; Evolution
              </span>
              <h2 className="font-display text-display-md font-bold text-charcoal">
                {heading}
              </h2>
            </div>
          </div>
        </ScrollFadeIn>
      </div>

      {/* Infinite Horizontal Timeline Track */}
      <div
        className="relative py-6 cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Continuous horizontal track line */}
        <div className="absolute top-[4.25rem] left-0 right-0 h-[2px] bg-charcoal-200/80 z-0 pointer-events-none" />

        <div className={`animate-journey-scroll gap-8 lg:gap-10 px-4 ${isPaused ? "is-paused" : ""}`}>
          {displayMilestones.map((m, idx) => (
            <div
              key={`${m.year}-${idx}`}
              className="relative w-[310px] sm:w-[350px] lg:w-[390px] shrink-0 group"
            >
              {/* Year & Node along the timeline track */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-5 h-5 rounded-full bg-primary border-[3px] border-white shadow-md group-hover:scale-125 transition-transform duration-300" />
                <span className="font-display font-bold text-2xl lg:text-3xl text-primary tracking-tight">
                  {m.year}
                </span>
                <div className="flex-1 h-[2px] bg-primary/30 group-hover:bg-primary transition-colors duration-300" />
              </div>

              {/* Milestone Card */}
              <div className="relative bg-white border border-charcoal-200/80 rounded-sm p-6 lg:p-8 shadow-sm group-hover:shadow-lg group-hover:border-primary/80 transition-all duration-300 h-[220px] flex flex-col justify-between overflow-hidden">
                {/* Decorative background watermark year */}
                <div className="absolute -bottom-4 -right-2 font-display font-bold text-7xl text-charcoal-100/40 pointer-events-none select-none">
                  {m.year}
                </div>

                <div className="relative z-10">
                  <span className="inline-block font-sans text-[10px] font-bold uppercase tracking-widest text-primary/80 mb-2">
                    Milestone
                  </span>
                  <h3 className="font-display text-lg lg:text-xl font-bold text-charcoal group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    {m.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-charcoal-400 mt-2.5 leading-relaxed line-clamp-3">
                    {m.description}
                  </p>
                </div>

                <div className="relative z-10 mt-4 pt-3 border-t border-charcoal-100 flex items-center justify-between text-[11px] font-sans font-semibold text-charcoal-400">
                  <span>Master Simex Paper Ltd.</span>
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {m.year} Chapter &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
