"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { saveJobAction } from "@/app/admin/actions";
import type { JobOpening } from "@/lib/cms/types";

const DEPARTMENTS = [
  "Production & Engineering",
  "Quality Assurance",
  "Packaging & Converting",
  "Sales & Client Relations",
  "Human Resources",
  "Finance",
  "Other",
];

export default function JobForm({ job }: { job?: JobOpening }) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const result = await saveJobAction(new FormData(e.currentTarget));
    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="bg-white border border-[#e4e5e6] p-6 space-y-5 max-w-3xl">
      {job && <input type="hidden" name="id" value={job.id} />}

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#72777d] mb-2">Title *</label>
        <input name="title" required defaultValue={job?.title} className="w-full border border-[#e4e5e6] px-4 py-3 text-sm" />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#72777d] mb-2">Department *</label>
          <select name="department" required defaultValue={job?.department ?? DEPARTMENTS[0]} className="w-full border border-[#e4e5e6] px-4 py-3 text-sm">
            {DEPARTMENTS.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#72777d] mb-2">Type *</label>
          <input name="type" required defaultValue={job?.type ?? "Full-Time"} className="w-full border border-[#e4e5e6] px-4 py-3 text-sm" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#72777d] mb-2">Location *</label>
          <input name="location" required defaultValue={job?.location} className="w-full border border-[#e4e5e6] px-4 py-3 text-sm" />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#72777d] mb-2">Experience *</label>
          <input name="experience" required defaultValue={job?.experience} className="w-full border border-[#e4e5e6] px-4 py-3 text-sm" />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#72777d] mb-2">Description *</label>
        <textarea name="description" required rows={4} defaultValue={job?.description} className="w-full border border-[#e4e5e6] px-4 py-3 text-sm resize-y" />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#72777d] mb-2">Responsibilities * (one per line)</label>
        <textarea
          name="responsibilities"
          required
          rows={6}
          defaultValue={job?.responsibilities.join("\n")}
          className="w-full border border-[#e4e5e6] px-4 py-3 text-sm resize-y font-mono"
        />
      </div>

      {error && <p className="text-sm text-[#d61016]">{error}</p>}

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-[#d61016] text-white text-xs font-semibold uppercase tracking-wider disabled:opacity-60"
        >
          {loading ? "Saving…" : "Save position"}
        </button>
        <Link href="/admin/careers" className="text-sm text-[#72777d] hover:text-[#25282b]">
          Cancel
        </Link>
      </div>
    </form>
  );
}
