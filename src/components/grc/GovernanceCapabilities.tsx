import Reveal from "@/components/motion/Reveal";
import { grcCapabilities } from "@/lib/site-data";

/**
 * Uses the site's row-directory pattern for the underlying list, but
 * with its own emphasis: a large mono numeral anchors each row (the
 * numbering given in the brief), rather than a small side-aligned tag
 * as on Page 04 \u2014 giving this page's "dossier" register a distinct
 * visual identity rather than a copy of the Infrastructure directory.
 */
export default function GovernanceCapabilities() {
  return (
    <section className="bg-light py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            What GEAA delivers
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 border-t border-ink/10 lg:mt-20">
          {grcCapabilities.map((cap) => (
            <div
              key={cap.number}
              className="flex flex-col gap-2 border-b border-ink/10 py-8 sm:flex-row sm:gap-10"
            >
              <span className="font-mono text-3xl text-ink/15 sm:w-20 sm:shrink-0 sm:text-4xl">
                {cap.number}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-ink sm:text-2xl">
                  {cap.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
