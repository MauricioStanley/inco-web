import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import ActividadCard from "@/components/ActividadCard";
import { actividades } from "@/content/actividades";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Vida estudiantil",
  "Actividades extracurriculares del Instituto Nacional de Comercio (INCO): Banda de Paz, Cachiporras, Deportes, Danza Folclórica y Danza Moderna."
);

export default function VidaEstudiantilPage() {
  return (
    <>
      <Hero compact title="Vida estudiantil" subtitle="Actividades extracurriculares del INCO" />
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Vida estudiantil" }]} />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {actividades.map((actividad) => (
            <ActividadCard key={actividad.slug} actividad={actividad} headingLevel="h2" />
          ))}
        </div>
      </Section>
    </>
  );
}
