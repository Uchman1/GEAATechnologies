import Reveal from "@/components/motion/Reveal";
import { grcApproachSteps } from "@/lib/site-data";

const indent: Record<number, string> = {
  0: "sm:ml-0",
  1: "sm:ml-10",
  2: "sm:ml-20",
  3: "sm:ml-32",
};

/**
 * A staggered, indented sequence \u2014 each stage sits further right
 * than the last, building on it \u2014 rather than the equal-width
 * horizontal row used by ProcessSteps (Infrastructure, Networking).
 * A different grammar for a page that isn't describing a fixed
 * methodology so much as an accumulating approach.
 */
export default function GovernanceApproach() {
  return (
    <section className="bg-navy py-24 text-white lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Reveal className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            How we approach the work
          </h2>
          <p className="mt-4 text-base text-white/50 sm:text-lg">
            This describes GEAA&rsquo;s general approach, not a fixed
            methodology every engagement follows exactly.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-16 space-y-8 border-t border-white/10 pt-10 lg:mt-20">
          {grcApproachSteps.map((step, i) => (
            <div
              key={step.number}
              className={`border-l-2 border-electric-cyan/40 pl-6 ${indent[i] ?? ""}`}
            >
              <span className="font-mono text-xs text-electric-cyan">{step.number}</span>
              <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{step.title}</h3>
              <p className="mt-2 max-w-md text-sm text-white/50 sm:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
