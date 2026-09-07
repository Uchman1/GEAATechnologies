type LayeredDiagramProps = {
  steps: { label: string; caption: string }[];
  theme?: "dark" | "light";
};

/**
 * Vertical layered/dependency diagram — always top-to-bottom, on any
 * viewport, since the content is a stack of layers rather than a
 * lateral process. Distinct from EcosystemFlow, which represents a
 * horizontal (desktop) chain of connected-but-parallel stages.
 */
export default function LayeredDiagram({ steps, theme = "light" }: LayeredDiagramProps) {
  const isDark = theme === "dark";

  return (
    <div className="mx-auto max-w-2xl">
      {steps.map((step, i) => (
        <div key={step.label} className="relative flex gap-6">
          <div className="flex flex-col items-center">
            <span
              className={`h-3 w-3 shrink-0 rounded-full ${
                i === 0 ? "bg-electric-cyan" : "bg-geaa-blue"
              }`}
            />
            {i < steps.length - 1 && (
              <span
                aria-hidden="true"
                className={`w-px flex-1 ${
                  isDark ? "bg-white/15" : "bg-ink/15"
                } animate-dash-y`}
                style={{
                  backgroundImage: `repeating-linear-gradient(to bottom, var(--color-geaa-blue) 0 6px, transparent 6px 16px)`,
                  minHeight: "3.5rem",
                }}
              />
            )}
          </div>
          <div className={`pb-10 ${i === steps.length - 1 ? "pb-0" : ""}`}>
            <h3
              className={`text-xl font-semibold sm:text-2xl ${
                isDark ? "text-white" : "text-ink"
              }`}
            >
              {step.label}
            </h3>
            <p
              className={`mt-1.5 max-w-md text-sm sm:text-base ${
                isDark ? "text-white/50" : "text-muted"
              }`}
            >
              {step.caption}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
