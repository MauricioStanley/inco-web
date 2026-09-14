"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { CasoMatricula } from "@/content/matricula";
import { springSmooth, springSnappy } from "./motion/springs";

export default function RequisitosTabs({ casos }: { casos: CasoMatricula[] }) {
  const [activo, setActivo] = useState(casos[0].id);
  const caso = casos.find((c) => c.id === activo) ?? casos[0];
  const reduceMotion = useReducedMotion();

  return (
    <div>
      <div role="tablist" aria-label="Tipo de estudiante" className="flex flex-wrap gap-2 border-b border-border pb-2">
        {casos.map((c) => {
          const selected = c.id === activo;
          return (
            <motion.button
              key={c.id}
              role="tab"
              type="button"
              aria-selected={selected}
              onClick={() => setActivo(c.id)}
              whileTap={{ scale: 0.96 }}
              transition={springSnappy}
              className={`relative rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                selected ? "text-white" : "bg-surface-alt text-ink-soft hover:bg-primary/10"
              }`}
            >
              {selected && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 z-0 rounded-lg bg-primary shadow-button"
                  aria-hidden="true"
                  transition={reduceMotion ? { duration: 0 } : springSnappy}
                />
              )}
              <span className="relative z-10">{c.titulo}</span>
            </motion.button>
          );
        })}
      </div>

      <div role="tabpanel" className="mt-6 min-h-[220px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activo}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={springSmooth}
          >
            <h2 className="text-xl font-bold">{caso.titulo}</h2>
            <ul className="mt-4 space-y-2">
              {caso.requisitos.map((requisito) => (
                <li
                  key={requisito}
                  className="rounded-lg border border-border bg-surface-alt p-4 text-sm text-ink-soft transition-colors hover:border-primary/30"
                >
                  {requisito}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
