import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import Button from "@/components/Button";
import PlaceholderImage from "@/components/PlaceholderImage";
import { programasAcademicos } from "@/content/oferta-academica";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return programasAcademicos.map((programa) => ({ slug: programa.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const programa = programasAcademicos.find((p) => p.slug === slug);
  if (!programa) return { title: "Oferta académica" };
  return pageMetadata(programa.nombre, programa.resumen);
}

export default async function ProgramaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const programa = programasAcademicos.find((p) => p.slug === slug);
  if (!programa) notFound();

  return (
    <>
      <Hero compact title={programa.nombre} subtitle={programa.duracion} imageSrc={programa.imagenSrc} />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Oferta académica", href: "/oferta-academica" },
          { label: programa.nombre },
        ]}
      />
      <Section className="grid gap-10 md:grid-cols-[1fr,1.4fr]">
        <div className="space-y-6">
          <PlaceholderImage alt={programa.imagenAlt} src={programa.imagenSrc} />
          <Button href="/matricula">Iniciar proceso de matrícula</Button>
        </div>

        <div className="space-y-8">
          {programa.secciones.map((seccion) => (
            <div key={seccion.titulo}>
              <h2 className="text-xl font-bold">{seccion.titulo}</h2>
              {seccion.parrafos?.map((parrafo) => (
                <p key={parrafo} className="mt-3 text-ink-soft">
                  {parrafo}
                </p>
              ))}
              {seccion.lista && (
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {seccion.lista.map((item) => (
                    <li key={item} className="rounded-lg border border-border bg-surface-alt px-4 py-2 text-sm text-ink-soft">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
