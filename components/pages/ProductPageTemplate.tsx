import Link from "next/link";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import type { ProductPage } from "@/lib/content/products";

interface ProductPageTemplateProps {
  product: ProductPage;
}

export default function ProductPageTemplate({ product }: ProductPageTemplateProps) {
  const { capability } = product;

  return (
    <>
      <section className="section-padding bg-parchment">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollFadeIn direction="up">
              <p className="text-body-lg text-charcoal-400 font-sans leading-relaxed">{product.intro}</p>
            </ScrollFadeIn>
            <ScrollFadeIn direction="left" delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={product.image} alt={product.eyebrow} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute bottom-4 left-4 right-4 bg-charcoal/90 backdrop-blur-sm p-4">
                  <p className="eyebrow text-primary mb-1">Daily capacity</p>
                  <p className="font-display font-bold text-parchment-50 text-lg">{capability.dailyCapacity}</p>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-parchment-50 border-t border-charcoal-100">
        <div className="container-editorial">
          <ScrollFadeIn direction="up">
            <SectionEyebrow className="mb-6">What we make</SectionEyebrow>
            <div className="flex flex-wrap gap-2">
              {product.whatWeMake.map((item) => (
                <span key={item} className="font-sans text-sm text-charcoal-500 px-4 py-2 border border-charcoal-100 bg-parchment hover:border-primary hover:text-primary transition-colors duration-300">
                  {item}
                </span>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <section className="section-padding bg-parchment">
        <div className="container-editorial">
          <ScrollFadeIn direction="up">
            <SectionEyebrow className="mb-8">Capabilities</SectionEyebrow>
            {(() => {
              const capItems = [
                capability.machinery && {
                  label: "State-of-the-art machinery",
                  content: <p className="font-sans text-sm text-charcoal-400 leading-relaxed">{capability.machinery}</p>,
                },
                capability.security && {
                  label: "Security features",
                  content: <p className="font-sans text-sm text-charcoal-400 leading-relaxed">{capability.security}</p>,
                },
                capability.customisation && {
                  label: "Customisation",
                  content: <p className="font-sans text-sm text-charcoal-400 leading-relaxed">{capability.customisation}</p>,
                },
                {
                  label: "Daily capacity",
                  content: <p className="font-display text-2xl font-bold text-primary">{capability.dailyCapacity}</p>,
                },
              ].filter(Boolean) as { label: string; content: React.ReactNode }[];

              return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-charcoal-100">
                  {capItems.map((item, i) => {
                    const isLastOdd = capItems.length % 2 !== 0 && i === capItems.length - 1;
                    return (
                      <div
                        key={item.label}
                        className={`bg-parchment-50 p-8 ${isLastOdd ? "md:col-span-2" : ""}`}
                      >
                        <p className="eyebrow text-charcoal-500 mb-3">{item.label}</p>
                        {item.content}
                      </div>
                    );
                  })}
                </div>
              );
            })()}
          </ScrollFadeIn>

          {capability.finishing && (
            <ScrollFadeIn direction="up" delay={0.1} className="mt-12">
              <p className="eyebrow text-charcoal-500 mb-4">What we offer</p>
              <div className="flex flex-wrap gap-2">
                {capability.finishing.map((f) => (
                  <span key={f} className="font-sans text-xs text-charcoal-400 px-3 py-1.5 bg-parchment-200">{f}</span>
                ))}
              </div>
            </ScrollFadeIn>
          )}
        </div>
      </section>

      {/* 6-Picture Production Gallery Placeholders */}
      {product.gallery && product.gallery.length > 0 && (
        <section className="section-padding bg-parchment-50 border-t border-charcoal-100">
          <div className="container-editorial">
            <ScrollFadeIn direction="up">
              <div className="mb-10">
                <SectionEyebrow className="mb-2">Production Gallery</SectionEyebrow>
                <h2 className="font-display text-display-md font-bold text-charcoal">
                  Visual Showcase & Photo Slots
                </h2>
              </div>
            </ScrollFadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {product.gallery.map((item, i) => (
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

                    {/* Overlay: always visible on touch; hover-reveal on fine pointers */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/55 to-transparent opacity-100 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 sm:p-8 z-20">
                      <p className="eyebrow text-primary mb-2 transform translate-y-0 [@media(hover:hover)]:translate-y-3 [@media(hover:hover)]:group-hover:translate-y-0 transition-transform duration-500">
                        {item.slot}
                      </p>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-parchment-50 mb-2 transform translate-y-0 [@media(hover:hover)]:translate-y-3 [@media(hover:hover)]:group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        {item.title}
                      </h3>
                      <p className="font-sans text-sm text-parchment-100/90 leading-relaxed line-clamp-3 transform translate-y-0 [@media(hover:hover)]:translate-y-3 [@media(hover:hover)]:group-hover:translate-y-0 transition-transform duration-500 delay-100">
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

      <section className="section-padding bg-charcoal text-parchment-50">
        <div className="container-editorial flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <h2 className="font-display text-display-md font-bold">{product.ctaHeading}</h2>
          <Link
            href="/contact?quote=1"
            className="inline-flex items-center gap-2 font-sans font-semibold text-sm tracking-wide px-8 py-4 transition-all duration-300 shrink-0"
            style={{ backgroundColor: "#d61016", color: "#faf8f5" }}
          >
            Request a quote
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
