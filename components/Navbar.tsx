"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { springSmooth, springSnappy } from "./motion/springs";
import { withBasePath } from "@/lib/basePath";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/institucion", label: "Institución" },
  { href: "/oferta-academica", label: "Oferta académica" },
  { href: "/vida-estudiantil", label: "Vida estudiantil" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`glass-nav sticky top-0 z-50 ${scrolled ? "is-scrolled" : ""}`}>
      <div className="mx-auto flex h-[4.75rem] max-w-[1440px] items-center justify-between px-6 sm:px-8 lg:px-10">
        <Link href="/" className="group flex items-center gap-3" aria-label="INCO, página de inicio">
          <span className="relative h-11 w-9 shrink-0 overflow-hidden" aria-hidden="true">
            <Image
              src={withBasePath("/inco-crest.png")}
              alt=""
              width={1180}
              height={1448}
              className="absolute -left-1 -top-2 h-auto w-[2.85rem] max-w-none mix-blend-multiply"
            />
          </span>
          <span className="font-heading text-[1.72rem] font-bold leading-none tracking-[-0.04em] text-primary-dark transition-colors group-hover:text-primary">
            INCO
          </span>
          <span aria-hidden="true" className="h-8 w-px bg-accent/70" />
          <span className="hidden max-w-[11rem] text-[10px] font-bold uppercase leading-[1.35] tracking-[0.16em] text-primary-dark/62 sm:block">
            Instituto Nacional<br />de Comercio
          </span>
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-1 lg:flex">
          <ul className="flex items-center gap-0.5">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`relative block rounded-full px-3 py-2 text-[13px] font-semibold transition-colors ${
                      active ? "text-primary-dark" : "text-primary-dark/66 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-4 -bottom-0.5 h-px bg-accent-dark"
                      aria-hidden="true"
                      transition={reduceMotion ? { duration: 0 } : springSnappy}
                    />
                  )}
                </li>
              );
            })}
          </ul>
          <Link
            href="/matricula"
            className={`ml-3 inline-flex min-h-10 items-center gap-2 rounded-full px-5 text-sm font-bold transition-all ${
              pathname.startsWith("/matricula")
                ? "bg-primary-dark text-white"
                : "bg-primary text-white shadow-button hover:-translate-y-0.5 hover:bg-primary-dark"
            }`}
          >
            Matrícula <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </nav>

        <motion.button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 text-primary-dark lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
          whileTap={{ scale: 0.92 }}
          transition={springSnappy}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              className="flex"
              initial={reduceMotion ? false : { opacity: 0, rotate: -32, scale: 0.85 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, rotate: 32, scale: 0.85 }}
              transition={springSnappy}
            >
              {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            key="mobile-menu"
            id="menu-movil"
            aria-label="Navegación móvil"
            className="overflow-hidden border-t border-primary/10 bg-surface shadow-[0_22px_55px_-34px_rgba(6,39,29,0.65)] lg:hidden"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={springSmooth}
          >
            <ul className="px-6 py-4">
              {links.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href} className="border-b border-primary/10 last:border-b-0">
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between py-4 text-lg font-semibold ${active ? "text-primary" : "text-primary-dark"}`}
                    >
                      {link.label}
                      {active && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent-dark" />}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-5">
                <Link href="/matricula" className="premium-button w-full" onClick={() => setOpen(false)}>
                  Ver proceso de matrícula <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
