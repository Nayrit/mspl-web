import { ReactNode } from "react";

interface SectionEyebrowProps {
  children: ReactNode;
  className?: string;
  light?: boolean;
  withLine?: boolean;
}

export default function SectionEyebrow({
  children,
  className = "",
  light = false,
  withLine = true,
}: SectionEyebrowProps) {
  return (
    <div
      className={`flex items-center gap-3 eyebrow ${
        light ? "text-white/60" : "text-charcoal-400"
      } ${className}`}
    >
      {withLine && (
        <span
          className={`block h-px w-8 flex-shrink-0 ${
            light ? "bg-primary/60" : "bg-primary"
          }`}
        />
      )}
      {children}
    </div>
  );
}
