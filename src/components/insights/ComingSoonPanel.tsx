import Reveal from "@/components/motion/Reveal";

/**
 * Deliberately not styled as a populated article card (no fake
 * headline, author, date, or reading time) — this is an honest
 * "nothing published yet" state, not a mocked-up piece of content.
 */
export default function ComingSoonPanel() {
  return (
    <section className="bg-navy py-24 text-white lg:py-32">
      <Reveal className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <p className="font-mono text-xs text-white/40">First perspective piece</p>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          On its way.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
          GEAA Insights will cover infrastructure, security, Microsoft 365,
          networking, procurement and the everyday technology decisions
          organisations face — written by the team doing the work, with
          room for genuine project stories once we have them to tell.
        </p>
      </Reveal>
    </section>
  );
}
