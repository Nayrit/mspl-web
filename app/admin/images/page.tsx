import { getImageSlots, slotsBySection } from "@/lib/cms/images";
import { IMAGE_SECTIONS } from "@/lib/cms/image-catalog";
import ImageUploadCard from "@/components/admin/ImageUploadCard";

export default async function AdminImagesPage() {
  const slots = await getImageSlots();
  const grouped = slotsBySection(slots);
  const sections = IMAGE_SECTIONS.filter((s) => grouped[s]?.length);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold">Images</h1>
        <p className="text-sm text-[#72777d] mt-1 max-w-2xl">
          Every picture on the site is listed below by page / section. Replace them one by one —
          each slot is independent, even if two slots share the same default photo today.
        </p>
        <p className="text-xs text-[#72777d] mt-2">{slots.length} image slots across {sections.length} sections</p>
      </div>

      <nav className="sticky top-0 z-10 -mx-2 px-2 py-3 bg-[#f4f4f5]/95 backdrop-blur border-b border-[#e4e5e6]">
        <ul className="flex flex-wrap gap-2">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#section-${slugify(section)}`}
                className="inline-block text-xs px-3 py-1.5 border border-[#e4e5e6] bg-white hover:border-[#d61016] hover:text-[#d61016] transition-colors"
              >
                {section}
                <span className="ml-1.5 text-[#72777d]">({grouped[section].length})</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {sections.map((section) => (
        <section key={section} id={`section-${slugify(section)}`} className="scroll-mt-24 space-y-4">
          <div className="flex items-end justify-between gap-4 border-b border-[#e4e5e6] pb-2">
            <h2 className="text-lg font-semibold">{section}</h2>
            <span className="text-xs text-[#72777d]">{grouped[section].length} images</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {grouped[section].map((slot) => (
              <ImageUploadCard key={slot.id} slot={slot} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
