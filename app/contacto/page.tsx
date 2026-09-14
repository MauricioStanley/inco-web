import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import Button from "@/components/Button";
import ContactLinkCard from "@/components/ContactLinkCard";
import { contacto } from "@/content/contacto";
import { Phone, MessageCircle, Facebook, Instagram, MapPin } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Contacto",
  "Teléfono, WhatsApp, redes sociales, dirección y mapa del Instituto Nacional de Comercio (INCO) en San Jacinto, San Salvador."
);

export default function ContactoPage() {
  return (
    <>
      <Hero compact title="Contacto" subtitle="Escríbenos, llámanos o visítanos" />
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} />

      <Section className="grid gap-10 md:grid-cols-[1fr,1.2fr]">
        <div className="space-y-4">
          <ContactLinkCard
            href={contacto.telefonoHref}
            icon={<Phone className="text-primary" aria-hidden="true" />}
            title="Teléfono"
            subtitle={contacto.telefono}
          />

          <ContactLinkCard
            href={contacto.whatsappHref}
            external
            icon={<MessageCircle className="text-primary" aria-hidden="true" />}
            title="WhatsApp"
            subtitle={contacto.whatsapp}
          />

          <ContactLinkCard
            href={contacto.facebookHref}
            external
            icon={<Facebook className="text-primary" aria-hidden="true" />}
            title="Facebook"
            subtitle="Instituto Nacional de Comercio"
          />

          <ContactLinkCard
            href={contacto.instagramHref}
            external
            icon={<Instagram className="text-primary" aria-hidden="true" />}
            title="Instagram"
            subtitle="@institutonacionaldecomercio"
          />

          <div className="flex items-start gap-3 rounded-xl border border-border bg-surface-alt p-4">
            <MapPin className="mt-1 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <p className="font-semibold">Dirección</p>
              <p className="text-sm text-ink-soft">{contacto.direccion}</p>
              <div className="mt-3">
                <Button href={`https://www.google.com/maps?q=${encodeURIComponent(contacto.direccion)}`} external>
                  Cómo llegar
                </Button>
              </div>
            </div>
          </div>
        </div>

        <iframe
          title="Mapa de ubicación del Instituto Nacional de Comercio"
          src={contacto.mapsEmbedSrc}
          className="h-96 w-full rounded-xl border border-border md:h-full"
          loading="lazy"
        />
      </Section>
    </>
  );
}
