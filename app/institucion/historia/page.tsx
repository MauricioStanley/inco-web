import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import VerificationNote from "@/components/VerificationNote";
import { historia } from "@/content/institucion";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Historia",
  "Trayectoria histórica del Instituto Nacional de Comercio (INCO), actualmente en proceso de verificación oficial con la dirección del centro."
);

export default function HistoriaPage() {
  return (
    <>
      <Hero compact title="Historia" subtitle="Nuestra trayectoria como institución educativa" />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Institución", href: "/institucion" },
          { label: "Historia" },
        ]}
      />
      <Section className="max-w-3xl">
        <VerificationNote>{historia.notaVerificacion}</VerificationNote>

        <h2 className="mt-8 text-xl font-bold">Hallazgos preliminares (pendientes de confirmación oficial)</h2>
        <ul className="mt-4 space-y-3 text-ink-soft">
          {historia.hallazgosPreliminares.map((hallazgo) => (
            <li key={hallazgo} className="rounded-lg border border-border bg-surface-alt p-4">
              {hallazgo}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
