import Link from "next/link";
import { getJobOpenings } from "@/lib/cms/careers";
import { getImageSlots } from "@/lib/cms/images";

export default async function AdminDashboardPage() {
  const [jobs, images] = await Promise.all([getJobOpenings(), getImageSlots()]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#25282b]">Dashboard</h1>
        <p className="text-sm text-[#72777d] mt-1">Edit career openings and replace website images.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Link
          href="/admin/careers"
          className="bg-white border border-[#e4e5e6] p-6 hover:border-[#d61016] transition-colors"
        >
          <p className="text-xs uppercase tracking-wider text-[#d61016] font-semibold mb-2">Careers</p>
          <p className="text-3xl font-bold">{jobs.length}</p>
          <p className="text-sm text-[#72777d] mt-1">Open positions · Manage listings</p>
        </Link>
        <Link
          href="/admin/images"
          className="bg-white border border-[#e4e5e6] p-6 hover:border-[#d61016] transition-colors"
        >
          <p className="text-xs uppercase tracking-wider text-[#d61016] font-semibold mb-2">Images</p>
          <p className="text-3xl font-bold">{images.length}</p>
          <p className="text-sm text-[#72777d] mt-1">Editable site photos · Replace files</p>
        </Link>
      </div>
    </div>
  );
}
