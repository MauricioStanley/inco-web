"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { withBasePath } from "@/lib/basePath";

export default function BandStory() {
  const root = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: root, offset: ["start end", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, reduceMotion ? 1.08 : 1]);
  const imageX = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : -22, reduceMotion ? 0 : 18]);
  const reveal = useTransform(scrollYProgress, [0.04, 0.38], [reduceMotion ? "inset(0 0 0 0)" : "inset(0 16% 0 0)", "inset(0 0 0 0)"]);

  return (
    <section id="identidad" ref={root} className="relative overflow-hidden bg-primary-dark text-white">
      <motion.div className="absolute inset-0 overflow-hidden" style={{ clipPath: reveal }}>
        <motion.img
          src={withBasePath("/inco-photos/banda-de-paz.jpg")}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[64%_center]"
          style={{ scale: imageScale, x: imageX }}
        />
      </motion.div>
      <div aria-hidden="true" className="absolute inset-0 bg-primary-dark/46" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/92 to-primary-dark/12 lg:via-primary-dark/76 lg:to-transparent" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary-dark/58 to-transparent" />

      <div className="relative mx-auto flex min-h-[38rem] max-w-[1440px] items-center">
        <div className="relative z-10 flex max-w-xl flex-col justify-center px-6 py-20 sm:px-10 lg:px-14 xl:px-20">
          <h2 className="max-w-[9ch] text-[clamp(3rem,5vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.035em]">
            Disciplina que deja huella
          </h2>
          <p className="mt-7 max-w-md text-base leading-relaxed text-white/72 sm:text-lg">
            La Banda de Paz es una expresión viva del talento, la constancia y el sentido de pertenencia que se forman dentro del INCO.
          </p>
          <Link href="/vida-estudiantil/banda-de-paz" className="mt-8 inline-flex w-fit items-center gap-2 font-semibold text-accent-light hover:text-white">
            Conocer la Banda de Paz <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
          <div className="mt-14 flex gap-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/78">
            <span>Disciplina</span><span>Talento</span><span>Comunidad</span>
          </div>
        </div>
      </div>
    </section>
  );
}
