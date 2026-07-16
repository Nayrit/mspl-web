import Link from "next/link";
import { footerWhatWeDoLinks, companyLinks } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import SiteImage from "@/components/ui/SiteImage";

const footerLinkClass =
  "font-sans text-sm text-white/75 hover:text-primary transition-colors duration-200 flex items-center gap-2 group min-h-[44px] py-2";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer Grid */}
      <div className="container-editorial py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <SiteImage
                slotId="brand-logo"
                fallback="/mspl-logo-256.webp"
                alt="Master Simex Paper Limited"
                width={176}
                height={44}
                className="h-11 w-auto object-contain brightness-110"
              />
            </div>
            <p className="font-sans text-[0.7rem] tracking-[0.14em] uppercase text-gold mb-3 font-medium">
              A part of MS Group
            </p>
            <p className="font-sans text-sm text-white/75 leading-relaxed mb-6">
              Redefining Bangladesh&apos;s paper, printing and packaging
              industry since 2002.
            </p>
            <a
              href="/mspl-company-profile.pdf"
              download
              className="inline-flex items-center gap-2 border border-parchment-100/30 text-parchment-100/90 hover:border-primary hover:text-primary px-5 py-3 min-h-[44px] font-sans text-xs font-medium tracking-wider uppercase transition-all duration-300"
              id="download-profile"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download company profile (PDF)
            </a>
          </div>

          {/* Col 2: What We Do */}
          <div>
            <h2 className="font-sans text-[0.65rem] tracking-[0.18em] uppercase text-white/70 mb-5 font-medium">
              What We Do
            </h2>
            <ul className="space-y-1">
              {footerWhatWeDoLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={footerLinkClass}>
                    <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-3 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h2 className="font-sans text-[0.65rem] tracking-[0.18em] uppercase text-white/70 mb-5 font-medium">
              Company
            </h2>
            <ul className="space-y-1">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={footerLinkClass}>
                    <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-3 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Get in Touch */}
          <div>
            <h2 className="font-sans text-[0.65rem] tracking-[0.18em] uppercase text-white/70 mb-5 font-medium">
              Get in Touch
            </h2>
            <address className="not-italic space-y-4">
              <div>
                <p className="font-sans text-[0.65rem] tracking-[0.12em] uppercase text-white/65 mb-1">
                  Head Office
                </p>
                <a
                  href={siteConfig.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open head office location in Google Maps"
                  className="block font-sans text-sm text-white/75 hover:text-gold transition-colors leading-relaxed group min-h-[44px] py-1"
                >
                  Suite 15 A–D, Paramount Heights
                  <br />
                  65/2/1 Culvert Road
                  <br />
                  Dhaka 1000, Bangladesh
                </a>
              </div>
              <div>
                <p className="font-sans text-[0.65rem] tracking-[0.12em] uppercase text-white/65 mb-1">
                  Telephone
                </p>
                <a
                  href="tel:+88022335096"
                  aria-label="Call Master Simex main line at +880 2 2233 50096"
                  className="block font-sans text-sm text-white/75 hover:text-gold transition-colors min-h-[44px] py-2"
                >
                  +880 2 2233 50096
                </a>
                <a
                  href="tel:+88022339136"
                  aria-label="Call Master Simex alternate line at +880 2 2233 91036"
                  className="block font-sans text-sm text-white/75 hover:text-gold transition-colors min-h-[44px] py-2"
                >
                  +880 2 2233 91036
                </a>
              </div>
              <div>
                <p className="font-sans text-[0.65rem] tracking-[0.12em] uppercase text-white/65 mb-1">
                  Email
                </p>
                <a
                  href="mailto:msplbd@gmail.com"
                  aria-label="Email Master Simex at msplbd@gmail.com"
                  className="block font-sans text-sm text-white/75 hover:text-gold transition-colors min-h-[44px] py-2"
                >
                  msplbd@gmail.com
                </a>
              </div>
              <div>
                <p className="font-sans text-[0.65rem] tracking-[0.12em] uppercase text-white/65 mb-1">
                  Web
                </p>
                <a
                  href="https://www.mastersimex.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Master Simex corporate website"
                  className="block font-sans text-sm text-white/75 hover:text-gold transition-colors min-h-[44px] py-2"
                >
                  www.mastersimex.com
                </a>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-editorial py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 text-white/60 font-sans text-xs">
              <span>© {new Date().getFullYear()} Master Simex Paper Limited. All rights reserved.</span>
              <span className="text-white/30">·</span>
              <span className="text-gold/90">ISO 9001:2015 Certified</span>
              <span className="text-white/30">·</span>
              <span>Trade Licence TRAD/DSCC/056126/2019</span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/privacy-policy"
                aria-label="Read our Privacy Policy"
                className="font-sans text-xs text-white/75 hover:text-gold transition-colors min-h-[44px] inline-flex items-center py-2"
              >
                Privacy Policy
              </Link>
              <span className="text-white/30">·</span>
              <Link
                href="/terms"
                aria-label="Read our Terms of Use"
                className="font-sans text-xs text-white/75 hover:text-gold transition-colors min-h-[44px] inline-flex items-center py-2"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
