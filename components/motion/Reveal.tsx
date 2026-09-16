"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { springSmooth } from "./springs";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** "up" desplaza desde abajo (por defecto); "none" solo hace fade. */
  direction?: "up" | "none";
}

export default function Reveal({ children, delay = 0, className, direction = "up" }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={{
        opacity: [0.78, 1],
        y: direction === "up" ? [16, 0] : 0,
        filter: ["blur(4px)", "blur(0px)"],
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ ...springSmooth, delay }}
    >
      {children}
    </motion.div>
  );
}
