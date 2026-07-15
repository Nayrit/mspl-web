"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/components/ui/LanguageContext";
import { useSiteImage, useSiteImages } from "@/components/ui/SiteImagesContext";

const navLinks = [
  { key: "about" as const,          href: "/about" },
  { key: "whatWeDo" as const,       href: "/what-we-do", hasMega: true,
    megaItems: [
      { label: "Offset Printing & Packaging", href: "/what-we-do/offset-packaging",  slotId: "nav-mega-offset",         img: "/card-offset-packaging.jpg",  desc: "Commercial packaging with premium finishes", highlighted: true },
      { label: "Computer Forms",              href: "/what-we-do/computer-forms",    slotId: "nav-mega-computer-forms", img: "/card-computer-forms.jpg",    desc: "Precision continuous paper & OMR sheets" },
      { label: "Business Forms",              href: "/what-we-do/business-forms",    slotId: "nav-mega-business-forms", img: "/card-computer-forms.jpg",    desc: "NCR multi-ply auto-carbon forms" },
      { label: "Web Printing",                href: "/what-we-do/web-printing",       slotId: "nav-mega-web",            img: "/card-web-printing.jpg",      desc: "Textbooks, exercise books & calendars at volume" },
      { label: "Rigid Boxes",                 href: "/what-we-do/rigid-boxes",        slotId: "nav-mega-rigid",          img: "/card-rigid-boxes.jpg",       desc: "Luxury packaging on automated smart lines" },
      { label: "Thermal & ATM/POS Rolls",     href: "/what-we-do/thermal-rolls",     slotId: "nav-mega-thermal",        img: "/card-thermal-rolls.jpg",     desc: "Precision-slit, dust-free transactional rolls" },
      { label: "Stickers & Labels",           href: "/what-we-do/stickers-labels",   slotId: "nav-mega-labels",         img: "/card-stickers-labels.jpg",   desc: "High-definition adhesive labels, built to stick" },
    ],
  },
  { key: "capabilities" as const, href: "/capabilities" },
  { key: "clients"      as const, href: "/clients" },
  { key: "contact"      as const, href: "/contact" },
  { key: "careers"      as const, href: "/careers" },
];

export default function Header() {
  const { t } = useLang();
  const logo = useSiteImage("brand-logo", "/mspl-logo.png");
  const images = useSiteImages();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileWhatOpen, setMobileWhatOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const megaTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const openMega = () => {
    if (megaTimer.current) clearTimeout(megaTimer.current);
    setMegaOpen(true);
  };
  const closeMega = () => {
    megaTimer.current = setTimeout(() => setMegaOpen(false), 200);
  };
  const toggleMega = () => {
    if (megaTimer.current) clearTimeout(megaTimer.current);
    setMegaOpen((v) => !v);
  };

  const forceSolid =
    pathname === "/contact" ||
    pathname === "/careers" ||
    pathname === "/privacy-policy" ||
    pathname === "/terms";
  const solid = scrolled || mobileOpen || forceSolid;

  useEffect(() => {
    const fn = (e: PointerEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) setMegaOpen(false);
    };
    document.addEventListener("pointerdown", fn);
    return () => document.removeEventListener("pointerdown", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
    setMobileWhatOpen(false);
  }, [pathname]);

  const whatWeDo = navLinks.find((l) => l.hasMega);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: solid ? "rgba(250,248,245,0.97)" : "transparent",
          backdropFilter: solid ? "blur(12px)" : "none",
          boxShadow: solid ? "0 1px 0 rgba(37,40,43,0.08)" : "none",
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500"
          style={{ backgroundColor: solid ? "#d61016" : "transparent" }}
        />

        <div className="container-editorial flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex-shrink-0 flex items-center" aria-label="Master Simex, Home">
            <img
              src={logo}
              alt="Master Simex Paper Limited"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-8" ref={megaRef}>
            {navLinks.map((item) =>
              item.hasMega ? (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={openMega}
                  onMouseLeave={closeMega}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 font-sans text-[0.75rem] xl:text-[0.8rem] font-medium tracking-wide transition-colors duration-300 min-h-[44px]"
                    style={{ color: solid ? "#25282b" : "rgba(250,248,245,0.85)" }}
                    onClick={toggleMega}
                    aria-expanded={megaOpen}
                    aria-controls="nav-what-we-do-menu"
                    id="nav-what-we-do"
                  >
                    {t.nav[item.key]}
                    <svg
                      className={`w-3 h-3 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        id="nav-what-we-do-menu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed top-16 lg:top-20 left-0 right-0 w-full shadow-2xl z-50 border-t border-charcoal-200/30 overflow-y-auto max-h-[calc(100dvh-5rem)]"
                        style={{ backgroundColor: "#faf8f5" }}
                        role="menu"
                      >
                        <div className="h-[3px] w-full" style={{ backgroundColor: "#d61016" }} />

                        <div className="container-editorial py-6 lg:py-8">
                          <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-charcoal-200/50">
                            <p className="font-display font-bold text-xs tracking-wider uppercase text-charcoal">
                              Manufacturing Specialisms
                            </p>
                            <Link
                              href="/what-we-do"
                              onClick={() => setMegaOpen(false)}
                              className="font-sans text-xs font-semibold text-primary hover:underline flex items-center gap-1 min-h-[44px]"
                            >
                              Explore all 7 divisions →
                            </Link>
                          </div>

                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                            {item.megaItems?.[0] && (
                              <Link
                                href={item.megaItems[0].href}
                                onClick={() => setMegaOpen(false)}
                                className="group lg:col-span-5 flex flex-col justify-between border border-charcoal-200/80 bg-white/70 p-4 lg:p-5 shadow-sm hover:shadow-md hover:border-primary transition-all duration-300"
                              >
                                <div className="relative w-full flex-1 min-h-[190px] xl:min-h-[220px] overflow-hidden bg-charcoal-100 mb-4">
                                  <img
                                    src={images[item.megaItems[0].slotId] || item.megaItems[0].img}
                                    alt={item.megaItems[0].label}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                  />
                                </div>
                                <div>
                                  <h3 className="font-display font-bold text-lg xl:text-xl text-charcoal group-hover:text-primary transition-colors duration-200">
                                    {item.megaItems[0].label}
                                  </h3>
                                  <p className="font-sans text-xs xl:text-sm text-charcoal-400 mt-1.5 leading-relaxed line-clamp-2">
                                    {item.megaItems[0].desc}
                                  </p>
                                  <div className="mt-3 inline-flex items-center gap-1.5 font-sans text-xs xl:text-sm font-bold text-primary group-hover:translate-x-1.5 transition-transform duration-200">
                                    Explore Offset & Packaging →
                                  </div>
                                </div>
                              </Link>
                            )}

                            <div className="lg:col-span-7 grid grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-5">
                              {item.megaItems?.slice(1).map((mega) => (
                                <Link
                                  key={mega.label}
                                  href={mega.href}
                                  onClick={() => setMegaOpen(false)}
                                  className="group flex flex-col justify-between"
                                >
                                  <div>
                                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-charcoal-100 mb-2.5">
                                      <img
                                        src={images[mega.slotId] || mega.img}
                                        alt={mega.label}
                                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                      />
                                    </div>
                                    <div className="flex items-start justify-between gap-2">
                                      <div>
                                        <h4 className="font-display font-bold text-xs xl:text-sm text-charcoal group-hover:text-primary transition-colors duration-200">
                                          {mega.label}
                                        </h4>
                                        <p className="font-sans text-[11px] text-charcoal-400 mt-0.5 line-clamp-1">
                                          {mega.desc}
                                        </p>
                                      </div>
                                      <span className="font-sans text-sm text-charcoal-400 group-hover:text-primary transition-all duration-200 group-hover:translate-x-1 shrink-0">
                                        →
                                      </span>
                                    </div>
                                  </div>
                                  <div className="mt-2.5 border-b border-charcoal-200 group-hover:border-primary transition-colors duration-200" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.key}
                  href={item.href}
                  className="font-sans text-[0.75rem] xl:text-[0.8rem] font-medium tracking-wide transition-colors duration-300 min-h-[44px] flex items-center hover:text-primary"
                  style={{ color: solid ? "#25282b" : "rgba(250,248,245,0.85)" }}
                >
                  {t.nav[item.key]}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              id="header-cta"
              className="font-sans text-[0.72rem] font-bold tracking-wider uppercase px-5 py-2.5 transition-all duration-300 hover:brightness-110 min-h-[44px] flex items-center"
              style={{ backgroundColor: "#d61016", color: "#faf8f5" }}
            >
              {t.nav.getInTouch}
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            id="mobile-menu-toggle"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="block h-0.5 w-full transition-all duration-300"
                  style={{
                    backgroundColor: solid || mobileOpen ? "#25282b" : "#faf8f5",
                    transform:
                      i === 0 && mobileOpen
                        ? "rotate(45deg) translate(0, 8px)"
                        : i === 2 && mobileOpen
                          ? "rotate(-45deg) translate(0,-8px)"
                          : "none",
                    opacity: i === 1 && mobileOpen ? 0 : 1,
                  }}
                />
              ))}
            </div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 flex flex-col pt-20 pb-[max(2.5rem,env(safe-area-inset-bottom))] overflow-y-auto"
            style={{ backgroundColor: "#faf8f5" }}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ backgroundColor: "#d61016" }} />
            <nav className="flex flex-col px-6 sm:px-8 gap-1">
              {navLinks.map((item, i) =>
                item.hasMega ? (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                    className="border-b"
                    style={{ borderColor: "#e4e5e6" }}
                  >
                    <button
                      type="button"
                      className="w-full flex items-center justify-between font-display text-3xl font-bold py-3 min-h-[52px] text-left"
                      style={{ color: "#25282b" }}
                      aria-expanded={mobileWhatOpen}
                      onClick={() => setMobileWhatOpen((v) => !v)}
                    >
                      {t.nav[item.key]}
                      <svg
                        className={`w-5 h-5 transition-transform ${mobileWhatOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {mobileWhatOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pb-3"
                        >
                          <Link
                            href="/what-we-do"
                            onClick={() => setMobileOpen(false)}
                            className="block font-sans text-sm font-semibold text-primary py-3 min-h-[44px]"
                          >
                            View all divisions →
                          </Link>
                          {whatWeDo?.megaItems?.map((mega) => (
                            <Link
                              key={mega.href}
                              href={mega.href}
                              onClick={() => setMobileOpen(false)}
                              className="block font-sans text-base text-charcoal-500 py-3 border-t border-charcoal-100 min-h-[48px] active:text-primary"
                            >
                              {mega.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block font-display text-3xl font-bold py-3 border-b min-h-[52px] flex items-center active:text-primary"
                      style={{ color: "#25282b", borderColor: "#e4e5e6" }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {t.nav[item.key]}
                    </Link>
                  </motion.div>
                ),
              )}
            </nav>
            <div className="mt-auto px-6 sm:px-8 pt-8 flex flex-col gap-3">
              <Link
                href="/contact?quote=1"
                className="w-full text-center font-sans font-semibold text-sm tracking-wider uppercase py-4 min-h-[48px] flex items-center justify-center border border-charcoal-200 active:border-primary active:text-primary"
                style={{ color: "#25282b" }}
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.requestQuote}
              </Link>
              <Link
                href="/contact"
                className="w-full text-center font-sans font-semibold text-sm tracking-wider uppercase py-4 min-h-[48px] flex items-center justify-center"
                style={{ backgroundColor: "#d61016", color: "#faf8f5" }}
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.getInTouch}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
