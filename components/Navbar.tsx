"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { springSmooth, springSnappy } from "./motion/springs";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/institucion", label: "Institución" },
  { href: "/oferta-academica", label: "Oferta académica" },
  { href: "/matricula", label: "Matrícula" },
  { href: "/vida-estudiantil", label: "Vida estudiantil" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`glass-nav sticky top-0 z-50 border-b border-white/10 text-white ${scrolled ? "is-scrolled shadow-sm" : ""}`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="group flex items-center gap-3 font-heading text-lg font-bold"
          onClick={() => setOpen(false)}
        >
          <span
            role="img"
            aria-label="Escudo y león, mascota del Instituto Nacional de Comercio"
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-primary-dark text-accent transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3"
          >
            INCO
          </span>
          <span className="hidden sm:inline">Instituto Nacional de Comercio</span>
        </Link>

        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      active ? "text-white" : "text-white/85 hover:text-accent-light"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-accent"
                      aria-hidden="true"
                      transition={reduceMotion ? { duration: 0 } : springSnappy}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <motion.button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
          whileTap={{ scale: 0.9 }}
          transition={springSnappy}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              className="flex"
              initial={reduceMotion ? false : { opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, rotate: 45 }}
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
            className="overflow-hidden border-t border-white/10 lg:hidden"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={springSmooth}
          >
            <ul className="flex flex-col px-6 py-2">
              {links.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`block border-l-2 py-3 pl-3 text-base font-medium transition-colors ${
                        active ? "border-accent text-white" : "border-transparent text-white/85"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
