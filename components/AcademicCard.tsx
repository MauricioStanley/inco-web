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
      className="flex h-full flex-col overflow-hidden rounded-xl bg-surface-alt shadow-card transition-shadow duration-300 ease-out hover:shadow-card-hover"
    >
      <span className="absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] transition-[background-position] duration-700 group-hover:bg-[position:100%_0]" />
      <PlaceholderImage alt={programa.imagenAlt} src={programa.imagenSrc} className="rounded-none border-0" zoomOnGroupHover />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <Heading className="font-heading text-lg font-semibold text-ink">{programa.nombre}</Heading>
        <p className="text-sm text-ink-soft">{programa.resumen}</p>
        <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary">
          Ver detalle
          <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </TiltCard>
  );
}
