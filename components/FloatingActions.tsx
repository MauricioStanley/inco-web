"use client";

import { useEffect, useState } from "react";
import type { PointerEvent } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { MessageCircle, GraduationCap } from "lucide-react";
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
      className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
      style={{ x: springX, y: springY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      transition={springSnappy}
    >
      <MessageCircle size={26} aria-hidden="true" fill="white" strokeWidth={0} />
    </motion.a>
  );
}

/**
 * Acciones flotantes persistentes: WhatsApp (siempre visible — es el canal
 * que la gente realmente usa en El Salvador) y un CTA de "Matricúlate" que
 * aparece solo después de hacer scroll más allá del Hero, para no competir
 * con los botones que el Hero ya muestra al cargar la página. Se oculta en
 * /matricula/* porque ahí el CTA ya es redundante con el contenido.
 */
export default function FloatingActions() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const enMatricula = pathname.startsWith("/matricula");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex flex-col items-end gap-3 px-4 pb-4"
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <AnimatePresence>
        {scrolled && !enMatricula && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={springSnappy}
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={springSnappy}>
              <Link
                href="/matricula"
                className="flex min-h-[44px] items-center gap-2 rounded-full bg-primary pl-4 pr-5 py-2.5 text-sm font-semibold text-white shadow-button"
              >
                <GraduationCap size={18} aria-hidden="true" />
                Matricúlate
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <MagneticWhatsApp href={contacto.whatsappHref} />
    </div>
  );
}
