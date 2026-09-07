"use client";

import { motion, useReducedMotion } from "framer-motion";
import NetworkMotif from "@/components/graphics/NetworkMotif";

type HeroCta = {
  label: string;
  href: string;
  variant?: "primary" | "outline";
};

type PageHeroProps = {
  headlineLines: string[];
  supporting: string;
  ctas?: HeroCta[];
  readoutLeft?: string;
  readoutRight?: string;
};

/**
 * Shared hero for interior pages (About, Solutions, service pages, etc).
 * Calmer than the homepage hero — shorter, no dual-accent glow — but keeps
 * the same typographic voice and network motif for continuity across the site.
 */
export default function PageHero({
  headlineLines,
  supporting,
  ctas = [],
  readoutLeft,
  readoutRight,
}: PageHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-full w-full max-w-2xl text-white/60 opacity-40 md:opacity-60"
      >
        <NetworkMotif className="h-full w-full" />
      </div>

      <div className="relative mx-auto flex min-h-[56vh] max-w-7xl flex-col justify-center px-6 pb-14 pt-24 lg:px-10">
        <div className="max-w-2xl">
          <h1 className="text-[10vw] font-extrabold leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl">
            {headlineLines.map((line, i) => (
              <motion.span
                key={line}
                className="block"
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mt-7 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg"
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1 + headlineLines.length * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {supporting}
          </motion.p>

          {ctas.length > 0 && (
            <motion.div
              className="mt-9 flex flex-wrap items-center gap-4"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2 + headlineLines.length * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {ctas.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  className={
                    cta.variant === "outline"
                      ? "focus-ring rounded-full border border-white/25 px-7 py-3 text-sm font-medium text-white transition-colors hover:border-white/60"
                      : "focus-ring rounded-full bg-white px-7 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-electric-cyan"
                  }
                >
                  {cta.label}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {(readoutLeft || readoutRight) && (
        <div className="relative border-t border-white/10">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 font-mono text-[11px] text-white/40 lg:px-10">
            <span>{readoutLeft}</span>
            <span>{readoutRight}</span>
          </div>
        </div>
      )}
    </section>
  );
}
