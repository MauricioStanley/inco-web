"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { springSmooth } from "./springs";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  show: { opacity: [0.78, 1], y: [14, 0], transition: springSmooth },
};

/** Envuelve un grid de tarjetas para que entren en cascada al hacer scroll, en vez de aparecer todas de golpe. */
export function StaggerGrid({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={container}
      initial={false}
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
