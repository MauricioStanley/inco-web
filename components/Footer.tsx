import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { contacto } from "@/content/contacto";
import { identidad } from "@/content/institucion";

const columnas = [
  {
    titulo: "Institución",
    enlaces: [
      { href: "/institucion", label: "Quiénes somos" },
      { href: "/institucion/historia", label: "Historia" },
      { href: "/institucion/ubicacion", label: "Ubicación" },
      { href: "/recorrido-virtual", label: "Recorrido virtual 360°" },
    ],
  },
  {
    titulo: "Académico",
    enlaces: [
      { href: "/oferta-academica", label: "Oferta académica" },
      { href: "/matricula", label: "Proceso de matrícula" },
      { href: "/vida-estudiantil", label: "Vida estudiantil" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-dark text-white/90">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at 15% 0%, rgba(242,183,5,0.10), transparent 45%)",
        }}
      />
      <div className="relative mx-auto grid max-w-content gap-10 px-6 py-12 md:grid-cols-4">
        <div>
          <p className="font-heading text-lg font-bold text-white">{identidad.nombre}</p>
          <p className="mt-1 text-sm text-accent">{identidad.lema}</p>
          <p className="mt-4 flex items-start gap-2 text-sm">
            <MapPin size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
            {contacto.direccion}
          </p>
          <a href={contacto.telefonoHref} className="mt-2 flex items-center gap-2 text-sm hover:text-accent">
            <Phone size={18} aria-hidden="true" /> {contacto.telefono}
          </a>
        </div>

        {columnas.map((columna) => (
          <div key={columna.titulo}>
            <p className="font-heading font-semibold text-white">{columna.titulo}</p>
            <ul className="mt-3 space-y-2 text-sm">
              {columna.enlaces.map((enlace) => (
                <li key={enlace.href}>
                  <Link href={enlace.href} className="hover:text-accent hover:underline">
                    {enlace.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="font-heading font-semibold text-white">Síguenos</p>
          <div className="mt-3 flex gap-3">
            <a
              href={contacto.facebookHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook del INCO"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-ink hover:shadow-gold"
            >
              <Facebook size={18} aria-hidden="true" />
            </a>
            <a
              href={contacto.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram del INCO"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-ink hover:shadow-gold"
            >
              <Instagram size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {identidad.nombre}. Contenido institucional en proceso de verificación con la dirección del centro.
      </div>
    </footer>
  );
}
