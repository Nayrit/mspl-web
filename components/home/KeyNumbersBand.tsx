"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import { useLang } from "@/components/ui/LanguageContext";

const stats = [
  { value: 23,     suffix: "+", label: "Years of manufacturing",   detail: "Established 2002" },
  { value: 3,      suffix: "",  label: "Production facilities",    detail: "Across Bangladesh" },
  { value: 250000, suffix: "+", label: "Sq ft of production space", detail: "Under a single roof" },
  { value: 25000,  suffix: "+", label: "MT annual throughput",     detail: "Paper converted per year" },
  { value: 600,    suffix: "",  label: "People",                   detail: "Skilled workforce" },
  { value: 0,      suffix: "",  label: "ISO 9001:2015 certified",  detail: "Quality management standard", isText: true, textValue: "ISO" },
];

export default function KeyNumbersBand() {
  const { t } = useLang();
  return (
    <section className="relative section-padding overflow-hidden" style={{ backgroundColor: "#25282b", color: "#faf8f5" }} aria-label="Key figures">
      <div className="absolute bottom-0 left-0 rounded-full pointer-events-none" style={{ width:"28rem",height:"28rem",border:"1px solid rgba(224,39,28,0.08)",transform:"translate(-50%,50%)" }} />
      <div className="absolute bottom-0 left-0 rounded-full pointer-events-none" style={{ width:"18rem",height:"18rem",border:"1px solid rgba(224,39,28,0.12)",transform:"translate(-50%,50%)" }} />
      <div className="absolute top-0 right-0 pointer-events-none" style={{ width:"40%",height:"100%",background:"linear-gradient(to left,rgba(45,47,50,0.5),transparent)" }} />

      <div className="container-editorial relative">
        <ScrollFadeIn direction="up">
          <div className="flex items-center gap-3 mb-16 lg:mb-20">
            <span className="block h-px w-8" style={{ backgroundColor: "#e0271c" }} />
            <span className="font-sans font-medium" style={{ fontSize:"0.6875rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"rgba(250,248,245,0.4)" }}>
              {t.numbers.label}
            </span>
          </div>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap:"1px",backgroundColor:"rgba(250,248,245,0.06)" }}>
          {stats.map((stat, i) => (
            <ScrollFadeIn key={stat.label} direction="up" delay={i * 0.08} className="h-full">
              <div
                className="h-full flex flex-col justify-between p-6 sm:p-8 lg:p-12 group transition-all duration-500 cursor-default hover:-translate-y-1"
                style={{ backgroundColor:"#25282b" }}
                onMouseEnter={e=>(e.currentTarget.style.backgroundColor="#2d2f32")}
                onMouseLeave={e=>(e.currentTarget.style.backgroundColor="#25282b")}
              >
                <div>
                  <div className="font-display font-bold mb-3 transition-transform duration-500 group-hover:scale-105 origin-left whitespace-nowrap" style={{ fontSize:"clamp(2.25rem, 3.8vw, 4.5rem)",lineHeight:1,letterSpacing:"-0.03em",color:"#e0271c" }}>
                    {stat.isText
                      ? <span>{stat.textValue}</span>
                      : <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={1800} />
                    }
                  </div>
                  <p className="font-sans text-sm font-medium mb-1.5" style={{ color:"#faf8f5" }}>{stat.label}</p>
                  <p className="font-sans text-xs transition-colors duration-300" style={{ color:"rgba(250,248,245,0.35)" }}
                    onMouseEnter={e=>(e.currentTarget.style.color="rgba(250,248,245,0.6)")}
                    onMouseLeave={e=>(e.currentTarget.style.color="rgba(250,248,245,0.35)")}
                  >{stat.detail}</p>
                </div>
                <div className="mt-6 h-0.5 w-0 group-hover:w-full transition-all duration-500" style={{ backgroundColor:"#e0271c" }} />
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
