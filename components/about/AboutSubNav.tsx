"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const aboutSections = [
  { id: "mission", label: "Mission, Vision & Values", href: "/about#mission" },
  { id: "history", label: "Our Story", href: "/about#history" },
  { id: "leadership", label: "Leadership", href: "/about#leadership" },
];

export default function AboutSubNav() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string>("mission");

  useEffect(() => {
    // Check if hash exists on load
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      if (["mission", "history", "leadership"].includes(hash)) {
        setActiveId(hash);
      }
    }

    const handleScroll = () => {
      const scrollPos = window.scrollY + 140; // offset for sticky headers
      let currentSection = "mission";

      for (const section of aboutSections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            currentSection = section.id;
          }
        }
      }
      setActiveId(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string, href: string) => {
    if (pathname === "/about") {
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const offset = 120;
        const targetTop = target.offsetTop - offset;
        window.scrollTo({ top: targetTop, behavior: "smooth" });
        window.history.pushState(null, "", `#${id}`);
        setActiveId(id);
      }
    }
  };

  return (
    <div className="bg-charcoal text-white border-b border-white/10 sticky top-16 lg:top-20 z-40 shadow-md">
      <div className="container-editorial flex items-center justify-center sm:justify-start gap-1 sm:gap-4 overflow-x-auto py-3">
        <span className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-white/40 mr-4 hidden md:block flex-shrink-0">
          Chronology:
        </span>
        {aboutSections.map((section) => {
          const isActive = activeId === section.id;
          return (
            <Link
              key={section.id}
              href={section.href}
              onClick={(e) => handleClick(e, section.id, section.href)}
              className={`px-4 py-2 rounded-full font-sans text-xs tracking-wider uppercase transition-all duration-300 flex-shrink-0 ${
                isActive
                  ? "bg-primary text-white font-semibold shadow-sm"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {section.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
