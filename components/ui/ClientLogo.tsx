"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ClientLogoProps {
  name: string;
  slug: string;
  className?: string;
  sector?: string;
  partnerType?: string;
}

export default function ClientLogo({ name, slug, className = "", sector, partnerType = "Continuous Supply" }: ClientLogoProps) {
  const [imgError, setImgError] = useState(false);

  // Derive sector if not provided
  const getSector = () => {
    if (sector) return sector;
    switch (slug) {
      case "bangladesh-bank": return "Central Bank of Bangladesh";
      case "nctb": return "Curriculum & Textbook Board";
      case "sonali-bank": return "Largest State Bank";
      case "brac": return "Global NGO & Enterprise";
      case "grameenphone": return "Telecom Leader";
      case "robi": return "Digital Services";
      case "dbbl": return "Pioneer in ATM/POS";
      case "nbr": return "Govt. Tax Authority";
      case "desco": return "Power & Utility Sector";
      case "aci": return "Top FMCG & Pharma";
      case "square": return "Conglomerate Leader";
      case "brac-university": return "Higher Education";
      case "marico": return "Beauty & Wellness";
      default: return "Enterprise Partner";
    }
  };

  const getBrandColor = () => {
    switch (slug) {
      case "bangladesh-bank": return "#006a4e";
      case "nctb": return "#0073e6";
      case "sonali-bank": return "#d48800";
      case "brac": return "#ec008c";
      case "grameenphone": return "#0073e6";
      case "robi": return "#ed1c24";
      case "dbbl": return "#008a4b";
      case "nbr": return "#8b6508";
      case "desco": return "#005bb5";
      case "aci": return "#004b87";
      case "square": return "#ed1c24";
      case "brac-university": return "#003366";
      case "marico": return "#008080";
      default: return "#e0271c";
    }
  };

  const brandColor = getBrandColor();

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`group relative flex h-24 w-72 sm:w-80 items-center justify-between rounded-2xl bg-white/90 p-5 shadow-sm hover:shadow-xl border border-charcoal-100 hover:border-charcoal-300 transition-all duration-300 ${className}`}
    >
      {/* Subtle background glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: brandColor }}
      />
      
      {/* Main Visual */}
      <div className="relative z-10 flex items-center justify-between w-full gap-3">
        <div className="flex items-center gap-3.5 flex-1 min-w-0">
          {/* Logo Container: PNG with fallback */}
          <div className="w-14 h-14 rounded-xl bg-charcoal/5 flex items-center justify-center p-1.5 border border-charcoal-100 group-hover:border-charcoal-300 transition-all duration-300 flex-shrink-0 shadow-xs bg-white">
            {!imgError ? (
              <img
                src={`/clients/${slug}.png`}
                alt={name}
                className="max-h-11 max-w-11 object-contain transition-transform duration-300 group-hover:scale-105"
                onError={() => setImgError(true)}
              />
            ) : (
              <div
                className="w-full h-full rounded-lg flex items-center justify-center font-display font-black text-lg text-white transition-colors"
                style={{ backgroundColor: brandColor }}
              >
                {name.substring(0, 2).toUpperCase()}
              </div>
            )}
          </div>

          <div className="text-left min-w-0 flex-1">
            <span
              className="block font-display font-bold text-base sm:text-lg leading-tight text-charcoal truncate transition-colors"
            >
              {name}
            </span>
            <span className="block text-[0.6rem] font-sans tracking-wider uppercase text-charcoal-400 group-hover:text-charcoal-600 truncate mt-0.5">
              {getSector()}
            </span>
          </div>
        </div>
        
        {/* Subtle partner tag */}
        <div className="hidden sm:flex flex-col items-end justify-center pl-3 border-l border-charcoal-100 group-hover:border-primary/30 transition-colors flex-shrink-0">
          <span className="text-[0.55rem] font-sans font-semibold text-charcoal-300 uppercase tracking-widest">{partnerType}</span>
          <span
            className="text-[0.65rem] font-sans font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
            style={{ color: brandColor }}
          >
            VERIFIED
          </span>
        </div>
      </div>
    </motion.div>
  );
}
