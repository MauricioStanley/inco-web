"use client";

import type { PointerEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { contacto } from "@/content/contacto";
import { springSnappy } from "./motion/springs";

/**
 * Botón "magnético": se desplaza levemente hacia el cursor dentro de su
 * propia área, y vuelve al centro con spring al salir — el mismo micro-gesto
 * que usan los botones premium de Apple/Linear. Solo con mouse real.
 */
function MagneticWhatsApp({ href }: { href: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 14, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 14, mass: 0.4 });

  function handlePointerMove(e: PointerEvent<HTMLAnchorElement>) {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.35);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.35);
  }

  function handlePointerLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp al INCO"
      className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full border border-white/60 bg-[#25D366] text-white shadow-[0_16px_38px_-18px_rgba(6,39,29,0.75)]"
      style={{ x: springX, y: springY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      transition={springSnappy}
    >
      <MessageCircle size={24} aria-hidden="true" fill="white" strokeWidth={0} />
    </motion.a>
  );
}

function StaticWhatsApp({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp al INCO"
      className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full border border-white/60 bg-[#25D366] text-white shadow-[0_16px_38px_-18px_rgba(6,39,29,0.75)]"
    >
      <MessageCircle size={24} aria-hidden="true" fill="white" strokeWidth={0} />
    </a>
  );
}

export default function FloatingActions() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="fixed bottom-0 right-0 z-40 px-4 pb-4"
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      {reduceMotion ? <StaticWhatsApp href={contacto.whatsappHref} /> : <MagneticWhatsApp href={contacto.whatsappHref} />}
    </div>
  );
}
