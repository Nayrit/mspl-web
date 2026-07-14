import Link from "next/link";
import JobForm from "@/components/admin/JobForm";

export default function NewJobPage() {
  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin/careers" className="text-sm text-[#72777d] hover:text-[#d61016]">
          ← Back to careers
        </Link>
        <h1 className="text-3xl font-bold mt-2">Add position</h1>
      </div>
      <JobForm />
    </div>
  );
}
