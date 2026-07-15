"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import { useLang } from "@/components/ui/LanguageContext";

const stats = [
  { value: 23,     suffix: "+", label: "Years of manufacturing",   detail: "Established 2002",            image: "/hero-bg.jpg" },
  { value: 3,      suffix: "",  label: "Production facilities",    detail: "Across Bangladesh",           image: "/capabilities-factory.jpg" },
  { value: 250000, suffix: "+", label: "Sq ft of production space", detail: "Under a single roof",        image: "/card-offset-packaging.jpg" },
  { value: 25000,  suffix: "+", label: "MT annual throughput",     detail: "Paper converted per year",    image: "/card-web-printing.jpg" },
  { value: 600,    suffix: "",  label: "People",                   detail: "Skilled workforce",           image: "/hero-bg-2.jpg" },
  { value: 0,      suffix: "",  label: "ISO 9001:2015 certified",  detail: "Quality management standard", image: "/sustainability-solar.jpg", isText: true, textValue: "ISO" },
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
            <span className="block h-px w-8" style={{ backgroundColor: "#d61016" }} />
            <span className="eyebrow" style={{ color: "rgba(250,248,245,0.6)" }}>
              {t.numbers.label}
            </span>
          </div>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap:"1px",backgroundColor:"rgba(250,248,245,0.06)" }}>
          {stats.map((stat, i) => (
            <ScrollFadeIn key={stat.label} direction="up" delay={i * 0.08} className="h-full">
              <div
                className="relative overflow-hidden h-full flex flex-col justify-between p-6 sm:p-8 lg:p-8 xl:p-12 group transition-all duration-500 cursor-default hover:-translate-y-1 min-h-[240px]"
                style={{ backgroundColor:"#25282b" }}
              >
                {/* Aesthetic Background Image Placeholder Layer */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <img
                    src={stat.image}
                    alt=""
                    className="w-full h-full object-cover object-center opacity-25 grayscale transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-45 group-hover:grayscale-0"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#25282b] via-[#25282b]/85 to-[#25282b]/40 transition-opacity duration-500 group-hover:opacity-80" />
                  <div className="absolute inset-0 bg-[#25282b]/40 transition-colors duration-500 group-hover:bg-[#25282b]/20" />
                </div>

                {/* Card Writing / Content */}
                <div className="relative z-10">
                  <div className="font-display font-bold mb-3 transition-transform duration-500 group-hover:scale-105 origin-left whitespace-nowrap" style={{ fontSize:"clamp(2rem, 3vw, 4rem)",lineHeight:1,letterSpacing:"-0.03em",color:"#d61016" }}>
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
                <div className="relative z-10 mt-6 h-0.5 w-0 group-hover:w-full transition-all duration-500" style={{ backgroundColor:"#d61016" }} />
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
