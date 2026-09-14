import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import RequisitosTabs from "@/components/RequisitosTabs";
import { requisitosPorCaso, recepcionDocumentos } from "@/content/matricula";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Requisitos de matrícula",
  "Documentos requeridos para matricularte en el INCO según tu caso: nuevo ingreso, antiguo ingreso, segundo año de bachillerato o modalidades flexibles."
);

export default function RequisitosPage() {
  return (
    <>
      <Hero compact title="Requisitos de matrícula" subtitle="Selecciona tu caso para ver los documentos requeridos" />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Matrícula", href: "/matricula" },
          { label: "Requisitos" },
        ]}
      />
      <Section>
        <RequisitosTabs casos={requisitosPorCaso} />

        <div className="mt-12 rounded-xl border border-border bg-surface-alt p-6">
          <h2 className="text-lg font-bold">{recepcionDocumentos.titulo}</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            {recepcionDocumentos.puntos.map((punto) => (
              <li key={punto}>{punto}</li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
