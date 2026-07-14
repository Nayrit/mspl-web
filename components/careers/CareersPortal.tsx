"use client";

import { useState, FormEvent, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site";
import { submitCareerApplication } from "@/app/careers/actions";
import type { JobOpening } from "@/lib/cms/types";

export default function CareersPortal({ jobs }: { jobs: JobOpening[] }) {
  const [selectedDept, setSelectedDept] = useState("All");
  const [activeJobId, setActiveJobId] = useState<string | null>(null);
  const [appliedPos, setAppliedPos] = useState<string>("");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");

  const departments = useMemo(() => {
    const unique = Array.from(new Set(jobs.map((j) => j.department)));
    return ["All", ...unique];
  }, [jobs]);

  const filteredJobs =
    selectedDept === "All" ? jobs : jobs.filter((j) => j.department === selectedDept);

  function handleApplyClick(title: string) {
    setAppliedPos(title);
    const formEl = document.getElementById("career-apply-form");
    if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
  }

  async function handleApplicationSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("submitting");
    setFormError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const result = await submitCareerApplication(data);

    if (result.success) {
      setFormStatus("success");
      form.reset();
    } else {
      setFormStatus("error");
      setFormError(result.error ?? "Something went wrong. Please try again.");
    }
  }

  return (
    <section className="section-padding bg-parchment">
      <div className="container-editorial">
        {/* Department Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-charcoal-100">
          <span className="font-sans text-xs uppercase tracking-wider text-charcoal-300 mr-2">Filter by Department:</span>
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-4 py-2 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all ${
                selectedDept === dept
                  ? "bg-primary text-white shadow-md"
                  : "bg-charcoal-100 text-charcoal-400 hover:bg-charcoal-200"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Job Listings Grid */}
        <div className="space-y-4 mb-20">
          {filteredJobs.length === 0 && (
            <p className="font-sans text-sm text-charcoal-400 py-8">
              No open positions in this department right now. You can still submit a spontaneous application below.
            </p>
          )}
          {filteredJobs.map((job) => {
            const isExpanded = activeJobId === job.id;
            return (
              <div
                key={job.id}
                className="bg-parchment-50 border border-charcoal-100 rounded-xl overflow-hidden transition-shadow hover:shadow-md"
              >
                <div
                  className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
                  onClick={() => setActiveJobId(isExpanded ? null : job.id)}
                >
                  <div>
                    <span className="inline-block px-3 py-1 rounded bg-primary/10 text-primary font-sans text-xs uppercase tracking-wider font-semibold mb-2">
                      {job.department}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-charcoal">
                      {job.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-charcoal-400 mt-1 flex flex-wrap items-center gap-4">
                      <span>&bull; {job.location}</span>
                      <span>&bull; {job.type}</span>
                      <span>&bull; {job.experience}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-3 self-start md:self-center shrink-0">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleApplyClick(job.title);
                      }}
                      className="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-sans text-xs uppercase tracking-wider font-semibold transition-all shadow-sm"
                    >
                      Apply Now
                    </button>
                    <span className="w-8 h-8 rounded-full bg-charcoal-100 flex items-center justify-center text-charcoal-400">
                      {isExpanded ? "–" : "+"}
                    </span>
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="border-t border-charcoal-100 bg-parchment-100/40 p-6 sm:p-8"
                    >
                      <p className="font-sans text-sm text-charcoal-400 leading-relaxed mb-6 max-w-3xl">
                        {job.description}
                      </p>
                      <p className="font-sans text-xs uppercase tracking-wider font-bold text-charcoal mb-3">
                        Key Responsibilities:
                      </p>
                      <ul className="list-disc list-inside space-y-2 font-sans text-sm text-charcoal-400 mb-6">
                        {job.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Application Form Section */}
        <div id="career-apply-form" className="bg-charcoal text-parchment-50 p-8 sm:p-12 rounded-2xl border border-white/10 max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="font-sans text-xs uppercase tracking-[0.18em] text-gold font-semibold">
              Career Application
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
              {appliedPos ? `Applying for: ${appliedPos}` : "Submit Your Application"}
            </h3>
            <p className="font-sans text-sm text-white/70 mt-2">
              Send your profile directly to our HR &amp; Executive Recruitment desk ({siteConfig.email}).
            </p>
          </div>

          {formStatus === "success" ? (
            <div className="bg-primary/20 border border-primary p-6 rounded-xl text-center">
              <p className="font-display text-xl font-bold text-white mb-2">Application Received</p>
              <p className="font-sans text-sm text-white/80">
                Thank you for applying to Master Simex Paper Limited. Our recruitment team will review your profile and contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleApplicationSubmit} className="space-y-6">
              {/* Spam honeypot */}
              <input type="text" name="website_url" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="applicant-name" className="block font-sans text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                    Full Name *
                  </label>
                  <input
                    id="applicant-name"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 font-sans text-sm text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="applicant-email" className="block font-sans text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="applicant-email"
                    name="email"
                    type="email"
                    required
                    placeholder="yourname@email.com"
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 font-sans text-sm text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="applicant-phone" className="block font-sans text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                    Phone Number *
                  </label>
                  <input
                    id="applicant-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+880 1XXX XXXXXX"
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 font-sans text-sm text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="applicant-position" className="block font-sans text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                    Position / Role *
                  </label>
                  <input
                    id="applicant-position"
                    name="position"
                    required
                    defaultValue={appliedPos}
                    placeholder="e.g. Production Manager or Spontaneous Application"
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 font-sans text-sm text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="applicant-linkedin" className="block font-sans text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                  LinkedIn Profile or Portfolio URL
                </label>
                <input
                  id="applicant-linkedin"
                  name="linkedin"
                  type="url"
                  placeholder="https://linkedin.com/in/..."
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 font-sans text-sm text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              {/* CV / Resume File Upload Field */}
              <div>
                <label htmlFor="applicant-cv" className="block font-sans text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                  Upload CV / Resume (PDF or DOCX) *
                </label>
                <input
                  id="applicant-cv"
                  name="attachment"
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-3 py-2.5 font-sans text-xs text-white/80 file:mr-4 file:py-1.5 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-bold file:uppercase file:tracking-wider file:bg-primary file:text-white hover:file:bg-primary-dark cursor-pointer transition-colors"
                />
                <p className="font-sans text-[11px] text-white/50 mt-1.5">
                  Supported formats: .PDF, .DOC, .DOCX (Max size 10MB)
                </p>
              </div>

              <div>
                <label htmlFor="applicant-note" className="block font-sans text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                  Cover Note / Experience Summary *
                </label>
                <textarea
                  id="applicant-note"
                  name="coverNote"
                  required
                  rows={4}
                  placeholder="Summarize your experience and why you are interested in Master Simex..."
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 font-sans text-sm text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-y"
                />
              </div>

              <div className="flex items-start gap-3">
                <input id="career-consent" name="consent" type="checkbox" required className="mt-1 accent-primary" />
                <label htmlFor="career-consent" className="font-sans text-xs text-white/70 leading-relaxed">
                  I consent to Master Simex Paper Limited processing my application and contacting me regarding career opportunities.
                </label>
              </div>

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary hover:bg-primary-dark text-white font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-lg disabled:opacity-60"
              >
                {formStatus === "submitting" ? "Submitting Application…" : "Submit Career Application &rarr;"}
              </button>

              {formStatus === "error" && (
                <p className="font-sans text-sm text-primary" role="alert">{formError}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
