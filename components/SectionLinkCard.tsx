import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import TiltCard from "./motion/TiltCard";

interface SectionLinkCardProps {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
}

/** Tarjeta de navegación interna (no un producto/actividad con foto), para
 * subsecciones de una página como Institución: ícono + título + descripción. */
export default function SectionLinkCard({ href, icon, title, description }: SectionLinkCardProps) {
  return (
    <TiltCard
      href={href}
      className="flex h-full flex-col gap-3 rounded-xl border border-border bg-surface-alt p-6 shadow-card transition-shadow duration-300 ease-out hover:shadow-card-hover"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </span>
      <h3 className="font-heading text-lg font-semibold text-ink">{title}</h3>
      <p className="text-sm text-ink-soft">{description}</p>
      <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary">
        Ver más
        <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </TiltCard>
  );
}
