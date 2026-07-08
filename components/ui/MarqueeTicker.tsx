"use client";

import { useLang } from "@/components/ui/LanguageContext";

export default function MarqueeTicker() {
  const { t } = useLang();
  const items = t.ticker;
  const all   = [...items, ...items]; // duplicate for seamless loop

  return (
    <div className="overflow-hidden select-none relative" style={{ backgroundColor: "#e0271c", paddingTop: "0.75rem", paddingBottom: "0.75rem" }} aria-hidden="true">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "mspl-marquee 40s linear infinite", width: "max-content" }}
      >
        {all.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4" style={{ paddingLeft: "2rem", paddingRight: "2rem", fontFamily: "var(--font-inter)", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#faf8f5" }}>
            {item}
            <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "rgba(250,248,245,0.4)", flexShrink: 0, display: "inline-block" }} />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes mspl-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
