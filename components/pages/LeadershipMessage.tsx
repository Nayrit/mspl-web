import ScrollFadeIn from "@/components/ui/ScrollFadeIn";

interface LeadershipMessageProps {
  role: string;
  paragraphs: string[];
  name: string;
  title: string;
  image?: string;
}

export default function LeadershipMessage({ role, paragraphs, name, title, image = "/hero-bg-3.jpg" }: LeadershipMessageProps) {
  return (
    <section className="section-padding bg-parchment border-t border-charcoal-100">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <ScrollFadeIn direction="up" className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img src={image} alt="" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-xl font-bold text-parchment-50">{name}</p>
                <p className="font-sans text-sm text-parchment-100/70">{title}</p>
              </div>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn direction="left" delay={0.1} className="lg:col-span-7">
            <p className="eyebrow text-primary mb-4">{role}</p>
            <div className="space-y-5">
              {paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="font-sans text-body-lg text-charcoal-400 leading-relaxed">{p}</p>
              ))}
            </div>
            <p className="mt-8 font-display text-lg font-bold text-charcoal">{name}, {title}</p>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
