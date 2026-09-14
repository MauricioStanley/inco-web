"use client";

import { motion, useReducedMotion } from "framer-motion";
import { springSmooth } from "./motion/springs";

/** No se renderiza sin `src` real — ver `content/institucion.ts`. */
export default function WelcomeVideo({ src, poster }: { src: string | null; poster?: string }) {
  const reduceMotion = useReducedMotion();
  if (!src) return null;

  return (
    <motion.div
      className="mx-auto max-w-3xl overflow-hidden rounded-2xl shadow-card-hover"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={springSmooth}
    >
      <video
        src={src}
        poster={poster}
        controls
        preload="metadata"
        className="aspect-video w-full bg-ink"
      >
        Tu navegador no puede reproducir este video.
      </video>
    </motion.div>
  );
}
