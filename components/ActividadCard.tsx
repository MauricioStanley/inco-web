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
      className="flex h-full flex-col overflow-hidden rounded-[1.65rem] bg-surface shadow-card transition-shadow duration-300 ease-out hover:shadow-card-hover"
    >
      <PlaceholderImage alt={actividad.imagenAlt} src={actividad.imagenSrc} className="rounded-none border-0" zoomOnGroupHover />
      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
        <Heading className="font-heading text-2xl font-semibold leading-tight text-ink">{actividad.nombre}</Heading>
        <p className="text-sm leading-relaxed text-ink-soft">{actividad.resumen}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-bold text-primary">
          Conocer más
          <ArrowRight size={17} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </TiltCard>
  );
}
