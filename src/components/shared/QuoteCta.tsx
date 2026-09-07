import Reveal from "@/components/motion/Reveal";

type QuoteCtaProps = {
  quote: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

/**
 * A closing statement styled as a pull-quote rather than a plain
 * headline — for pages that want a strong editorial close without
 * attributing it to an invented person (no fake testimonials).
 */
export default function QuoteCta({
  quote,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: QuoteCtaProps) {
  return (
    <section className="bg-navy-deep py-28 text-white lg:py-36">
      <Reveal className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <span aria-hidden="true" className="text-5xl text-electric-cyan/70">
          &ldquo;
        </span>
        <p className="mt-2 text-2xl font-medium leading-snug tracking-tight sm:text-4xl">
          {quote}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={primaryHref}
            className="focus-ring rounded-full bg-electric-cyan px-8 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-white"
          >
            {primaryLabel}
          </a>
          <a
            href={secondaryHref}
            className="focus-ring rounded-full border border-white/25 px-8 py-3 text-sm font-medium text-white transition-colors hover:border-white/60"
          >
            {secondaryLabel}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
