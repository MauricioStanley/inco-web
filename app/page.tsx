import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Button from "@/components/Button";
import AcademicCard from "@/components/AcademicCard";
import SectionLinkCard from "@/components/SectionLinkCard";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WelcomeVideo from "@/components/WelcomeVideo";
import Reveal from "@/components/motion/Reveal";
import CinematicReveal from "@/components/motion/CinematicReveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { programasAcademicos } from "@/content/oferta-academica";
import { identidad, mision, vision, videoBienvenidaSrc } from "@/content/institucion";
import { cifrasInstitucionales } from "@/content/stats";
import { testimonios } from "@/content/testimonios";
import { contacto } from "@/content/contacto";
import { withBasePath } from "@/lib/basePath";
import { Phone, MessageCircle, MapPin, GraduationCap, BookOpen, Users } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero title={identidad.nombre} subtitle={identidad.lema} imageSrc="/inco-photos/banda-de-paz.jpg">
        <Button href="/oferta-academica">Ver oferta académica</Button>
        <Button href="/matricula" variant="secondary">
          Proceso de matrícula
        </Button>
      </Hero>

      {videoBienvenidaSrc && (
        <Section>
          <WelcomeVideo src={videoBienvenidaSrc} />
        </Section>
      )}

      <Section>
        <StaggerGrid className="grid gap-6 sm:grid-cols-3">
          <StaggerItem>
            <SectionLinkCard
              href="/matricula"
              icon={<GraduationCap aria-hidden="true" />}
              title="Quiero matricularme"
              description="Pasos, requisitos y fechas del proceso de matrícula."
            />
          </StaggerItem>
          <StaggerItem>
            <SectionLinkCard
              href="/vida-estudiantil"
              icon={<BookOpen aria-hidden="true" />}
              title="Soy estudiante"
              description="Actividades, bandas, clubes y vida dentro del INCO."
            />
          </StaggerItem>
          <StaggerItem>
            <SectionLinkCard
              href="/contacto"
              icon={<Users aria-hidden="true" />}
              title="Soy padre de familia"
              description="Cómo contactarnos, ubicación y canales oficiales."
            />
          </StaggerItem>
        </StaggerGrid>
      </Section>

      <Section alt>
        <Reveal className="mb-10 max-w-2xl">
          <h2 className="text-2xl font-bold md:text-3xl">Nuestra oferta académica</h2>
          <p className="mt-2 text-ink-soft">
            Bachilleratos técnicos vocacionales, bachillerato general y modalidades flexibles.
          </p>
        </Reveal>
        <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programasAcademicos.map((programa) => (
            <StaggerItem key={programa.slug} className="h-full">
              <AcademicCard programa={programa} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          {/* La imagen se queda fija (position: sticky, CSS puro) mientras el
              texto sigue bajando al lado — el mismo truco de "storytelling"
              que usan las páginas de producto de Apple, sin necesitar JS. */}
          <div className="md:sticky md:top-24 md:self-start">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-card-hover">
              <img
                src={withBasePath("/inco-photos/cachiporras.jpg")}
                alt="Estudiantes del INCO en una actividad institucional"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-14 py-4">
            <CinematicReveal>
              <h2 className="text-2xl font-bold">Misión</h2>
              <p className="mt-3 text-ink-soft">{mision}</p>
            </CinematicReveal>
            <CinematicReveal delay={0.05}>
              <h2 className="text-2xl font-bold">Visión</h2>
              <p className="mt-3 text-ink-soft">{vision}</p>
            </CinematicReveal>
          </div>
        </div>
      </Section>

      {cifrasInstitucionales.length >= 2 && (
        <Section alt>
          <Reveal>
            <StatsSection cifras={cifrasInstitucionales} />
          </Reveal>
        </Section>
      )}

      {testimonios.length > 0 && (
        <Section>
          <Reveal className="mb-10 max-w-2xl">
            <h2 className="text-2xl font-bold">Lo que dicen nuestros estudiantes</h2>
          </Reveal>
          <TestimonialsSection testimonios={testimonios} />
        </Section>
      )}

      <Section alt>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-primary p-8 text-white shadow-card md:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 90% 10%, rgba(242,183,5,0.25), transparent 45%), radial-gradient(circle at 0% 100%, rgba(255,255,255,0.08), transparent 40%)",
              }}
            />
            <div className="relative grid gap-8 md:grid-cols-[2fr,1fr]">
              <div>
                <h2 className="text-2xl font-bold">Contáctanos</h2>
                <p className="mt-2 flex items-center gap-2 text-white/90">
                  <MapPin size={18} aria-hidden="true" /> {contacto.direccion}
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button href={contacto.telefonoHref} variant="secondary">
                    <Phone size={18} aria-hidden="true" /> Llamar
                  </Button>
                  <Button href={contacto.whatsappHref} variant="ghost" external>
                    <MessageCircle size={18} aria-hidden="true" /> WhatsApp
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Button href="/contacto" variant="ghost">
                  Ver todos los canales
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
