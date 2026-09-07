import { learningStages } from "@/lib/site-data";

// Progressive indent, size and weight per stage \u2014 the "path" is
// created by the composition growing as it goes, not by drawn
// connector lines, dots, or equal-sized boxes. Deliberately avoids
// every other page's diagram grammar (no stack, no nested frames, no
// node graph, no register table).
const stageStyle: { indent: string; size: string; opacity: string }[] = [
  { indent: "sm:ml-0", size: "text-2xl sm:text-3xl", opacity: "text-white/55" },
  { indent: "sm:ml-10", size: "text-3xl sm:text-4xl", opacity: "text-white/70" },
  { indent: "sm:ml-20", size: "text-4xl sm:text-5xl", opacity: "text-white/85" },
  { indent: "sm:ml-32", size: "text-4xl sm:text-6xl", opacity: "text-electric-cyan" },
];

export default function LearningPath() {
  return (
    <div className="space-y-10 sm:space-y-8">
      {learningStages.map((stage, i) => {
        const style = stageStyle[i] ?? stageStyle[0];
        return (
          <div key={stage.number} className={style.indent}>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="font-mono text-xs text-white/30">{stage.number}</span>
              <h3 className={`font-bold ${style.size} ${style.opacity}`}>{stage.title}</h3>
            </div>
            <p className="mt-2 max-w-md text-sm text-white/50 sm:text-base">
              {stage.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
