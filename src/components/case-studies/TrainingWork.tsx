import Reveal from "@/components/motion/Reveal";
import { trainingWork } from "@/lib/site-data";

export default function TrainingWork() {
  return (
    <section className="bg-light py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">
            Training &amp; capability
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            Practical technology training GEAA has delivered alongside its
            infrastructure and governance work.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 space-y-6 border-t border-ink/10 pt-8">
          {trainingWork.map((entry) => (
            <div key={entry.client} className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-8">
              <span className="font-mono text-xs text-muted sm:w-48 sm:shrink-0">
                {entry.client}
              </span>
              <p className="text-base text-ink/80">{entry.areas.join(", ")}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
