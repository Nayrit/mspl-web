import Link from "next/link";
import { getJobOpenings } from "@/lib/cms/careers";
import { deleteJobAction } from "@/app/admin/actions";

export default async function AdminCareersPage() {
  const jobs = await getJobOpenings();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Careers</h1>
          <p className="text-sm text-[#72777d] mt-1">Add, edit, or remove job openings shown on the careers page.</p>
        </div>
        <Link
          href="/admin/careers/new"
          className="inline-flex items-center justify-center px-5 py-3 bg-[#d61016] text-white text-xs font-semibold uppercase tracking-wider"
        >
          Add position
        </Link>
      </div>

      <div className="bg-white border border-[#e4e5e6] divide-y divide-[#e4e5e6]">
        {jobs.length === 0 && (
          <p className="p-6 text-sm text-[#72777d]">No openings yet. Add the first position.</p>
        )}
        {jobs.map((job) => (
          <div key={job.id} className="p-5 flex flex-col lg:flex-row lg:items-center gap-4 justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-[#d61016] font-semibold">{job.department}</p>
              <h2 className="text-lg font-bold mt-1">{job.title}</h2>
              <p className="text-sm text-[#72777d] mt-1">
                {job.location} · {job.type} · {job.experience}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href={`/admin/careers/${job.id}`}
                className="px-4 py-2 border border-[#e4e5e6] text-xs font-semibold uppercase tracking-wider hover:border-[#d61016]"
              >
                Edit
              </Link>
              <form action={deleteJobAction}>
                <input type="hidden" name="id" value={job.id} />
                <button
                  type="submit"
                  className="px-4 py-2 border border-[#e4e5e6] text-xs font-semibold uppercase tracking-wider text-[#d61016] hover:border-[#d61016]"
                >
                  Delete
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
