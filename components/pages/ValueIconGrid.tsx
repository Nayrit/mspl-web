import ScrollFadeIn from "@/components/ui/ScrollFadeIn";

interface ValueIconGridProps {
  values: { title: string; description: string }[];
}

export default function ValueIconGrid({ values }: ValueIconGridProps) {
  return (
    <section className="section-padding bg-parchment-50">
      <div className="container-editorial">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal-100">
          {values.map((value, i) => (
            <ScrollFadeIn key={value.title} direction="up" delay={i * 0.05}>
              <div className="bg-parchment-50 p-8 h-full group hover:bg-parchment-200 transition-all duration-300 hover:-translate-y-0.5">
                <div className="w-10 h-10 flex items-center justify-center mb-5 border border-primary/20 group-hover:border-primary group-hover:bg-primary/5 transition-colors">
                  <span className="font-display font-bold text-primary text-sm">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-charcoal mb-2 group-hover:text-primary transition-colors">{value.title}</h3>
                <p className="font-sans text-sm text-charcoal-400 leading-relaxed">{value.description}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
