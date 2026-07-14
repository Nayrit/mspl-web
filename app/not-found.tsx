import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center section-padding bg-parchment">
      <div className="container-editorial text-center max-w-lg">
        <p className="font-display text-8xl font-bold text-primary/20 mb-4">404</p>
        <h1 className="font-display text-display-md font-bold text-charcoal mb-4">
          This page came off the press wrong.
        </h1>
        <p className="font-sans text-charcoal-400 mb-8">
          The page you&apos;re after isn&apos;t here. Let&apos;s get you back to something useful.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans font-semibold text-sm tracking-wide px-8 py-4"
          style={{ backgroundColor: "#d61016", color: "#faf8f5" }}
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
