import { ArrowRight } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";
import TiltCard from "./motion/TiltCard";
import type { ProgramaAcademico } from "@/content/oferta-academica";

export default function AcademicCard({
  programa,
  headingLevel: Heading = "h3",
}: {
  programa: ProgramaAcademico;
  headingLevel?: "h2" | "h3";
}) {
  return (
    <TiltCard
      href={`/oferta-academica/${programa.slug}`}
      className="flex h-full flex-col overflow-hidden rounded-[1.65rem] bg-surface shadow-card transition-shadow duration-300 ease-out hover:shadow-card-hover"
    >
      <PlaceholderImage alt={programa.imagenAlt} src={programa.imagenSrc} className="rounded-none border-0" zoomOnGroupHover />
      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
        <Heading className="font-heading text-2xl font-semibold leading-tight text-ink">{programa.nombre}</Heading>
        <p className="text-sm leading-relaxed text-ink-soft">{programa.resumen}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-bold text-primary">
          Ver detalle
          <ArrowRight size={17} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </TiltCard>
  );
}
