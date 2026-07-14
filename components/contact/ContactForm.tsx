"use client";

import { useState, FormEvent } from "react";
import { submitContactForm } from "@/app/contact/actions";

const productFamilies = [
  "Computer & Business Forms",
  "Web Printing",
  "Offset & Packaging",
  "Thermal & Rolls",
  "Rigid Boxes",
  "Stickers & Labels",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const result = await submitContactForm(data);

    if (result.success) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error ?? "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-parchment-50 border border-primary/30 p-8 lg:p-10">
        <p className="font-display text-2xl font-bold text-charcoal mb-3">Thanks — your enquiry is on its way.</p>
        <p className="font-sans text-charcoal-400">We&apos;ll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block font-sans text-xs font-medium text-charcoal-400 mb-2 uppercase tracking-wider">Name *</label>
          <input id="name" name="name" required maxLength={200} className="w-full border border-charcoal-100 bg-parchment-50 px-4 py-3 font-sans text-sm text-charcoal focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" />
        </div>
        <div>
          <label htmlFor="company" className="block font-sans text-xs font-medium text-charcoal-400 mb-2 uppercase tracking-wider">Company</label>
          <input id="company" name="company" maxLength={200} className="w-full border border-charcoal-100 bg-parchment-50 px-4 py-3 font-sans text-sm text-charcoal focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block font-sans text-xs font-medium text-charcoal-400 mb-2 uppercase tracking-wider">Email *</label>
          <input id="email" name="email" type="email" required maxLength={254} className="w-full border border-charcoal-100 bg-parchment-50 px-4 py-3 font-sans text-sm text-charcoal focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" />
        </div>
        <div>
          <label htmlFor="phone" className="block font-sans text-xs font-medium text-charcoal-400 mb-2 uppercase tracking-wider">Phone</label>
          <input id="phone" name="phone" type="tel" maxLength={30} className="w-full border border-charcoal-100 bg-parchment-50 px-4 py-3 font-sans text-sm text-charcoal focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" />
        </div>
      </div>

      <div>
        <label htmlFor="productFamily" className="block font-sans text-xs font-medium text-charcoal-400 mb-2 uppercase tracking-wider">Product family</label>
        <select id="productFamily" name="productFamily" className="w-full border border-charcoal-100 bg-parchment-50 px-4 py-3 font-sans text-sm text-charcoal focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors">
          <option value="">Select a product family</option>
          {productFamilies.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block font-sans text-xs font-medium text-charcoal-400 mb-2 uppercase tracking-wider">Message *</label>
        <textarea id="message" name="message" required maxLength={5000} rows={5} className="w-full border border-charcoal-100 bg-parchment-50 px-4 py-3 font-sans text-sm text-charcoal focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-y" />
      </div>

      <div className="flex items-start gap-3">
        <input id="consent" name="consent" type="checkbox" required className="mt-1 accent-[#d61016]" />
        <label htmlFor="consent" className="font-sans text-xs text-charcoal-400 leading-relaxed">
          By submitting, you agree to be contacted about your enquiry. We&apos;ll never share your details for marketing.
        </label>
      </div>

      {status === "error" && (
        <p className="font-sans text-sm text-primary" role="alert">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 font-sans font-semibold text-sm tracking-wide px-8 py-4 transition-all duration-300 disabled:opacity-60"
        style={{ backgroundColor: "#d61016", color: "#faf8f5" }}
      >
        {status === "loading" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
