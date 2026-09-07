import Reveal from "@/components/motion/Reveal";

export default function OutcomeNotABox() {
  return (
    <section className="bg-navy py-24 text-white lg:py-32">
      <Reveal className="mx-auto max-w-3xl px-6 lg:px-10">
        <h2 className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.5rem]">
          Buying the hardware is the easy part.
        </h2>
        <p className="mt-8 text-base leading-relaxed text-white/60 sm:text-lg">
          Anyone can sell a laptop. The harder part is making sure it
          arrives configured, licensed, joined to the right systems, and
          working on the right desk — not sitting in a box waiting for
          someone to figure out the rest. That&rsquo;s the difference
          between procurement and deployment, and it&rsquo;s why GEAA does
          both.
        </p>
      </Reveal>
    </section>
  );
}
