"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, RotateCcw } from "lucide-react";
import { quizPreguntas } from "@/content/quiz";
import { programasAcademicos, type ProgramaAcademico } from "@/content/oferta-academica";
import PlaceholderImage from "./PlaceholderImage";
import { springSmooth, springSnappy } from "./motion/springs";

type Puntajes = Partial<Record<ProgramaAcademico["slug"], number>>;

function calcularResultado(puntajes: Puntajes): ProgramaAcademico {
  let mejor: ProgramaAcademico = programasAcademicos[0];
  let mejorPuntaje = -1;
  for (const programa of programasAcademicos) {
    const puntaje = puntajes[programa.slug] ?? 0;
    if (puntaje > mejorPuntaje) {
      mejorPuntaje = puntaje;
      mejor = programa;
    }
  }
  return mejor;
}

export default function ProgramQuiz() {
  const [paso, setPaso] = useState(0);
  const [puntajes, setPuntajes] = useState<Puntajes>({});
  const reduceMotion = useReducedMotion();

  const total = quizPreguntas.length;
  const terminado = paso >= total;
  const resultado = terminado ? calcularResultado(puntajes) : null;

  function responder(slug: ProgramaAcademico["slug"] | null, peso = 1) {
    if (slug) {
      setPuntajes((prev) => ({ ...prev, [slug]: (prev[slug] ?? 0) + peso }));
    }
    setPaso((p) => p + 1);
  }

  function reiniciar() {
    setPaso(0);
    setPuntajes({});
  }

  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-border bg-surface-alt p-6 shadow-card md:p-8">
      {!terminado && (
        <div className="mb-6 flex items-center gap-2" aria-hidden="true">
          {quizPreguntas.map((_, index) => (
            <span
              key={index}
              className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                index <= paso ? "bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        {!terminado ? (
          <motion.div
            key={paso}
            initial={reduceMotion ? false : { opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, x: -16 }}
            transition={springSmooth}
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
              Pregunta {paso + 1} de {total}
            </p>
            <h3 className="mt-2 text-xl font-bold">{quizPreguntas[paso].pregunta}</h3>
            <div className="mt-5 flex flex-col gap-3">
              {quizPreguntas[paso].opciones.map((opcion) => (
                <motion.button
                  key={opcion.texto}
                  type="button"
                  onClick={() => responder(opcion.puntosPara, opcion.peso ?? 1)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.985 }}
                  transition={springSnappy}
                  className="rounded-xl border border-border bg-surface px-5 py-4 text-left text-sm font-medium text-ink transition-colors hover:border-primary hover:bg-primary/10"
                >
                  {opcion.texto}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="resultado"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springSmooth}
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">Tu resultado</p>
            <h3 className="mt-2 text-2xl font-bold">{resultado!.nombre}</h3>
            <p className="mt-2 text-sm text-ink-soft">{resultado!.resumen}</p>

            <div className="mt-5">
              <PlaceholderImage alt={resultado!.imagenAlt} src={resultado!.imagenSrc} ratio="wide" />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href={`/oferta-academica/${resultado!.slug}`}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Ver programa completo
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <button
                type="button"
                onClick={reiniciar}
                className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-ink-soft hover:text-primary"
              >
                <RotateCcw size={16} aria-hidden="true" />
                Volver a intentar
              </button>
            </div>

            <p className="mt-5 text-xs text-ink-faint">
              Esta es una recomendación orientativa según tus gustos, no una evaluación oficial de aptitudes.
              Puedes revisar los 5 programas completos en{" "}
              <Link href="/oferta-academica" className="underline hover:text-primary">
                Oferta académica
              </Link>
              .
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
