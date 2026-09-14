import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import AcademicCard from "@/components/AcademicCard";
import { programasAcademicos } from "@/content/oferta-academica";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Oferta académica",
  "Bachilleratos técnicos vocacionales, bachillerato general y modalidades flexibles del Instituto Nacional de Comercio (INCO)."
);

export default function OfertaAcademicaPage() {
  return (
    <>
      <Hero compact title="Oferta académica" subtitle="Nuestras especialidades y modalidades de bachillerato" />
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Oferta académica" }]} />

      <Section className="max-w-3xl">
        <Link
          href="/oferta-academica/quiz"
          className="group flex flex-col items-start gap-3 rounded-2xl border border-accent-dark/30 bg-accent/10 p-6 transition-colors hover:border-accent-dark/60 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-start gap-3">
            <Sparkles size={22} className="mt-0.5 shrink-0 text-accent-dark" aria-hidden="true" />
            <div>
              <p className="font-heading font-semibold text-ink">¿No sabes cuál elegir?</p>
              <p className="mt-1 text-sm text-ink-soft">Responde 4 preguntas cortas y te recomendamos un programa.</p>
            </div>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-accent-dark">
            Descúbrelo
            <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Link>
      </Section>

      <Section alt>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programasAcademicos.map((programa) => (
            <AcademicCard key={programa.slug} programa={programa} headingLevel="h2" />
          ))}
        </div>
      </Section>
    </>
  );
}
