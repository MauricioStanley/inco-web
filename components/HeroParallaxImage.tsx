"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Capa de foto del Hero con parallax: se desplaza más lento que el scroll
 * (profundidad, no solo decoración). El H1 vive fuera de este componente
 * (en Hero.tsx, como Server Component) para que el título nunca dependa de
 * que esto hidrate — si el JS tarda, la foto se queda quieta pero visible,
 * el texto ya está ahí.
 */
export default function HeroParallaxImage({ src, alt = "" }: { src: string; alt?: string }) {
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();
  const y = useTransform(scrollY, [0, 800], [0, reduceMotion ? 0 : 160]);

  return (
    <motion.img
      src={src}
      alt={alt}
      style={{ y }}
      className="absolute inset-0 h-full w-full scale-110 object-cover object-center"
    />
  );
}
