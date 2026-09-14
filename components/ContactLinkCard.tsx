"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { springSmooth } from "./motion/springs";

interface ContactLinkCardProps {
  href: string;
  external?: boolean;
  icon: ReactNode;
  title: string;
  subtitle: string;
}

export default function ContactLinkCard({ href, external = false, icon, title, subtitle }: ContactLinkCardProps) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-3 rounded-xl border border-border bg-surface-alt p-4 transition-colors hover:border-primary"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.985 }}
      transition={springSmooth}
    >
      {icon}
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-ink-soft">{subtitle}</p>
      </div>
    </motion.a>
  );
}
