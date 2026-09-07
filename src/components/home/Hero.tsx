"use client";

import { motion, useReducedMotion } from "framer-motion";
import NetworkMotif from "@/components/graphics/NetworkMotif";
import { company } from "@/lib/site-data";

const headlineLines = ["Enterprise Technology", "That Moves Business Forward."];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 h-full w-full max-w-3xl text-white/80 opacity-70 md:opacity-100"
      >
        <NetworkMotif className="h-full w-full" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,181,226,0.16),transparent_45%)]"
      />

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6 pb-16 pt-20 lg:px-10">
        <div className="max-w-3xl">
          <h1 className="text-[13vw] font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            {headlineLines.map((line, i) => (
              <motion.span
                key={line}
                className="block"
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 32 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mt-8 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg"
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          >
            GEAA Technologies helps organisations acquire, deploy, secure,
            connect and support the technology infrastructure their
            businesses depend on.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.56, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#what-we-do"
              className="focus-ring rounded-full bg-white px-7 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-electric-cyan"
            >
              Explore Solutions
            </a>
            <a
              href="#contact"
              className="focus-ring rounded-full border border-white/25 px-7 py-3 text-sm font-medium text-white transition-colors hover:border-white/60"
            >
              Get a Quote
            </a>
          </motion.div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 font-mono text-[11px] text-white/40 lg:px-10">
          <span>{company.address.split(",").slice(1).join(",").trim()}</span>
          <span>Infrastructure across West Africa</span>
        </div>
      </div>
    </section>
  );
}
