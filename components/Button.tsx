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
  primary: "bg-primary text-white shadow-button hover:bg-primary-dark hover:shadow-[0_18px_36px_-18px_rgba(6,39,29,0.8)]",
  secondary: "bg-accent text-primary-dark shadow-gold hover:bg-accent-light",
  ghost: "border border-white/32 bg-white/[0.04] text-white backdrop-blur-md hover:border-white/55 hover:bg-white/10",
};

const MotionLink = motion.create(Link);

/**
 * El lift/press ya no es una transición CSS de duración fija: es un spring
 * (ver `motion/springs`) que responde en el pointerdown y arranca siempre
 * desde el valor visual actual, así se puede interrumpir a mitad de camino
 * sin saltos (principio de interrumpibilidad de Apple).
 */
export default function Button({ href, children, variant = "primary", external = false }: ButtonProps) {
  const className = `inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-[background-color,border-color,box-shadow] duration-300 ${variants[variant]}`;

  const motionProps = {
    whileHover: { y: -2, scale: 1.01 },
    whileTap: { scale: 0.975, y: 0 },
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
