import Link from "next/link";
import { footerWhatWeDoLinks, companyLinks } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import SiteImage from "@/components/ui/SiteImage";

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
                fallback="/mspl-logo.png"
                alt="Master Simex Paper Limited"
                className="h-11 w-auto object-contain brightness-110"
              />
            </div>
            <p className="font-sans text-[0.7rem] tracking-[0.14em] uppercase text-gold mb-3 font-medium">
              A part of MS Group
            </p>
            <p className="font-sans text-sm text-white/60 leading-relaxed mb-6">
              Redefining Bangladesh&apos;s paper, printing and packaging
              industry since 2002.
            </p>
            <a
              href="/mspl-company-profile.pdf"
              download
              className="inline-flex items-center gap-2 border border-parchment-100/20 text-parchment-100/80 hover:border-primary hover:text-primary px-5 py-2.5 font-sans text-xs font-medium tracking-wider uppercase transition-all duration-300"
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
              Company Profile
            </a>
          </div>

          {/* Col 2: What We Do */}
          <div>
            <h3 className="font-sans text-[0.65rem] tracking-[0.18em] uppercase text-white/40 mb-5 font-medium">
              What We Do
            </h3>
            <ul className="space-y-2.5">
              {footerWhatWeDoLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/60 hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-3 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h3 className="font-sans text-[0.65rem] tracking-[0.18em] uppercase text-white/40 mb-5 font-medium">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/60 hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-3 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Get in Touch */}
          <div>
            <h3 className="font-sans text-[0.65rem] tracking-[0.18em] uppercase text-white/40 mb-5 font-medium">
              Get in Touch
            </h3>
            <address className="not-italic space-y-4">
              <div>
                <p className="font-sans text-[0.65rem] tracking-[0.12em] uppercase text-white/40 mb-1">
                  Head Office
                </p>
                <a
                  href={siteConfig.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-sans text-sm text-white/60 hover:text-gold transition-colors leading-relaxed group"
                >
                  Suite 15 A–D, Paramount Heights
                  <br />
                  65/2/1 Culvert Road
                  <br />
                  Dhaka 1000, Bangladesh
                </a>
              </div>
              <div>
                <p className="font-sans text-[0.65rem] tracking-[0.12em] uppercase text-white/40 mb-1">
                  Telephone
                </p>
                <a
                  href="tel:+88022335096"
                  className="block font-sans text-sm text-white/60 hover:text-gold transition-colors"
                >
                  +880 2 2233 50096
                </a>
                <a
                  href="tel:+88022339136"
                  className="block font-sans text-sm text-white/60 hover:text-gold transition-colors"
                >
                  +880 2 2233 91036
                </a>
              </div>
              <div>
                <p className="font-sans text-[0.65rem] tracking-[0.12em] uppercase text-white/40 mb-1">
                  Email
                </p>
                <a
                  href="mailto:msplbd@gmail.com"
                  className="font-sans text-sm text-white/60 hover:text-gold transition-colors"
                >
                  msplbd@gmail.com
                </a>
              </div>
              <div>
                <p className="font-sans text-[0.65rem] tracking-[0.12em] uppercase text-white/40 mb-1">
                  Web
                </p>
                <a
                  href="https://www.mastersimex.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-white/60 hover:text-gold transition-colors"
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
            <div className="flex flex-wrap items-center gap-3 text-white/35 font-sans text-xs">
              <span>© {new Date().getFullYear()} Master Simex Paper Limited. All rights reserved.</span>
              <span className="text-white/20">·</span>
              <span className="text-primary/70">ISO 9001:2015 Certified</span>
              <span className="text-white/20">·</span>
              <span>Trade Licence TRAD/DSCC/056126/2019</span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy-policy"
                className="font-sans text-xs text-white/35 hover:text-gold transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-white/20">·</span>
              <Link
                href="/terms"
                className="font-sans text-xs text-white/35 hover:text-gold transition-colors"
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
