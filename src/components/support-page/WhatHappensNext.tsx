import Reveal from "@/components/motion/Reveal";

/**
 * Honest process explanation \u2014 no fabricated ticket numbers, SLAs,
 * or automated status. This is deliberately plain about what actually
 * happens today (a person reads it and responds).
 */
export default function WhatHappensNext() {
  return (
    <section className="bg-light py-16 lg:py-20">
      <Reveal className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <p className="font-mono text-xs text-muted">What happens next</p>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Your message reaches our team directly. There&rsquo;s no
          automated ticketing system yet, so replies come from a person
          who&rsquo;s read what you sent, not a bot.
        </p>
      </Reveal>
    </section>
  );
}
