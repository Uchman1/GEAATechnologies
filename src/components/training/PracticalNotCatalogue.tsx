import Reveal from "@/components/motion/Reveal";

export default function PracticalNotCatalogue() {
  return (
    <section className="bg-light py-24 lg:py-32">
      <Reveal className="mx-auto max-w-3xl px-6 lg:px-10">
        <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[2.5rem]">
          Train around the work.
          <br />
          Not around a catalogue.
        </h2>
        <p className="mt-8 text-base leading-relaxed text-muted sm:text-lg">
          Training is shaped around the systems, workflows and needs of the
          organisation it&rsquo;s for, rather than a fixed set of course
          modules. The point isn&rsquo;t that there&rsquo;s no structure
          behind it &mdash; it&rsquo;s that the structure follows the
          organisation, not a public curriculum.
        </p>
      </Reveal>
    </section>
  );
}
