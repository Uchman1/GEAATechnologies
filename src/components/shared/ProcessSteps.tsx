import Reveal from "@/components/motion/Reveal";
import type { LayerStep } from "@/lib/site-data";

type ProcessStepsProps = {
  title: string;
  steps: LayerStep[];
};

// Fixed lookup so Tailwind sees complete literal class names at build time.
const lgColsClass: Record<number, string> = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
};

/**
 * Large typographic engagement-flow statement: each step is a big
 * word-mark with a one-line caption, arranged in an even row on
 * desktop and stacked on mobile — separated by thin rules rather than
 * connector lines/pills, so it doesn't read as a generic numbered
 * timeline. Column count adapts to how many steps are passed in.
 */
export default function ProcessSteps({ title, steps }: ProcessStepsProps) {
  const desktopCols = lgColsClass[steps.length] ?? "lg:grid-cols-4";

  return (
    <section className="bg-navy-deep py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
        </Reveal>

        <Reveal
          delay={0.1}
          className={`mt-16 grid grid-cols-1 divide-y divide-white/10 border-t border-white/10 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:mt-20 ${desktopCols}`}
        >
          {steps.map((step, i) => (
            <div key={step.label} className="px-0 py-8 sm:px-8 sm:py-0 lg:px-8">
              <span className="font-mono text-xs text-electric-cyan">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{step.label}</h3>
              <p className="mt-3 max-w-[22ch] text-sm text-white/50 sm:text-base">
                {step.caption}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
