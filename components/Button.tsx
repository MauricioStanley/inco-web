"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { springSnappy } from "./motion/springs";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
}

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark hover:shadow-button",
  secondary: "bg-accent text-ink hover:bg-accent-dark hover:shadow-gold",
  ghost: "border border-white text-white hover:bg-white/10",
};

const MotionLink = motion.create(Link);

/**
 * El lift/press ya no es una transición CSS de duración fija: es un spring
 * (ver `motion/springs`) que responde en el pointerdown y arranca siempre
 * desde el valor visual actual, así se puede interrumpir a mitad de camino
 * sin saltos (principio de interrumpibilidad de Apple).
 */
export default function Button({ href, children, variant = "primary", external = false }: ButtonProps) {
  const className = `inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold transition-colors duration-200 ${variants[variant]}`;

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.97, y: 0 },
    transition: springSnappy,
  } as const;

  if (external) {
    return (
      <motion.a href={href} className={className} target="_blank" rel="noopener noreferrer" {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <MotionLink href={href} className={className} {...motionProps}>
      {children}
    </MotionLink>
  );
}
