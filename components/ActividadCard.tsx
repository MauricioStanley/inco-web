import { ArrowRight } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";
import TiltCard from "./motion/TiltCard";
import type { Actividad } from "@/content/actividades";

export default function ActividadCard({
  actividad,
  headingLevel: Heading = "h3",
}: {
  actividad: Actividad;
  headingLevel?: "h2" | "h3";
}) {
  return (
    <TiltCard
      href={`/vida-estudiantil/${actividad.slug}`}
      className="flex h-full flex-col overflow-hidden rounded-xl bg-surface-alt shadow-card transition-shadow duration-300 ease-out hover:shadow-card-hover"
    >
      <span className="absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_100%] transition-[background-position] duration-700 group-hover:bg-[position:100%_0]" />
      <PlaceholderImage alt={actividad.imagenAlt} src={actividad.imagenSrc} className="rounded-none border-0" zoomOnGroupHover />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <Heading className="font-heading text-lg font-semibold text-ink">{actividad.nombre}</Heading>
        <p className="text-sm text-ink-soft">{actividad.resumen}</p>
        <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary">
          Conocer más
          <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </TiltCard>
  );
}
