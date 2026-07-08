"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const aboutLinks = [
  { label: "Our Story", href: "/about/story" },
  { label: "Leadership", href: "/about/leadership" },
  { label: "Mission, Vision & Values", href: "/about/mission" },
];

export default function AboutSubNav() {
  const pathname = usePathname();

  return (
    <div className="bg-charcoal text-white border-b border-white/10 sticky top-16 lg:top-20 z-40">
      <div className="container-editorial flex items-center justify-center sm:justify-start gap-1 sm:gap-4 overflow-x-auto py-3">
        <span className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-white/40 mr-4 hidden md:block">
          Explore About:
        </span>
        {aboutLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full font-sans text-xs tracking-wider uppercase transition-all duration-300 ${
                isActive
                  ? "bg-primary text-white font-semibold shadow-sm"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
