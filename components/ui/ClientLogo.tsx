"use client";

import { motion } from "framer-motion";

interface ClientLogoProps {
  name: string;
  slug: string;
  className?: string;
  sector?: string;
  partnerType?: string;
}

export default function ClientLogo({ name, slug, className = "", sector = "Enterprise Partner", partnerType = "Continuous Supply" }: ClientLogoProps) {
  // Bespoke high-impact brand mark rendering
  const renderBrandVisual = () => {
    switch (slug) {
      case "bangladesh-bank":
        return (
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#006a4e]/15 flex items-center justify-center border-2 border-[#006a4e] group-hover:bg-[#006a4e] group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm">
              <svg className="w-7 h-7 text-[#006a4e] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="text-left">
              <span className="block font-display font-bold text-lg leading-tight text-charcoal group-hover:text-[#006a4e] transition-colors">Bangladesh Bank</span>
              <span className="text-[0.65rem] font-sans tracking-wider uppercase text-charcoal-400 group-hover:text-charcoal-600">Central Bank of Bangladesh</span>
            </div>
          </div>
        );
      case "sonali-bank":
        return (
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#f5a623]/15 flex items-center justify-center border-2 border-[#f5a623] group-hover:bg-[#f5a623] group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm">
              <svg className="w-7 h-7 text-[#d48800] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div className="text-left">
              <span className="block font-display font-bold text-lg leading-tight text-charcoal group-hover:text-[#d48800] transition-colors">Sonali Bank PLC</span>
              <span className="text-[0.65rem] font-sans tracking-wider uppercase text-charcoal-400 group-hover:text-charcoal-600">Largest State Bank</span>
            </div>
          </div>
        );
      case "brac":
        return (
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#ec008c]/15 flex items-center justify-center border-2 border-[#ec008c] group-hover:bg-[#ec008c] group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm">
              <span className="font-display font-black text-xl text-[#ec008c] group-hover:text-white tracking-tighter transition-colors">B</span>
            </div>
            <div className="text-left">
              <span className="block font-display font-bold text-xl leading-tight tracking-tight text-charcoal group-hover:text-[#ec008c] transition-colors">BRAC</span>
              <span className="text-[0.65rem] font-sans tracking-wider uppercase text-charcoal-400 group-hover:text-charcoal-600">Global NGO & Enterprise</span>
            </div>
          </div>
        );
      case "grameenphone":
        return (
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#0073e6]/15 flex items-center justify-center border-2 border-[#0073e6] group-hover:bg-[#0073e6] group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm">
              <svg className="w-7 h-7 text-[#0073e6] group-hover:text-white transition-colors animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
            <div className="text-left">
              <span className="block font-display font-bold text-lg leading-tight text-charcoal group-hover:text-[#0073e6] transition-colors">Grameenphone</span>
              <span className="text-[0.65rem] font-sans tracking-wider uppercase text-charcoal-400 group-hover:text-charcoal-600">Telecom Leader</span>
            </div>
          </div>
        );
      case "robi":
        return (
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#ed1c24]/15 flex items-center justify-center border-2 border-[#ed1c24] group-hover:bg-[#ed1c24] group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm">
              <svg className="w-7 h-7 text-[#ed1c24] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
              </svg>
            </div>
            <div className="text-left">
              <span className="block font-display font-bold text-lg leading-tight text-charcoal group-hover:text-[#ed1c24] transition-colors">Robi Axiata</span>
              <span className="text-[0.65rem] font-sans tracking-wider uppercase text-charcoal-400 group-hover:text-charcoal-600">Digital Services</span>
            </div>
          </div>
        );
      case "dbbl":
        return (
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f58220]/20 to-[#008a4b]/20 flex items-center justify-center border-2 border-[#008a4b] group-hover:bg-[#008a4b] group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm">
              <svg className="w-7 h-7 text-[#008a4b] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 12h2L12 2 6.5 8.5H9v6H5l7 7 7-7h-4v-2.5zm-5-8.18l3.18 3.18H12V3.82z" />
              </svg>
            </div>
            <div className="text-left">
              <span className="block font-display font-bold text-base leading-tight text-charcoal group-hover:text-[#008a4b] transition-colors">Dutch-Bangla Bank</span>
              <span className="text-[0.65rem] font-sans tracking-wider uppercase text-charcoal-400 group-hover:text-charcoal-600">Pioneer in ATM/POS</span>
            </div>
          </div>
        );
      case "nbr":
        return (
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#8b6508]/15 flex items-center justify-center border-2 border-[#8b6508] group-hover:bg-[#8b6508] group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm">
              <svg className="w-7 h-7 text-[#8b6508] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
              </svg>
            </div>
            <div className="text-left">
              <span className="block font-display font-bold text-base leading-tight text-charcoal group-hover:text-[#8b6508] transition-colors">National Board of Revenue</span>
              <span className="text-[0.65rem] font-sans tracking-wider uppercase text-charcoal-400 group-hover:text-charcoal-600">Govt. Tax Authority</span>
            </div>
          </div>
        );
      case "city-bank":
        return (
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#c10016]/15 flex items-center justify-center border-2 border-[#c10016] group-hover:bg-[#c10016] group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm">
              <span className="font-display font-black text-xl text-[#c10016] group-hover:text-white transition-colors">CB</span>
            </div>
            <div className="text-left">
              <span className="block font-display font-bold text-lg leading-tight text-charcoal group-hover:text-[#c10016] transition-colors">The City Bank</span>
              <span className="text-[0.65rem] font-sans tracking-wider uppercase text-charcoal-400 group-hover:text-charcoal-600">Premier Commercial Bank</span>
            </div>
          </div>
        );
      case "aci":
        return (
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#004b87]/15 flex items-center justify-center border-2 border-[#004b87] group-hover:bg-[#004b87] group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm">
              <span className="font-display font-black text-lg text-[#004b87] group-hover:text-white tracking-tighter transition-colors">ACI</span>
            </div>
            <div className="text-left">
              <span className="block font-display font-bold text-lg leading-tight text-charcoal group-hover:text-[#004b87] transition-colors">ACI Limited</span>
              <span className="text-[0.65rem] font-sans tracking-wider uppercase text-charcoal-400 group-hover:text-charcoal-600">Top FMCG & Pharma</span>
            </div>
          </div>
        );
      case "square":
        return (
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-md bg-[#ed1c24] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
              <div className="w-5 h-5 border-2 border-white grid grid-cols-2 gap-0.5 p-0.5">
                <div className="bg-white"></div>
                <div className="bg-white"></div>
                <div className="bg-white"></div>
                <div className="bg-white"></div>
              </div>
            </div>
            <div className="text-left">
              <span className="block font-display font-bold text-lg leading-tight text-charcoal group-hover:text-[#ed1c24] transition-colors">Square Group</span>
              <span className="text-[0.65rem] font-sans tracking-wider uppercase text-charcoal-400 group-hover:text-charcoal-600">Conglomerate Leader</span>
            </div>
          </div>
        );
      case "brac-university":
        return (
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#003366]/15 flex items-center justify-center border-2 border-[#003366] group-hover:bg-[#003366] group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm">
              <svg className="w-6 h-6 text-[#003366] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
              </svg>
            </div>
            <div className="text-left">
              <span className="block font-display font-bold text-lg leading-tight text-charcoal group-hover:text-[#003366] transition-colors">BRAC University</span>
              <span className="text-[0.65rem] font-sans tracking-wider uppercase text-charcoal-400 group-hover:text-charcoal-600">Higher Education</span>
            </div>
          </div>
        );
      case "marico":
        return (
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#008080]/15 flex items-center justify-center border-2 border-[#008080] group-hover:bg-[#008080] group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm">
              <span className="font-display font-black text-lg text-[#008080] group-hover:text-white transition-colors">M</span>
            </div>
            <div className="text-left">
              <span className="block font-display font-bold text-lg leading-tight text-charcoal group-hover:text-[#008080] transition-colors">Marico Bangladesh</span>
              <span className="text-[0.65rem] font-sans tracking-wider uppercase text-charcoal-400 group-hover:text-charcoal-600">Beauty & Wellness</span>
            </div>
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center border-2 border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm">
              <span className="font-display font-bold text-lg text-primary group-hover:text-white transition-colors">{name.substring(0, 2)}</span>
            </div>
            <div className="text-left">
              <span className="block font-display font-bold text-lg leading-tight text-charcoal group-hover:text-primary transition-colors">{name}</span>
              <span className="text-[0.65rem] font-sans tracking-wider uppercase text-charcoal-400 group-hover:text-charcoal-600">{sector}</span>
            </div>
          </div>
        );
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`group relative flex h-24 w-72 sm:w-80 items-center justify-between rounded-2xl bg-white/90 p-5 shadow-sm hover:shadow-xl border border-charcoal-100 hover:border-charcoal-300 transition-all duration-300 ${className}`}
    >
      {/* Subtle background glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Main Visual */}
      <div className="relative z-10 flex items-center justify-between w-full">
        {renderBrandVisual()}
        
        {/* Subtle partner tag */}
        <div className="hidden sm:flex flex-col items-end justify-center pl-3 border-l border-charcoal-100 group-hover:border-primary/30 transition-colors">
          <span className="text-[0.55rem] font-sans font-semibold text-charcoal-300 uppercase tracking-widest">{partnerType}</span>
          <span className="text-[0.65rem] font-sans font-bold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            VERIFIED
          </span>
        </div>
      </div>
    </motion.div>
  );
}
