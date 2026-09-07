import Reveal from "@/components/motion/Reveal";

/**
 * Deliberately not a diagram \u2014 no boxes, no dots, no vertical stack
 * (that's Cloud & Microsoft 365's device). Just one oversized line of
 * type, arrows as plain characters, reinforced by a short paragraph.
 */
export default function TrainingMeetsTechnology() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
            People &rarr; Systems &rarr; Workflows &rarr; Practices
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Training is most useful when it&rsquo;s connected to the
            systems and processes people actually encounter &mdash; the
            cloud platforms, productivity systems, security practices and
            business workflows already in use, not a generic curriculum.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
