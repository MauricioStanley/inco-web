import type { ReactNode } from "react";
import HeroParallaxImage from "./HeroParallaxImage";

interface HeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  compact?: boolean;
  /** Foto real del INCO como fondo, con parallax. Opcional — sin ella, el
   * Hero cae en el degradado verde plano de siempre. */
  imageSrc?: string;
}

/**
 * Server Component a propósito (sin "use client"/framer-motion en el H1): el
 * H1 es el contenido más importante de la página para SEO y para el usuario,
 * así que su entrada usa animación CSS pura vía @keyframes en Tailwind
 * config. Así el título nunca depende de que React hidrate — se ve aunque
 * el JS tarde o falle en cargar (crítico en conexiones lentas, ver Fase 9).
 * La foto de fondo (si existe) sí es un Client Component aparte
 * (`HeroParallaxImage`) para el parallax — es decorativa, puede esperar a
 * hidratar sin que el usuario pierda nada.
 * `prefers-reduced-motion` ya está cubierto globalmente en globals.css.
 */
export default function Hero({ title, subtitle, children, compact = false, imageSrc }: HeroProps) {
  return (
    <div
      className={`relative overflow-hidden bg-primary text-white ${compact ? "py-14 md:py-16" : "py-20 md:py-28"}`}
    >
      {imageSrc && (
        <>
          <HeroParallaxImage src={imageSrc} />
          {/* Vignette cinematográfico: oscurece hacia abajo para que el texto
              siempre sea legible sin importar qué haya en la foto ahí. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/75 to-primary/45"
          />
        </>
      )}

      {/* Malla de gradientes + forma decorativa: sustituye al blob plano mientras
          no tengamos el logo del león en vectorial. Puramente decorativo. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(242,183,5,0.22), transparent 45%), radial-gradient(circle at 85% 15%, rgba(255,255,255,0.10), transparent 40%), radial-gradient(circle at 75% 90%, rgba(15,61,38,0.55), transparent 55%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl md:h-96 md:w-96"
      />
      {!imageSrc && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      )}

      <div className="relative mx-auto flex max-w-content flex-col gap-6 px-6">
        <div className="animate-fade-in-up" style={{ animationDelay: "0.05s" }}>
          <h1 className="text-display max-w-3xl font-bold">{title}</h1>
        </div>
        {subtitle && (
          <div className="animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            <p className="max-w-2xl text-lg text-white/90 md:text-xl">{subtitle}</p>
          </div>
        )}
        {children && (
          <div className="animate-fade-in-up mt-2 flex flex-wrap gap-4" style={{ animationDelay: "0.25s" }}>
            {children}
          </div>
        )}
      </div>

      {!compact && (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-6 hidden flex-col items-center gap-2 text-white/70 md:flex"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">Descubre</span>
          <span className="h-8 w-px origin-top animate-scroll-cue bg-white/50" />
        </div>
      )}
    </div>
  );
}
