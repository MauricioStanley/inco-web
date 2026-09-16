import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { contacto } from "@/content/contacto";
import { identidad } from "@/content/institucion";

const enlaces = [
  { href: "/institucion", label: "Institución" },
  { href: "/oferta-academica", label: "Oferta académica" },
  { href: "/matricula", label: "Matrícula" },
  { href: "/vida-estudiantil", label: "Vida estudiantil" },
  { href: "/recorrido-virtual", label: "Recorrido virtual 360°" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#041f17] text-white">
      <div aria-hidden="true" className="absolute -bottom-16 -left-3 font-heading text-[clamp(10rem,28vw,28rem)] font-bold leading-none tracking-[-0.06em] text-white/[0.025]">
        INCO
      </div>
      <div className="relative mx-auto max-w-content px-6 py-16 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-24">
          <div>
            <p className="font-heading text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
              {identidad.siglas}
            </p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-light">{identidad.lema}</p>
            <p className="mt-8 flex max-w-lg items-start gap-3 text-sm leading-relaxed text-white/66 sm:text-base">
              <MapPin size={19} className="mt-1 shrink-0 text-accent-light" aria-hidden="true" />
              {contacto.direccion}
            </p>
            <a href={contacto.telefonoHref} className="mt-4 inline-flex items-center gap-3 text-sm font-semibold text-white/78 hover:text-white sm:text-base">
              <Phone size={18} className="text-accent-light" aria-hidden="true" /> {contacto.telefono}
            </a>
          </div>

          <div className="grid gap-10 sm:grid-cols-[1fr_auto]">
            <nav aria-label="Enlaces del pie de página">
              <ul className="space-y-3">
                {enlaces.map((enlace) => (
                  <li key={enlace.href}>
                    <Link href={enlace.href} className="group inline-flex items-center gap-2 text-sm font-semibold text-white/66 hover:text-white">
                      {enlace.label}
                      <ArrowUpRight size={14} aria-hidden="true" className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/72">Síguenos</p>
              <div className="mt-4 flex gap-3">
                <a
                  href={contacto.facebookHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook del INCO"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/14 text-white/74 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-accent hover:text-primary-dark"
                >
                  <Facebook size={18} aria-hidden="true" />
                </a>
                <a
                  href={contacto.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram del INCO"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/14 text-white/74 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-accent hover:text-primary-dark"
                >
                  <Instagram size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {identidad.nombre}.</p>
          <p>Contenido institucional en proceso de verificación con la dirección del centro.</p>
        </div>
      </div>
    </footer>
  );
}
