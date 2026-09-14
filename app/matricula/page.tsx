import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import Button from "@/components/Button";
import VerificationNote from "@/components/VerificationNote";
import { pasosMatricula } from "@/content/matricula";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Proceso de matrícula",
  "Pasos para matricularte en el Instituto Nacional de Comercio (INCO): reserva de matrícula, inducción y matrícula oficial."
);

export default function MatriculaPage() {
  return (
    <>
      <Hero compact title="Proceso de matrícula" subtitle="Pasos para matricularte en el INCO" />
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Matrícula" }]} />
      <Section>
        <ol className="grid gap-6 md:grid-cols-3">
          {pasosMatricula.map((paso) => (
            <li key={paso.numero} className="rounded-xl border border-border bg-surface-alt p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-white">
                {paso.numero}
              </span>
              <h2 className="mt-4 text-lg font-bold">{paso.titulo}</h2>
              <p className="mt-2 text-sm text-ink-soft">{paso.descripcion}</p>
              {paso.nota && <p className="mt-3 text-xs italic text-ink-soft">{paso.nota}</p>}
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/matricula/requisitos">Ver requisitos por tipo de estudiante</Button>
          <Button href="/matricula/faq" variant="secondary">
            Preguntas frecuentes
          </Button>
        </div>

        <div className="mt-10 max-w-2xl">
          <VerificationNote>
            El canal oficial para reservar la pre-matrícula (formulario o código QR) debe confirmarse con la
            dirección del INCO antes de publicarse aquí. Mientras tanto, contacta a la institución directamente —
            ver la página de Contacto.
          </VerificationNote>
        </div>
      </Section>
    </>
  );
}
