import Reveal from "@/components/motion/Reveal";
import RequirementOutcome from "@/components/procurement/RequirementOutcome";

export default function RequirementOutcomeSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            Specify. Source. Deploy.
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            A requirement doesn&rsquo;t arrive as a spec sheet. It arrives
            like this — and this is what it looks like once it&rsquo;s done.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-16 lg:mt-20">
          <RequirementOutcome />
        </Reveal>
      </div>
    </section>
  );
}
