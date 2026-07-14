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
                  <p className="eyebrow text-primary text-[0.6rem] mb-1">Daily capacity</p>
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
                        <p className="eyebrow text-charcoal-300 mb-3 text-[0.6rem]">{item.label}</p>
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
              <p className="eyebrow text-charcoal-300 mb-4 text-[0.6rem]">What we offer</p>
              <div className="flex flex-wrap gap-2">
                {capability.finishing.map((f) => (
                  <span key={f} className="font-sans text-xs text-charcoal-400 px-3 py-1.5 bg-parchment-200">{f}</span>
                ))}
              </div>
            </ScrollFadeIn>
          )}
        </div>
      </section>

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
