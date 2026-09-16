import type { ReactNode } from "react";
import HeroParallaxImage from "./HeroParallaxImage";

interface HeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  compact?: boolean;
  imageSrc?: string;
}

export default function Hero({ title, subtitle, children, compact = false, imageSrc }: HeroProps) {
  return (
    <section className={`relative isolate overflow-hidden bg-primary-dark text-white ${compact ? "min-h-[24rem]" : "min-h-[34rem]"}`}>
      {imageSrc && <HeroParallaxImage src={imageSrc} />}
      <div
        aria-hidden="true"
        className={`absolute inset-0 ${
          imageSrc
            ? "bg-gradient-to-r from-primary-dark via-primary-dark/88 to-primary-dark/28"
            : "bg-[radial-gradient(circle_at_78%_18%,rgba(198,160,70,0.18),transparent_26%),radial-gradient(circle_at_10%_100%,rgba(255,255,255,0.07),transparent_36%)]"
        }`}
      />
      <div aria-hidden="true" className="absolute -bottom-16 right-2 font-heading text-[clamp(9rem,24vw,21rem)] font-bold leading-none tracking-[-0.06em] text-white/[0.035]">
        INCO
      </div>

      <div className={`relative mx-auto flex max-w-content flex-col justify-end px-6 ${compact ? "min-h-[24rem] pb-16 pt-24" : "min-h-[34rem] pb-20 pt-28"}`}>
        <div className="animate-fade-in-up max-w-5xl">
          <h1 className="max-w-[16ch] text-[clamp(3.3rem,7vw,6rem)] font-semibold leading-[0.94] tracking-[-0.04em]">{title}</h1>
        </div>
        {subtitle && (
          <div className="animate-fade-in-up" style={{ animationDelay: "0.11s" }}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/72 sm:text-xl">{subtitle}</p>
          </div>
        )}
        {children && (
          <div className="animate-fade-in-up mt-8 flex flex-wrap gap-4" style={{ animationDelay: "0.2s" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
