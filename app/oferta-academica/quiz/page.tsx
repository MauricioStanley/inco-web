import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProgramQuiz from "@/components/ProgramQuiz";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "¿Qué bachillerato es para ti?",
  "Responde 4 preguntas cortas y descubre qué programa del Instituto Nacional de Comercio (INCO) se ajusta más a tus gustos."
);

export default function QuizPage() {
  return (
    <>
      <Hero compact title="¿Qué bachillerato es para ti?" subtitle="4 preguntas, menos de un minuto" />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Oferta académica", href: "/oferta-academica" },
          { label: "¿Qué bachillerato es para ti?" },
        ]}
      />
      <Section>
        <ProgramQuiz />
      </Section>
    </>
  );
}
