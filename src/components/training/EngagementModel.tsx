import Reveal from "@/components/motion/Reveal";
import { trainingEngagementModel } from "@/lib/site-data";

/**
 * A flowing prose list \u2014 no numerals as visual anchors, no
 * indent-staircase, no equal-width row. The bolded lead word does
 * the work a number would elsewhere, keeping this restrained and
 * human rather than another process diagram.
 */
export default function EngagementModel() {
  return (
    <section className="bg-navy py-24 text-white lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">
            How a training engagement can work
          </h2>
          <p className="mt-4 text-base text-white/50 sm:text-lg">
            A general approach, not a fixed methodology every engagement
            follows exactly.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 space-y-6 lg:mt-16">
          {trainingEngagementModel.map((stage) => (
            <p key={stage.title} className="text-lg leading-relaxed text-white/70 sm:text-xl">
              <span className="font-semibold text-white">{stage.title}.</span>{" "}
              {stage.description}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
