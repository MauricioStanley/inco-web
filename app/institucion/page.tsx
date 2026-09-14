import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionLinkCard from "@/components/SectionLinkCard";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { identidad, mision, vision } from "@/content/institucion";
import { pageMetadata } from "@/lib/seo";
import { History, MapPin, Compass } from "lucide-react";

export const metadata: Metadata = pageMetadata(
  "Quiénes somos",
  "Misión, visión y lema institucional del Instituto Nacional de Comercio (INCO), en San Jacinto, San Salvador."
);

export default function InstitucionPage() {
  return (
    <>
      <Hero compact title="Quiénes somos" subtitle={identidad.lema} />
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Institución" }]} />
      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Misión</h2>
            <p className="mt-3 text-ink-soft">{mision}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Visión</h2>
            <p className="mt-3 text-ink-soft">{vision}</p>
          </div>
        </div>
      </Section>

      <Section alt>
        <h2 className="text-2xl font-bold">Conoce más</h2>
        <StaggerGrid className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <StaggerItem>
            <SectionLinkCard
              href="/institucion/historia"
              icon={<History aria-hidden="true" />}
              title="Historia"
              description="Nuestra trayectoria como institución educativa."
            />
          </StaggerItem>
          <StaggerItem>
            <SectionLinkCard
              href="/institucion/ubicacion"
              icon={<MapPin aria-hidden="true" />}
              title="Ubicación"
              description="Dirección, mapa y cómo llegar al INCO."
            />
          </StaggerItem>
          <StaggerItem>
            <SectionLinkCard
              href="/recorrido-virtual"
              icon={<Compass aria-hidden="true" />}
              title="Recorrido virtual 360°"
              description="Navega entre ambientes del instituto arrastrando la pantalla."
            />
          </StaggerItem>
        </StaggerGrid>
      </Section>
    </>
  );
}
