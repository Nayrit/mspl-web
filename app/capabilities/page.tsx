import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/pages/PageHero";
import MachineryGrid from "@/components/pages/MachineryGrid";
import CTABand from "@/components/pages/CTABand";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { capabilitiesContent, machines } from "@/lib/content/capabilities";
import { sustainabilityPage } from "@/lib/content/sustainability-page";
import { getImagePath, getImagePathMap } from "@/lib/cms/images";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  capabilitiesContent.seo.title,
  capabilitiesContent.seo.description,
  "/capabilities",
);

export default async function CapabilitiesPage() {
  const c = capabilitiesContent;
  const s = sustainabilityPage;
  const imageMap = await getImagePathMap();
  const heroImage = await getImagePath("page-capabilities-hero");
  const logisticsImage = await getImagePath("capabilities-logistics");
  const gallery = c.gallery.map((item, i) => ({
    ...item,
    image: imageMap[`capabilities-gallery-${i + 1}`] || item.image,
  }));

  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} headline={c.hero.headline} image={heroImage || "/capabilities-factory.jpg"} />

      <section className="section-padding bg-parchment">
        <div className="container-editorial max-w-3xl">
          <ScrollFadeIn direction="up">
            <SectionEyebrow className="mb-6">Everything in-house</SectionEyebrow>
            <p className="text-body-lg text-charcoal-400 font-sans leading-relaxed">{c.inHouse}</p>
          </ScrollFadeIn>
        </div>
      </section>

      <section className="section-padding bg-charcoal text-parchment-50">
        <div className="container-editorial">
          <ScrollFadeIn direction="up">
            <SectionEyebrow light className="mb-10">Our capacity</SectionEyebrow>
          </ScrollFadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-parchment-100/10">
            {c.capacity.map((stat, i) => (
              <ScrollFadeIn key={stat.label} direction="up" delay={i * 0.08}>
                <div className="bg-charcoal p-8 lg:p-10 text-center group hover:bg-charcoal-800 transition-colors">
                  <p className="font-display font-bold text-primary mb-2" style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}>
                    {stat.value}
                  </p>
                  <p className="font-sans text-sm text-parchment-100/60">{stat.label}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-parchment-50">
        <div className="container-editorial">
          <ScrollFadeIn direction="up">
            <h2 className="font-display text-display-md font-bold text-charcoal mb-10">The three facilities</h2>
          </ScrollFadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-charcoal-100">
            {c.facilities.map((f, i) => (
              <ScrollFadeIn key={f.name} direction="up" delay={i * 0.08}>
                <div className="bg-parchment-50 p-8 h-full group hover:border-l-2 hover:border-primary transition-all flex flex-col justify-between">
                  <div>
                    <p className="font-display text-xl font-bold text-charcoal mb-2 group-hover:text-primary transition-colors">{f.name}</p>
                    <p className="font-sans text-sm text-charcoal-400">{f.location}</p>
                    {"note" in f && f.note && (
                      <p className="font-sans text-xs text-charcoal-300 mt-3">{f.note}</p>
                    )}
                  </div>
                  {"mapUrl" in f && f.mapUrl && (
                    <a
                      href={f.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-primary hover:text-gold uppercase tracking-wider transition-colors mt-6 pt-4 border-t border-charcoal-100/40"
                    >
                      <span>View on Google Maps</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Picture Facility & Production Gallery Placeholders */}
      {gallery.length > 0 && (
        <section className="section-padding bg-parchment border-t border-charcoal-100">
          <div className="container-editorial">
            <ScrollFadeIn direction="up">
              <div className="mb-10">
                <SectionEyebrow className="mb-2">Facility & Machinery Gallery</SectionEyebrow>
                <h2 className="font-display text-display-md font-bold text-charcoal">
                  Inside The Production Floor
                </h2>
              </div>
            </ScrollFadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {gallery.map((item, i) => (
                <ScrollFadeIn key={item.slot + i} direction="up" delay={i * 0.08}>
                  <div className="aspect-square sm:aspect-[4/5] overflow-hidden relative group bg-charcoal cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <span className="absolute top-4 right-4 bg-charcoal/85 backdrop-blur-md text-parchment-50 font-sans text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded border border-white/10 shadow-md z-10">
                      {item.slot} • Replaceable
                    </span>

                    {/* Interactive Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 sm:p-10 z-20">
                      <p className="eyebrow text-primary mb-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                        {item.slot}
                      </p>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-parchment-50 mb-3 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        {item.title}
                      </h3>
                      <p className="font-sans text-sm text-parchment-100/90 leading-relaxed transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      <MachineryGrid
        heading="The machines behind the standard."
        intro="Our production line is built on equipment from world-renowned brands — for global standards of quality and reliability."
        machines={machines}
      />

      {/* Sustainability Section — Full Page Editorial Style */}
      <div id="sustainability" className="border-t border-charcoal-100">
        {/* Intro & Narrative Section */}
        <section className="section-padding bg-parchment" aria-label="Sustainability & Triple Bottom Line">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Eyebrow & Big Headline */}
              <div className="lg:col-span-5">
                <ScrollFadeIn direction="up">
                  <SectionEyebrow className="mb-6">{s.hero.eyebrow}</SectionEyebrow>
                  <h2
                    className="font-display font-bold text-charcoal mb-8 leading-tight"
                    style={{ fontSize: "clamp(2.5rem, 4.5vw, 4rem)" }}
                  >
                    {s.hero.headline}
                  </h2>
                  <div className="w-16 h-1 bg-primary mb-8" />
                  <p className="font-sans text-body-lg text-charcoal-400 font-light leading-relaxed">
                    {s.tripleBottomLine}
                  </p>
                </ScrollFadeIn>
              </div>

              {/* Right Column: Narrative Feature Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 gap-6">
                {s.narrative.map((p, idx) => (
                  <ScrollFadeIn key={p.slice(0, 40)} direction="up" delay={idx * 0.1}>
                    <div className="bg-parchment-50 p-8 sm:p-10 border-l-4 border-primary hover:bg-parchment-100/60 transition-all duration-300 shadow-sm hover:shadow-md">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-display text-2xl font-bold text-primary">0{idx + 1}</span>
                        <span className="font-sans text-xs uppercase font-semibold tracking-wider text-charcoal/60">
                          {idx === 0 ? "Clean Solar Energy" : "Circular Economy & Recycling"}
                        </span>
                      </div>
                      <p className="font-sans text-base sm:text-body-lg text-charcoal leading-relaxed font-light">
                        {p}
                      </p>
                    </div>
                  </ScrollFadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Pillars Section */}
        <section className="section-padding bg-parchment-50 border-t border-charcoal-100/60">
          <div className="container-editorial">
            <ScrollFadeIn direction="up">
              <div className="max-w-xl mb-12">
                <SectionEyebrow className="mb-4">Our Commitments</SectionEyebrow>
                <h3 className="font-display text-display-md font-bold text-charcoal">Core Impact Pillars</h3>
              </div>
            </ScrollFadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal-100">
              {s.pillars.map((pillar, i) => (
                <ScrollFadeIn key={pillar.title} direction="up" delay={i * 0.08}>
                  <div className="bg-parchment-50 p-8 lg:p-10 group hover:bg-parchment transition-all duration-300 h-full flex flex-col justify-between border-t-4 border-transparent hover:border-primary">
                    <div>
                      <p className="font-display text-lg font-bold text-primary mb-4">0{i + 1}</p>
                      <h4 className="font-display text-xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="font-sans text-sm text-charcoal-400 leading-relaxed font-light">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Band & CTA */}
        <section className="py-16 lg:py-20 bg-charcoal text-parchment-50">
          <div className="container-editorial flex flex-col sm:flex-row items-center justify-between gap-8">
            <ScrollFadeIn direction="up" className="max-w-2xl">
              <p className="eyebrow text-primary mb-3">Profit, People & Planet</p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold leading-snug">
                Business growth and environmental responsibility are complementary forces.
              </h3>
            </ScrollFadeIn>
            <ScrollFadeIn direction="left" delay={0.1}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-primary text-parchment-50 px-8 py-4 font-sans text-sm font-semibold tracking-wider uppercase hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl flex-shrink-0 group"
              >
                <span>Discuss practices</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </ScrollFadeIn>
          </div>
        </section>
      </div>

      <section className="section-padding bg-parchment">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollFadeIn direction="up">
            <h2 className="font-display text-display-md font-bold text-charcoal mb-4">{c.logistics.heading}</h2>
            <p className="text-body-lg text-charcoal-400 font-sans leading-relaxed">{c.logistics.body}</p>
          </ScrollFadeIn>
          <ScrollFadeIn direction="left" delay={0.1}>
            <div className="aspect-video overflow-hidden">
              <img src={logisticsImage || "/hero-bg-2.jpg"} alt="Master Simex logistics and distribution" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <section className="section-padding bg-parchment-50 border-t border-charcoal-100">
        <div className="container-editorial text-center">
          <ScrollFadeIn direction="up">
            <p className="eyebrow text-primary mb-3">Certification</p>
            <p className="font-display text-2xl font-bold text-charcoal">{c.certification}</p>
          </ScrollFadeIn>
        </div>
      </section>

      <CTABand heading={c.cta.heading} body={c.cta.body} ctaLabel={c.cta.label} ctaHref="/contact" />
    </>
  );
}
