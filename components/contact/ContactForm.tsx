"use client";

import { useState, FormEvent } from "react";
import { submitContactForm } from "@/app/contact/actions";

const subjects = [
  "Computer Forms",
  "Business Forms",
  "Web Printing",
  "Offset & Packaging",
  "Thermal & Rolls",
  "Rigid Boxes",
  "Stickers & Labels",
  "General Enquiry",
  "Become a Supplier",
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
        <p className="font-display text-2xl font-bold text-charcoal mb-3">Thanks. Your enquiry is on its way.</p>
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
          <input id="name" name="name" required maxLength={200} autoComplete="name" className="form-control" />
        </div>
        <div>
          <label htmlFor="company" className="block font-sans text-xs font-medium text-charcoal-400 mb-2 uppercase tracking-wider">Company</label>
          <input id="company" name="company" maxLength={200} autoComplete="organization" className="form-control" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block font-sans text-xs font-medium text-charcoal-400 mb-2 uppercase tracking-wider">Email *</label>
          <input id="email" name="email" type="email" required maxLength={254} autoComplete="email" className="form-control" />
        </div>
        <div>
          <label htmlFor="phone" className="block font-sans text-xs font-medium text-charcoal-400 mb-2 uppercase tracking-wider">Phone</label>
          <input id="phone" name="phone" type="tel" maxLength={30} autoComplete="tel" inputMode="tel" className="form-control" />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block font-sans text-xs font-medium text-charcoal-400 mb-2 uppercase tracking-wider">Subject</label>
        <select id="subject" name="subject" className="form-control">
          <option value="">Select a subject</option>
          {subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block font-sans text-xs font-medium text-charcoal-400 mb-2 uppercase tracking-wider">Message *</label>
        <textarea id="message" name="message" required maxLength={5000} rows={5} className="form-control resize-y" />
      </div>

      <label htmlFor="consent" className="flex items-start gap-3 min-h-[44px] cursor-pointer">
        <input id="consent" name="consent" type="checkbox" required className="mt-1 w-5 h-5 shrink-0 accent-[#d61016]" />
        <span className="font-sans text-sm text-charcoal-400 leading-relaxed">
          By submitting, you agree to be contacted about your enquiry. We&apos;ll never share your details for marketing.
        </span>
      </label>

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
