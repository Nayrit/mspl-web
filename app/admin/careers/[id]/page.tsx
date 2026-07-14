import Link from "next/link";
import { notFound } from "next/navigation";
import JobForm from "@/components/admin/JobForm";
import { getJobOpenings } from "@/lib/cms/careers";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditJobPage({ params }: Props) {
  const { id } = await params;
  const jobs = await getJobOpenings();
  const job = jobs.find((j) => j.id === id);
  if (!job) notFound();

  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin/careers" className="text-sm text-[#72777d] hover:text-[#d61016]">
          ← Back to careers
        </Link>
        <h1 className="text-3xl font-bold mt-2">Edit position</h1>
      </div>
      <JobForm job={job} />
    </div>
  );
}
