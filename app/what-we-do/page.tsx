import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/pages/PageHero";
import CTABand from "@/components/pages/CTABand";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { products, applyCmsImagesToProduct } from "@/lib/content/products";
import { getImagePath, getImagePathMap } from "@/lib/cms/images";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "What We Do — Products & Solutions | Master Simex Paper Limited",
  "Explore seven manufacturing specialisms from Master Simex: computer forms, business forms, web printing, offset & packaging, thermal rolls, rigid boxes and labels — all made in-house in Bangladesh.",
  "/what-we-do",
);

export default async function WhatWeDoOverviewPage() {
  const heroImage = await getImagePath("page-whatwedo-hero");
  const imageMap = await getImagePathMap();
  const catalog = products.map((p) => applyCmsImagesToProduct(p, imageMap));

  return (
    <>
      <PageHero
        eyebrow="What we do"
        headline="Seven specialisms. One roof."
        subhead="An extensive portfolio, meticulously designed to meet the most specialised demands — blending cutting-edge technology with uncompromising quality."
        image={heroImage || "/hero-bg-3.jpg"}
      />

      <section className="section-padding bg-parchment">
        <div className="container-editorial max-w-3xl">
          <ScrollFadeIn direction="up">
            <p className="text-body-lg text-charcoal-400 font-sans leading-relaxed">
              Whatever the format — a secure exam form, a multi-ply transaction sheet, a nationwide textbook run, a luxury gift box, a million metres of label — we make it in-house, to a single standard. Below are the seven families that make up our work.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      <section className="section-padding bg-parchment-50 pt-0">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal-100">
            {catalog.map((product, i) => (
              <ScrollFadeIn key={product.slug} direction="up" delay={i * 0.06}>
                <Link href={`/what-we-do/${product.slug}`} className="group block bg-parchment-50 overflow-hidden h-full hover:bg-parchment-200 transition-colors duration-300">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={product.image} alt={product.eyebrow} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="p-7">
                    <SectionEyebrow withLine={false} className="mb-2">{product.eyebrow}</SectionEyebrow>
                    <h2 className="font-display text-xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors">{product.headline}</h2>
                    <p className="font-sans text-sm text-charcoal-400 mb-4 line-clamp-2">{product.intro}</p>
                    {product.overviewCapacity && (
                      <p className="font-sans text-xs font-semibold text-primary tracking-wide uppercase">{product.overviewCapacity}</p>
                    )}
                  </div>
                </Link>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        heading="Not sure which fits your job?"
        body="Tell us the outcome you're after. We'll point you to the right line — or combine several."
        ctaLabel="Talk to our team"
        ctaHref="/contact"
      />
    </>
  );
}
