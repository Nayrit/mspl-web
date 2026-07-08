import ScrollFadeIn from "@/components/ui/ScrollFadeIn";

interface ProofBlocksProps {
  heading: string;
  intro: string;
  blocks: { title: string; items: string[] }[];
}

export default function ProofBlocks({ heading, intro, blocks }: ProofBlocksProps) {
  return (
    <section className="section-padding bg-parchment border-t border-charcoal-100">
      <div className="container-editorial">
        <ScrollFadeIn direction="up">
          <h2 className="font-display text-display-md font-bold text-charcoal mb-4">{heading}</h2>
          <p className="text-body-lg text-charcoal-400 font-sans mb-12 max-w-2xl">{intro}</p>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-px bg-charcoal-100">
          {blocks.map((block, i) => (
            <ScrollFadeIn
              key={block.title}
              direction="up"
              delay={i * 0.06}
              className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}
            >
              <div className="bg-parchment-50 p-8 h-full group hover:bg-parchment-200 transition-colors duration-300">
                <h3 className="font-display text-lg font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">{block.title}</h3>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="font-sans text-sm text-charcoal-400 leading-relaxed flex gap-2">
                      <span className="text-primary shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
