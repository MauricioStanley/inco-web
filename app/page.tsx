import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, MessageCircle, Phone } from "lucide-react";
import HomeHero from "@/components/HomeHero";
import BandStory from "@/components/BandStory";
import AcademicShowcase from "@/components/AcademicShowcase";
import Reveal from "@/components/motion/Reveal";
import CinematicReveal from "@/components/motion/CinematicReveal";
import Button from "@/components/Button";
import { programasAcademicos } from "@/content/oferta-academica";
import { mision, vision } from "@/content/institucion";
import { contacto } from "@/content/contacto";
import { withBasePath } from "@/lib/basePath";

const caminos = [
  {
    href: "/matricula",
    title: "Quiero matricularme",
    description: "Consulta el proceso, los pasos y los requisitos según tu caso.",
  },
  {
    href: "/oferta-academica/quiz",
    title: "Quiero elegir un bachillerato",
    description: "Responde cuatro preguntas y descubre qué opción encaja mejor contigo.",
  },
  {
    href: "/contacto",
    title: "Necesito hablar con el INCO",
    description: "Encuentra teléfono, WhatsApp, ubicación y canales oficiales.",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <BandStory />

      <section className="bg-surface py-24 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-content px-6">
          <Reveal className="max-w-3xl">
            <h2 className="text-[clamp(2.7rem,5.2vw,5rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-ink">
              Encuentra tu siguiente paso
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Información clara para decidir, prepararte y conectar con la institución.
            </p>
          </Reveal>

          <div className="mt-14 border-y border-primary/15">
            {caminos.map((camino, index) => (
              <Reveal key={camino.href} delay={index * 0.04} className="border-b border-primary/15 last:border-b-0">
                <Link
                  href={camino.href}
                  className="group grid gap-4 py-7 sm:grid-cols-[1fr_1.2fr_auto] sm:items-center sm:gap-8 sm:py-9"
                >
                  <h3 className="text-2xl font-semibold text-primary-dark sm:text-3xl">{camino.title}</h3>
                  <p className="max-w-xl text-ink-soft">{camino.description}</p>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                    <ArrowRight size={19} aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-24 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-content px-6">
          <Reveal className="mb-14 max-w-4xl lg:mb-20">
            <h2 className="text-[clamp(2.8rem,5.5vw,5.25rem)] font-semibold leading-[0.96] tracking-[-0.035em] text-ink">
              Cinco caminos. Una misma ambición.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Formación para continuar tus estudios, entrar al mundo laboral o convertir una idea en tu propio proyecto.
            </p>
          </Reveal>
          <AcademicShowcase programas={programasAcademicos} />
          <div className="mt-12 flex justify-end">
            <Link href="/oferta-academica" className="text-link group">
              Ver toda la oferta académica <span aria-hidden="true" className="text-link-line" />
            </Link>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-surface py-24 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-content px-6">
          <Reveal className="grid gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20">
            <h2 className="max-w-[11ch] text-[clamp(3rem,5vw,5rem)] font-semibold leading-[0.96] tracking-[-0.035em] text-ink">
              Formamos para la vida
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-ink-soft">
              La educación también sucede cuando una comunidad aprende a avanzar, crear y celebrar junta.
            </p>
          </Reveal>

          <CinematicReveal className="mt-14 sm:mt-16">
            <figure className="relative overflow-hidden rounded-[1.5rem] bg-primary-dark shadow-[0_36px_90px_-48px_rgba(6,39,29,0.65)] sm:rounded-[2rem]">
              <Image
                src={withBasePath("/inco-photos/cachiporras.jpg")}
                alt="Estudiantes del INCO durante una actividad institucional"
                width={1280}
                height={288}
                sizes="(min-width: 1280px) 1232px, calc(100vw - 3rem)"
                className="h-auto w-full"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-primary-dark/55 via-transparent to-primary-dark/10" />
              <figcaption className="absolute bottom-6 left-7 hidden text-sm font-semibold uppercase tracking-[0.16em] text-white/85 sm:block">
                Aprender, convivir, crecer
              </figcaption>
            </figure>
          </CinematicReveal>

          <div className="mt-14 grid gap-12 border-t border-primary/15 pt-12 lg:mt-16 lg:grid-cols-2 lg:gap-20 lg:pt-16">
            <CinematicReveal>
              <h3 className="text-2xl font-semibold text-primary">Nuestra misión</h3>
              <p className="mt-5 max-w-[68ch] text-base leading-8 text-ink-soft sm:text-lg">{mision}</p>
            </CinematicReveal>
            <CinematicReveal delay={0.05}>
              <h3 className="text-2xl font-semibold text-primary">Nuestra visión</h3>
              <p className="mt-5 max-w-[68ch] text-base leading-8 text-ink-soft sm:text-lg">{vision}</p>
            </CinematicReveal>
          </div>
          <Link href="/institucion" className="mt-12 inline-flex w-fit items-center gap-2 font-semibold text-primary hover:text-primary-dark">
            Conocer la institución <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="bg-surface px-4 pb-6 sm:px-6 sm:pb-8">
        <Reveal>
          <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[2rem] bg-primary-dark px-6 py-16 text-white shadow-[0_36px_80px_-46px_rgba(6,39,29,0.8)] sm:px-10 lg:px-16 lg:py-20">
            <div aria-hidden="true" className="contact-glow absolute inset-0" />
            <div className="relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
              <div>
                <h2 className="max-w-[12ch] text-[clamp(2.8rem,5vw,5.25rem)] font-semibold leading-[0.94] tracking-[-0.035em]">
                  Hablemos de tu futuro
                </h2>
                <p className="mt-6 flex max-w-2xl items-start gap-3 text-white/72">
                  <MapPin size={20} className="mt-1 shrink-0 text-accent-light" aria-hidden="true" />
                  {contacto.direccion}
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <div className="flex flex-wrap gap-3">
                  <Button href={contacto.telefonoHref} variant="secondary">
                    <Phone size={18} aria-hidden="true" /> Llamar
                  </Button>
                  <Button href={contacto.whatsappHref} variant="ghost" external>
                    <MessageCircle size={18} aria-hidden="true" /> WhatsApp
                  </Button>
                </div>
                <Link href="/contacto" className="text-sm font-semibold text-white/70 hover:text-white">
                  Ver todos los canales
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
