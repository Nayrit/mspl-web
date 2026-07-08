import ScrollFadeIn from "@/components/ui/ScrollFadeIn";

export interface Machine {
  name: string;
  specs: string;
}

interface MachineryGridProps {
  heading: string;
  intro: string;
  machines: Machine[];
}

export default function MachineryGrid({ heading, intro, machines }: MachineryGridProps) {
  return (
    <section className="section-padding bg-parchment-50" aria-label="Machinery showcase">
      <div className="container-editorial">
        <ScrollFadeIn direction="up">
          <h2 className="font-display text-display-md font-bold text-charcoal mb-4">{heading}</h2>
          <p className="text-body-lg text-charcoal-400 font-sans mb-12 max-w-2xl">{intro}</p>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal-100">
          {machines.map((machine, i) => (
            <ScrollFadeIn key={machine.name} direction="up" delay={i * 0.05}>
              <div className="bg-parchment-50 p-8 h-full group hover:bg-parchment-200 transition-colors duration-300">
                <div className="w-10 h-10 flex items-center justify-center mb-4 bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <span className="font-display font-bold text-primary text-sm">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-charcoal mb-2 group-hover:text-primary transition-colors">{machine.name}</h3>
                <p className="font-sans text-sm text-charcoal-400 leading-relaxed">{machine.specs}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
