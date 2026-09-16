import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  alt?: boolean;
  id?: string;
}

export default function Section({ children, className = "", alt = false, id }: SectionProps) {
  return (
    <section id={id} className={`${alt ? "bg-surface-alt" : "bg-surface"} py-20 sm:py-24 lg:py-28`}>
      <div className={`mx-auto max-w-content px-6 ${className}`}>{children}</div>
    </section>
  );
}
