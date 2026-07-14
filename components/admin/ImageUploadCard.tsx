"use client";

import { useState, FormEvent } from "react";
import { uploadImageAction } from "@/app/admin/actions";
import type { ImageSlot } from "@/lib/cms/types";

export default function ImageUploadCard({ slot }: { slot: ImageSlot }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [preview, setPreview] = useState(
    slot.updatedAt ? `${slot.path}?v=${slot.updatedAt}` : slot.path,
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = e.currentTarget;
    const result = await uploadImageAction(new FormData(form));
    if (result.error) {
      setStatus("error");
      setMessage(result.error);
      return;
    }
    setStatus("success");
    setMessage(result.success ?? "Updated.");
    setPreview(`${slot.path}?v=${Date.now()}`);
    form.reset();
  }

  return (
    <div className="bg-white border border-[#e4e5e6] p-4 flex flex-col gap-4">
      <div className="aspect-video bg-[#f4f4f5] overflow-hidden border border-[#e4e5e6]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={preview} alt={slot.label} className="w-full h-full object-cover" />
      </div>
      <div>
        <h2 className="font-semibold text-sm">{slot.label}</h2>
        <p className="text-xs text-[#72777d] mt-1 font-mono">{slot.path}</p>
      </div>
      <form onSubmit={onSubmit} className="space-y-3">
        <input type="hidden" name="slotId" value={slot.id} />
        <input
          type="file"
          name="file"
          required
          accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp"
          className="block w-full text-xs"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full px-4 py-2 bg-[#d61016] text-white text-xs font-semibold uppercase tracking-wider disabled:opacity-60"
        >
          {status === "loading" ? "Uploading…" : "Replace image"}
        </button>
        {message && (
          <p className={`text-xs ${status === "error" ? "text-[#d61016]" : "text-green-700"}`}>{message}</p>
        )}
      </form>
    </div>
  );
}
