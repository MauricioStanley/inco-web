"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { springSmooth } from "./springs";

/**
 * Revelado "cinematográfico": escala desde 0.94 y entra de un desenfoque a
 * foco nítido, en vez de solo desvanecer. Se reserva para momentos de peso
 * (aperturas de sección), no para uso masivo — igual que en cine, el efecto
 * de "enfoque" solo funciona si es un recurso escaso.
 */
export default function CinematicReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.94, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ ...springSmooth, delay }}
    >
      {children}
    </motion.div>
  );
}
