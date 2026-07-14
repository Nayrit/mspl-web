import { getImageSlots } from "@/lib/cms/images";
import ImageUploadCard from "@/components/admin/ImageUploadCard";

export default async function AdminImagesPage() {
  const slots = await getImageSlots();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Images</h1>
        <p className="text-sm text-[#72777d] mt-1">
          Replace website photos in place. Prefer uploading the same format (JPG for .jpg paths) so everything keeps working.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {slots.map((slot) => (
          <ImageUploadCard key={slot.id} slot={slot} />
        ))}
      </div>
    </div>
  );
}
