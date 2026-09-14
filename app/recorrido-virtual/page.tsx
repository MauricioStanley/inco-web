import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import TourViewer from "@/components/TourViewer";
import VerificationNote from "@/components/VerificationNote";

// No se agrega a metadata de listado público (robots noindex) porque es un
// prototipo interno, no una página final del sitio.
export const metadata: Metadata = { title: "Recorrido virtual (prototipo)", robots: { index: false, follow: false } };

export default function RecorridoVirtualPage() {
  return (
    <>
      <Hero
        compact
        title="Recorrido virtual 360°"
        subtitle="Prototipo interno — evaluando si construir esto para el INCO"
      />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Institución", href: "/institucion" },
          { label: "Recorrido virtual (prototipo)" },
        ]}
      />
      <Section className="max-w-3xl">
        <VerificationNote>
          Esta página es un prototipo técnico, no contenido oficial del sitio. Las fotos de abajo son de
          demostración (de otro edificio y otra escuela, con licencia libre) — <strong>no son el INCO</strong>.
          Sirven solo para probar cómo se sentiría un recorrido navegable estilo Street View dentro del instituto,
          antes de invertir tiempo en fotografiar las instalaciones reales.
        </VerificationNote>

        <div className="mt-8">
          <TourViewer />
        </div>

        <div className="mt-8 space-y-3 text-sm text-ink-soft">
          <p>
            <strong className="text-ink">Cómo probarlo:</strong> arrastra con el mouse (o el dedo en el celular)
            para mirar alrededor. Haz clic en el círculo blanco pulsante para &quot;caminar&quot; a la siguiente
            escena.
          </p>
          <p>
            Para construir el recorrido real del INCO necesitaríamos fotos 360° reales de cada ambiente
            (entrada, pasillos, aulas, cancha, etc.), tomadas con la app gratuita &quot;Street View&quot; de Google
            o una cámara 360°, con autorización de la dirección del instituto para fotografiar las instalaciones.
          </p>
        </div>
      </Section>
    </>
  );
}
