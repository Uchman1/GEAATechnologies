import Reveal from "@/components/motion/Reveal";

export default function WhyGovernanceMatters() {
  return (
    <section className="bg-navy py-24 text-white lg:py-32">
      <Reveal className="mx-auto max-w-3xl px-6 lg:px-10">
        <h2 className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.5rem]">
          Technology decisions become harder to manage when nobody owns the
          rules.
        </h2>
        <p className="mt-8 text-base leading-relaxed text-white/60 sm:text-lg">
          When nobody clearly owns a technology decision, familiar patterns
          tend to show up: policies that were never written down, access
          that was granted and never reviewed, software renewed out of
          habit rather than need, and a governance approach that lives in
          one person&rsquo;s head instead of anywhere the organisation can
          see it. None of this is dramatic on its own. It just makes
          technology harder to manage, one small gap at a time.
        </p>
      </Reveal>
    </section>
  );
}
