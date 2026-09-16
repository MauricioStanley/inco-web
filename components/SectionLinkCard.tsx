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
      className="flex h-full flex-col gap-4 rounded-[1.5rem] bg-primary/[0.045] p-6 ring-1 ring-inset ring-primary/10 transition-colors duration-300 hover:bg-primary/[0.075] sm:p-7"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-surface text-primary shadow-card">
        {icon}
      </span>
      <h3 className="font-heading text-2xl font-semibold leading-tight text-ink">{title}</h3>
      <p className="text-sm leading-relaxed text-ink-soft">{description}</p>
      <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-bold text-primary">
        Ver más
        <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </TiltCard>
  );
}
