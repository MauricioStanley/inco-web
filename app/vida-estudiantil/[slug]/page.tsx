import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import PlaceholderImage from "@/components/PlaceholderImage";
import VerificationNote from "@/components/VerificationNote";
import { actividades } from "@/content/actividades";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return actividades.map((actividad) => ({ slug: actividad.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const actividad = actividades.find((a) => a.slug === slug);
  if (!actividad) return { title: "Vida estudiantil" };
  return pageMetadata(actividad.nombre, actividad.resumen);
}

export default async function ActividadPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const actividad = actividades.find((a) => a.slug === slug);
  if (!actividad) notFound();

  return (
    <>
      <Hero compact title={actividad.nombre} subtitle={actividad.resumen} imageSrc={actividad.imagenSrc} />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Vida estudiantil", href: "/vida-estudiantil" },
          { label: actividad.nombre },
        ]}
      />
      <Section className="grid gap-10 md:grid-cols-[1fr,1.4fr]">
        <PlaceholderImage alt={actividad.imagenAlt} src={actividad.imagenSrc} />

        <div className="space-y-6">
          {actividad.objetivoGeneral && (
            <div>
              <h2 className="text-xl font-bold">Objetivo general</h2>
              <p className="mt-3 text-ink-soft">{actividad.objetivoGeneral}</p>
            </div>
          )}

          {actividad.objetivosEspecificos && (
            <div>
              <h2 className="text-xl font-bold">Objetivos específicos</h2>
              <ul className="mt-3 space-y-2">
                {actividad.objetivosEspecificos.map((objetivo) => (
                  <li key={objetivo} className="rounded-lg border border-border bg-surface-alt p-4 text-sm text-ink-soft">
                    {objetivo}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {actividad.notaVerificacion && <VerificationNote>{actividad.notaVerificacion}</VerificationNote>}
        </div>
      </Section>
    </>
  );
}
