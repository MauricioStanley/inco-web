"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { ProgramaAcademico } from "@/content/oferta-academica";
import { withBasePath } from "@/lib/basePath";

export default function AcademicShowcase({ programas }: { programas: ProgramaAcademico[] }) {
  const [activeSlug, setActiveSlug] = useState(programas[0]?.slug ?? "");
  const reduceMotion = useReducedMotion();
  const active = programas.find((programa) => programa.slug === activeSlug) ?? programas[0];

  if (!active) return null;

  return (
    <div className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-primary-dark shadow-[0_34px_80px_-42px_rgba(6,39,29,0.6)] sm:aspect-[5/4]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={active.slug}
              src={withBasePath(active.imagenSrc ?? "/inco-photos/banda-de-paz.jpg")}
              alt={active.imagenAlt}
              className="absolute inset-0 h-full w-full object-cover"
              initial={reduceMotion ? false : { opacity: 0, scale: 1.04, filter: "blur(7px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.985, filter: "blur(5px)" }}
              transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
            />
          </AnimatePresence>
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-primary-dark/55 via-transparent to-black/5" />
          <div className="absolute inset-x-4 bottom-4 rounded-[1.1rem] border border-white/20 bg-primary-dark/82 p-4 text-white shadow-[0_18px_40px_-24px_rgba(6,39,29,0.9)] backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-light">Duración y modalidad</p>
            <p className="mt-1.5 max-w-md text-sm font-semibold leading-relaxed sm:text-base">{active.duracion}</p>
          </div>
        </div>
      </div>

      <div className="divide-y divide-primary/14 border-y border-primary/14">
        {programas.map((programa) => {
          const isActive = programa.slug === active.slug;
          return (
            <Link
              key={programa.slug}
              href={`/oferta-academica/${programa.slug}`}
              onMouseEnter={() => setActiveSlug(programa.slug)}
              onFocus={() => setActiveSlug(programa.slug)}
              className="group grid gap-4 py-7 transition-colors hover:text-primary focus-visible:text-primary sm:grid-cols-[1fr_auto] sm:items-center sm:py-8"
            >
              <span>
                <span className={`block font-heading text-2xl font-semibold leading-tight transition-transform duration-300 sm:text-3xl ${isActive ? "translate-x-1 text-primary" : "text-ink"}`}>
                  {programa.nombre}
                </span>
                <span className={`mt-3 block max-w-xl text-sm leading-relaxed transition-colors sm:text-base ${isActive ? "text-ink-soft" : "text-ink-soft/80"}`}>
                  {programa.resumen}
                </span>
              </span>
              <span className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${isActive ? "border-primary bg-primary text-white" : "border-primary/20 text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-white"}`}>
                <ArrowRight size={18} aria-hidden="true" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
