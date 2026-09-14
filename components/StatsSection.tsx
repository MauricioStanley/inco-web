"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import type { CifraInstitucional } from "@/content/stats";

function Cifra({ valor, sufijo, etiqueta }: CifraInstitucional) {
  const ref = useRef<HTMLDivElement>(null);
  const enVista = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!enVista) return;
    if (reduceMotion) {
      setDisplay(valor);
      return;
    }
    const duracion = 900;
    const inicio = performance.now();
    let frame: number;
    const tick = (ahora: number) => {
      const t = Math.min((ahora - inicio) / duracion, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * valor));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [enVista, reduceMotion, valor]);

  return (
    <div ref={ref} className="min-w-[140px] flex-1 px-6 text-center first:pl-0 last:pr-0 md:px-8">
      <p className="font-heading text-4xl font-semibold text-primary md:text-5xl">
        {display}
        {sufijo}
      </p>
      <p className="mt-2 text-sm text-ink-soft">{etiqueta}</p>
    </div>
  );
}

/**
 * No se renderiza con menos de 2 cifras: una sola cifra suelta no comunica
 * "el INCO en números", solo se ve como un dato huérfano. Ver `content/stats.ts`.
 * Líneas divisorias finas en vez de tarjetas — el tratamiento editorial que
 * se le pidió al proyecto, más cercano a una franja de cifras de revista
 * que a un grid de stat-cards genérico.
 */
export default function StatsSection({ cifras }: { cifras: CifraInstitucional[] }) {
  if (cifras.length < 2) return null;

  return (
    <div className="flex flex-wrap justify-center divide-x divide-border">
      {cifras.map((cifra) => (
        <Cifra key={cifra.etiqueta} {...cifra} />
      ))}
    </div>
  );
}
