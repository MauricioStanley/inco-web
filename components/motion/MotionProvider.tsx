"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * `reducedMotion="user"` hace que TODA animación de framer-motion (whileHover,
 * whileTap, layout springs, etc.) respete `prefers-reduced-motion` del SO por
 * defecto, sin tener que comprobarlo a mano en cada componente nuevo.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
