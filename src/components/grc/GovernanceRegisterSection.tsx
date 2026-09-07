import Reveal from "@/components/motion/Reveal";
import GovernanceRegister from "@/components/grc/GovernanceRegister";

export default function GovernanceRegisterSection() {
  return (
    <section className="bg-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            Every technology decision can be recorded this way
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            Not as paperwork for its own sake &mdash; as a way of making sure a
            decision has an owner, a known risk, a control, and a point
            where it gets reviewed again.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 lg:mt-16">
          <GovernanceRegister />
        </Reveal>
      </div>
    </section>
  );
}
