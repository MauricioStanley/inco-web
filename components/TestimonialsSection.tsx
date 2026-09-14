"use client";

import Link from "next/link";
import { Quote } from "lucide-react";
import { StaggerGrid, StaggerItem } from "./motion/StaggerGrid";
import { programasAcademicos } from "@/content/oferta-academica";
import type { Testimonio } from "@/content/testimonios";

/** No se renderiza si no hay testimonios reales y autorizados — ver `content/testimonios.ts`. */
export default function TestimonialsSection({ testimonios }: { testimonios: Testimonio[] }) {
  if (testimonios.length === 0) return null;

  return (
    <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {testimonios.map((t) => {
        const programa = programasAcademicos.find((p) => p.slug === t.programaSlug);
        return (
          <StaggerItem key={t.nombre} className="h-full">
            <figure className="flex h-full flex-col gap-4 rounded-xl border border-border bg-surface-alt p-6 shadow-card">
              <Quote size={22} className="text-accent-dark" aria-hidden="true" />
              <blockquote className="flex-1 text-sm text-ink-soft">“{t.cita}”</blockquote>
              <figcaption className="text-sm">
                <span className="font-semibold text-ink">{t.nombre}</span>
                {programa && (
                  <>
                    {" — "}
                    <Link href={`/oferta-academica/${programa.slug}`} className="text-primary hover:underline">
                      {programa.nombre}
                    </Link>
                  </>
                )}
              </figcaption>
            </figure>
          </StaggerItem>
        );
      })}
    </StaggerGrid>
  );
}
