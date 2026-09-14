import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import Button from "@/components/Button";
import { contacto } from "@/content/contacto";
import { MapPin } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Ubicación",
  "Dirección y mapa para llegar al Instituto Nacional de Comercio (INCO): Final Calle Campos, Avenida Barberena, San Jacinto, San Salvador."
);

export default function UbicacionPage() {
  return (
    <>
      <Hero compact title="Ubicación" subtitle="Cómo llegar al INCO" />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Institución", href: "/institucion" },
          { label: "Ubicación" },
        ]}
      />
      <Section className="grid gap-8 md:grid-cols-[1fr,1.2fr]">
        <div>
          <p className="flex items-start gap-2 text-lg text-ink-soft">
            <MapPin className="mt-1 shrink-0 text-primary" aria-hidden="true" />
            {contacto.direccion}
          </p>
          <div className="mt-6">
            <Button href={`https://www.google.com/maps?q=${encodeURIComponent(contacto.direccion)}`} external>
              Cómo llegar en Google Maps
            </Button>
          </div>
        </div>
        <iframe
          title="Mapa de ubicación del Instituto Nacional de Comercio"
          src={contacto.mapsEmbedSrc}
          className="h-80 w-full rounded-xl border border-border md:h-full"
          loading="lazy"
        />
      </Section>
    </>
  );
}
