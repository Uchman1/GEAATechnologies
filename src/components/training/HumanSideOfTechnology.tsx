import Reveal from "@/components/motion/Reveal";
import { trainingScenarios } from "@/lib/site-data";

export default function HumanSideOfTechnology() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Reveal className="mx-auto max-w-3xl px-6 lg:px-10">
        <h2 className="text-3xl font-bold text-ink sm:text-4xl">
          New technology creates a new learning curve.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
          An organisation can roll out new software, a new system, or a new
          security practice, and still find that the people using it every
          day need practical help understanding what actually changed for
          them. That gap is where training does its work.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {trainingScenarios.map((scenario) => (
            <span
              key={scenario}
              className="rounded-full border border-ink/15 px-4 py-1.5 text-sm text-ink/70"
            >
              {scenario}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
