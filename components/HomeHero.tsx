"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, type PointerEvent } from "react";
import { withBasePath } from "@/lib/basePath";

export default function HomeHero() {
  const root = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const lensX = useSpring(pointerX, { stiffness: 90, damping: 20, mass: 0.8 });
  const lensY = useSpring(pointerY, { stiffness: 90, damping: 20, mass: 0.8 });
  const { scrollYProgress } = useScroll({ target: root, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 110]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.035, reduceMotion ? 1.035 : 1.11]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 34]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.72], [1, reduceMotion ? 1 : 0.42]);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse" || reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 14);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 10);
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <section
      ref={root}
      aria-labelledby="home-title"
      className="relative isolate min-h-[calc(88dvh-4.75rem)] overflow-hidden bg-surface"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div aria-hidden="true" className="hero-ambient absolute inset-0" />
      <div className="relative mx-auto grid min-h-[calc(88dvh-4.75rem)] max-w-[1440px] lg:grid-cols-[52%_48%]">
        <motion.div
          className="relative z-20 flex flex-col justify-center px-6 pb-14 pt-16 sm:px-10 lg:justify-start lg:px-14 lg:pb-16 lg:pt-20 xl:px-20"
          style={{ y: copyY, opacity: copyOpacity }}
        >
          <h1
            id="home-title"
            className="max-w-[9ch] text-[clamp(3.7rem,7.6vw,7rem)] font-semibold leading-[0.88] tracking-[-0.04em] text-primary-dark"
          >
            Cuna de <span className="text-primary">campeones</span>
          </h1>
          <p className="mt-8 max-w-[34rem] text-lg leading-relaxed text-ink-soft sm:text-xl">
            Formación técnica, carácter y futuro en una comunidad que aprende haciendo.
          </p>

          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link href="/oferta-academica" className="premium-button group">
              Explorar la oferta
              <ArrowRight aria-hidden="true" size={19} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link href="/matricula" className="text-link group">
              Proceso de matrícula
              <span aria-hidden="true" className="text-link-line" />
            </Link>
          </div>

          <div className="mt-12 flex max-w-xl flex-wrap gap-x-7 gap-y-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary-dark/80">
            <span>Formación técnica</span>
            <span aria-hidden="true" className="text-accent-dark">•</span>
            <span>Bachillerato general</span>
            <span aria-hidden="true" className="text-accent-dark">•</span>
            <span>Modalidades flexibles</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-lens relative min-h-[58svh] overflow-hidden lg:min-h-0"
          style={{ x: lensX, y: lensY }}
        >
          <motion.img
            src={withBasePath("/inco-photos/desarrollo-de-software.jpg")}
            alt="Estudiante de Desarrollo de Software del INCO trabajando en un proyecto"
            className="absolute inset-0 h-full w-full object-cover object-center lg:object-[48%_48%]"
            style={{ y: imageY, scale: imageScale }}
            fetchPriority="high"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/5" />
          <div aria-hidden="true" className="absolute inset-y-0 left-0 hidden w-40 bg-gradient-to-r from-surface to-transparent lg:block" />

          <motion.div
            className="absolute bottom-7 left-6 right-6 flex items-center justify-between gap-4 rounded-[1.1rem] border border-white/35 bg-primary-dark/76 px-5 py-4 text-white shadow-[0_22px_60px_-30px_rgba(6,39,29,0.85)] backdrop-blur-xl sm:left-auto sm:right-8 sm:w-[21rem] lg:bottom-14"
            initial={reduceMotion ? false : { opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>
              <span className="block text-xs uppercase tracking-[0.16em] text-white/82">Programa técnico</span>
              <span className="mt-1 block font-semibold">Desarrollo de Software</span>
            </span>
            <span className="shrink-0 text-sm text-accent-light">3 años</span>
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#identidad"
        className="absolute bottom-5 left-1/2 z-30 hidden -translate-x-1/2 items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)] lg:flex"
      >
        Conoce el INCO <ArrowDown aria-hidden="true" size={15} />
      </a>
    </section>
  );
}
