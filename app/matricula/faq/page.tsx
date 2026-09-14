import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import { faqs } from "@/content/matricula";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Preguntas frecuentes de matrícula",
  "Respuestas a las dudas más comunes sobre el proceso de matrícula del Instituto Nacional de Comercio (INCO)."
);

export default function FaqPage() {
  return (
    <>
      <Hero compact title="Preguntas frecuentes" subtitle="Dudas comunes sobre el proceso de matrícula" />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Matrícula", href: "/matricula" },
          { label: "Preguntas frecuentes" },
        ]}
      />
      <Section className="max-w-3xl">
        <FaqAccordion faqs={faqs} />
      </Section>
    </>
  );
}
