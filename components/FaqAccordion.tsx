"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/content/matricula";
import { springSmooth, springSnappy } from "./motion/springs";

/**
 * Antes esto era <details>/<summary> nativo: el navegador abre el contenido
 * de golpe, sin animación de altura, y la rotación del chevron era la única
 * transición real. Con spring, el panel crece/se encoge con física en vez
 * de saltar, y el chevron gira en el mismo frame que el contenido.
 */
export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const open = openIndex === index;
        return (
          <div key={faq.pregunta} className="overflow-hidden rounded-lg border border-border bg-surface-alt">
            <motion.button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
              whileTap={{ scale: 0.995 }}
              transition={springSnappy}
              className="flex w-full items-center justify-between gap-4 p-4 text-left font-semibold text-ink"
            >
              {faq.pregunta}
              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={reduceMotion ? { duration: 0 } : springSnappy}
                className="shrink-0"
              >
                <ChevronDown size={18} aria-hidden="true" />
              </motion.span>
            </motion.button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={springSmooth}
                  className="overflow-hidden"
                >
                  <p className="px-4 pb-4 text-sm text-ink-soft">{faq.respuesta}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
