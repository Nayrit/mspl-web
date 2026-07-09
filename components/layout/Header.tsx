"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/components/ui/LanguageContext";

const navLinks = [
  { key: "about" as const,          href: "/about" },
  { key: "whatWeDo" as const,       href: "/what-we-do", hasMega: true,
    megaItems: [
      { label: "Computer & Business Forms",   href: "/what-we-do/computer-forms",    img: "/card-computer-forms.jpg",    desc: "Secure, traceable continuous forms & OMR sheets" },
      { label: "Web Printing",                href: "/what-we-do/web-printing",       img: "/card-web-printing.jpg",      desc: "Textbooks, exercise books & calendars at volume" },
      { label: "Offset Printing & Packaging", href: "/what-we-do/offset-packaging",  img: "/card-offset-packaging.jpg",  desc: "Commercial packaging with premium finishes" },
      { label: "Thermal & ATM/POS Rolls",     href: "/what-we-do/thermal-rolls",     img: "/card-thermal-rolls.jpg",     desc: "Precision-slit, dust-free transactional rolls" },
      { label: "Rigid Boxes",                 href: "/what-we-do/rigid-boxes",        img: "/card-rigid-boxes.jpg",       desc: "Luxury packaging on automated smart lines" },
      { label: "Stickers & Labels",           href: "/what-we-do/stickers-labels",   img: "/card-stickers-labels.jpg",   desc: "High-definition adhesive labels, built to stick" },
    ],
  },
  { key: "capabilities"  as const, href: "/capabilities" },
  { key: "sustainability" as const, href: "/sustainability" },
  { key: "clients"       as const, href: "/clients" },
  { key: "contact"       as const, href: "/contact" },
];

export default function Header() {
  const { t, lang, setLang } = useLang();
  const pathname = usePathname();
  const [scrolled,   setScrolled]   = useState(false);
  const [megaOpen,   setMegaOpen]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const megaRef  = useRef<HTMLDivElement>(null);
  const megaTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const openMega  = () => { if (megaTimer.current) clearTimeout(megaTimer.current); setMegaOpen(true); };
  const closeMega = () => { megaTimer.current = setTimeout(() => setMegaOpen(false), 200); };

  const forceSolid =
    pathname === "/contact" ||
    pathname === "/careers" ||
    pathname === "/privacy-policy" ||
    pathname === "/terms";
  const solid = scrolled || mobileOpen || forceSolid;

  useEffect(() => {
    const fn = (e: MouseEvent) => { if (megaRef.current && !megaRef.current.contains(e.target as Node)) setMegaOpen(false); };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);
  useEffect(() => { document.body.style.overflow = mobileOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [mobileOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{ backgroundColor: solid ? "rgba(250,248,245,0.97)" : "transparent", backdropFilter: solid ? "blur(12px)" : "none", boxShadow: solid ? "0 1px 0 rgba(37,40,43,0.08)" : "none" }}
      >
        {/* Red top rule — only when solid */}
        <div className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500" style={{ backgroundColor: solid ? "#e0271c" : "transparent" }} />

        <div className="container-editorial flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center" aria-label="Master Simex — Home">
            <img
              src="/mspl-logo.png"
              alt="Master Simex Paper Limited"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8" ref={megaRef}>
            {navLinks.map(item => (
              item.hasMega ? (
                <div key={item.key} className="relative" onMouseEnter={openMega} onMouseLeave={closeMega}>
                  <button
                    className="flex items-center gap-1 font-sans text-[0.75rem] xl:text-[0.8rem] font-medium tracking-wide transition-colors duration-300"
                    style={{ color: solid ? "#25282b" : "rgba(250,248,245,0.85)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#e0271c")}
                    onMouseLeave={e => (e.currentTarget.style.color = solid ? "#25282b" : "rgba(250,248,245,0.85)")}
                    id="nav-what-we-do"
                  >
                    {t.nav[item.key]}
                    <svg className={`w-3 h-3 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[720px] shadow-2xl z-50 border-t-2"
                        style={{ backgroundColor: "#faf8f5", borderColor: "#e0271c" }}
                        role="menu"
                      >
                        <div className="grid grid-cols-3 gap-0 p-2">
                          {item.megaItems?.map(mega => (
                            <Link key={mega.label} href={mega.href} className="group flex gap-3 p-4 transition-colors duration-200" style={{ backgroundColor: "transparent" }}
                              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#f2ede7")}
                              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
                              onClick={() => setMegaOpen(false)}
                            >
                              <div className="w-14 h-14 flex-shrink-0 overflow-hidden" style={{ backgroundColor: "#e4e5e6" }}>
                                <img src={mega.img} alt={mega.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                              </div>
                              <div>
                                <p className="font-sans text-xs font-semibold text-charcoal leading-tight mb-1 group-hover:text-primary transition-colors" style={{ color: "#25282b" }} onMouseEnter={e=>(e.currentTarget.style.color="#e0271c")} onMouseLeave={e=>(e.currentTarget.style.color="#25282b")}>{mega.label}</p>
                                <p className="font-sans text-[0.65rem] leading-tight" style={{ color: "#72777d" }}>{mega.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="border-t px-6 py-3" style={{ borderColor: "#e4e5e6", backgroundColor: "#f2ede7" }}>
                          <Link href="/what-we-do" className="font-sans text-xs font-medium flex items-center gap-1 transition-colors" style={{ color: "#72777d" }}
                            onMouseEnter={e=>(e.currentTarget.style.color="#e0271c")} onMouseLeave={e=>(e.currentTarget.style.color="#72777d")}
                            onClick={() => setMegaOpen(false)}
                          >
                            View all specialisms <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={item.key} href={item.href}
                  className="font-sans text-[0.75rem] xl:text-[0.8rem] font-medium tracking-wide transition-colors duration-300"
                  style={{ color: solid ? "#25282b" : "rgba(250,248,245,0.85)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#e0271c")}
                  onMouseLeave={e => (e.currentTarget.style.color = solid ? "#25282b" : "rgba(250,248,245,0.85)")}
                >
                  {t.nav[item.key]}
                </Link>
              )
            ))}
          </nav>

          {/* Right utilities */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-4">
            <button
              onClick={() => setLang(lang === "EN" ? "BN" : "EN")}
              id="lang-toggle"
              className="flex items-center justify-center font-sans text-xs font-bold tracking-wider transition-all duration-300 px-3 py-1.5 rounded border"
              style={{ borderColor: solid ? "#c8cacc" : "rgba(250,248,245,0.3)", color: solid ? "#25282b" : "rgba(250,248,245,0.85)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor="#e0271c"; (e.currentTarget as HTMLElement).style.color="#e0271c"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor= solid ? "#c8cacc":"rgba(250,248,245,0.3)"; (e.currentTarget as HTMLElement).style.color= solid?"#25282b":"rgba(250,248,245,0.85)"; }}
              aria-label="Toggle language"
            >
              {lang === "EN" ? "বাংলা" : "EN"}
            </button>

            <a
              href="/mspl-company-profile.pdf"
              download
              id="header-download-profile"
              className="hidden xl:flex items-center gap-1.5 font-sans text-[0.68rem] font-medium tracking-wide transition-colors duration-300"
              style={{ color: solid ? "#72777d" : "rgba(250,248,245,0.55)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#e0271c")}
              onMouseLeave={e => (e.currentTarget.style.color = solid ? "#72777d" : "rgba(250,248,245,0.55)")}
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {t.nav.downloadProfile}
            </a>

            <Link href="/contact" id="header-cta"
              className="font-sans text-[0.72rem] font-bold tracking-wider uppercase px-5 py-2.5 transition-all duration-300"
              style={{ backgroundColor: "#e0271c", color: "#faf8f5" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#b51f16")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#e0271c")}
            >
              {t.nav.getInTouch}
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close" : "Menu"}
            id="mobile-menu-toggle"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              {[0,1,2].map(i => (
                <span key={i} className="block h-0.5 w-full transition-all duration-300"
                  style={{
                    backgroundColor: solid || mobileOpen ? "#25282b" : "#faf8f5",
                    transform: i===0 && mobileOpen ? "rotate(45deg) translate(0, 8px)" : i===2 && mobileOpen ? "rotate(-45deg) translate(0,-8px)" : "none",
                    opacity: i===1 && mobileOpen ? 0 : 1,
                  }}
                />
              ))}
            </div>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 flex flex-col pt-20 pb-10 overflow-y-auto"
            style={{ backgroundColor: "#faf8f5" }}
          >
            {/* Red top rule */}
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ backgroundColor: "#e0271c" }} />
            <nav className="flex flex-col px-8 gap-1">
              {navLinks.map((item, i) => (
                <motion.div key={item.key} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 + 0.1 }}>
                  <Link href={item.href}
                    className="block font-display text-3xl font-bold py-3 border-b transition-colors"
                    style={{ color: "#25282b", borderColor: "#e4e5e6" }}
                    onMouseEnter={e=>(e.currentTarget.style.color="#e0271c")}
                    onMouseLeave={e=>(e.currentTarget.style.color="#25282b")}
                    onClick={() => setMobileOpen(false)}
                  >
                    {t.nav[item.key]}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto px-8 pt-8 flex flex-col gap-4">
              <Link href="/contact?quote=1"
                className="w-full text-center font-sans font-semibold text-sm tracking-wider uppercase py-4 transition-colors border border-charcoal-200"
                style={{ color: "#25282b" }}
                onMouseEnter={e=>{ e.currentTarget.style.borderColor="#e0271c"; e.currentTarget.style.color="#e0271c"; }}
                onMouseLeave={e=>{ e.currentTarget.style.borderColor="#e4e5e6"; e.currentTarget.style.color="#25282b"; }}
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.requestQuote}
              </Link>
              <Link href="/contact"
                className="w-full text-center font-sans font-semibold text-sm tracking-wider uppercase py-4 transition-colors"
                style={{ backgroundColor: "#e0271c", color: "#faf8f5" }}
                onMouseEnter={e=>(e.currentTarget.style.backgroundColor="#b51f16")}
                onMouseLeave={e=>(e.currentTarget.style.backgroundColor="#e0271c")}
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.getInTouch}
              </Link>
              <button onClick={() => setLang(lang === "EN" ? "BN" : "EN")} className="font-sans text-sm font-bold tracking-widest uppercase py-2 border border-charcoal-200 rounded" style={{ color: "#25282b" }}>
                {lang === "EN" ? "বাংলা" : "EN"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
