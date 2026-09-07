import Reveal from "@/components/motion/Reveal";
import { grcWorkshopTopics } from "@/lib/site-data";

export default function GovernanceWorkshops() {
  return (
    <section className="bg-light py-20 lg:py-28">
      <Reveal className="mx-auto max-w-3xl px-6 lg:px-10">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Governance has to be understood by the people operating the
          technology.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          Workshops are a practical part of how this works &mdash; sessions
          with the people actually responsible for technology, so
          governance isn&rsquo;t just written down somewhere, it&rsquo;s
          understood.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {grcWorkshopTopics.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-ink/15 px-4 py-1.5 text-sm text-ink/70"
            >
              {topic}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
