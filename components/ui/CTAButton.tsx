import { ReactNode } from "react";
import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  external?: boolean;
  id?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  id,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-sans font-medium text-sm tracking-wide transition-all duration-300 ease-out";

  const variants = {
    primary:
      "bg-charcoal text-white px-7 py-3.5 hover:bg-navy active:scale-[0.98]",
    secondary:
      "bg-gold text-charcoal px-7 py-3.5 hover:bg-gold-dark active:scale-[0.98]",
    outline:
      "border border-charcoal text-charcoal px-7 py-3.5 hover:bg-charcoal hover:text-white active:scale-[0.98]",
    ghost:
      "text-charcoal underline underline-offset-4 decoration-gold hover:decoration-charcoal px-0 py-0",
  };

  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      id={id}
      className={`${base} ${variants[variant]} ${className}`}
      {...externalProps}
    >
      {children}
    </Link>
  );
}
