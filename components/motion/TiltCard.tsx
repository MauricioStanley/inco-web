"use client";

import Link from "next/link";
import { motion, useMotionValue, useMotionTemplate, useSpring, useTransform } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";
import { springSmooth } from "./springs";

const MotionLink = motion.create(Link);

interface TiltCardProps {
  href: string;
  className?: string;
  children: ReactNode;
}

/**
 * Tarjeta con inclinación 3D que sigue el cursor (perspective + rotateX/Y)
 * más un brillo que se mueve con el mouse — el mismo lenguaje que usan los
 * showcases de producto de Apple. Solo reacciona a mouse real (pointerType
 * "mouse"): en touch se queda plana, así no hay ningún artefacto raro al
 * tocar en móvil. El giro vuelve al centro con spring al salir el cursor.
 */
export default function TiltCard({ href, className = "", children }: TiltCardProps) {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const springX = useSpring(px, { stiffness: 300, damping: 30, mass: 0.5 });
  const springY = useSpring(py, { stiffness: 300, damping: 30, mass: 0.5 });

  const rotateX = useTransform(springY, [0, 1], [2.5, -2.5]);
  const rotateY = useTransform(springX, [0, 1], [-2.5, 2.5]);
  const glareX = useTransform(springX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(springY, [0, 1], ["0%", "100%"]);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.24), transparent 48%)`;

  function handlePointerMove(e: PointerEvent<HTMLAnchorElement>) {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function handlePointerLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <MotionLink
      href={href}
      className={`group relative ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 1100 }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.985 }}
      transition={springSmooth}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glare }}
      />
    </MotionLink>
  );
}
