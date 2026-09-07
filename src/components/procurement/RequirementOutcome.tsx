import { requirementOutcomePairs } from "@/lib/site-data";

/**
 * A typographic transformation, not a diagram: the same requirement
 * shown as it arrives (loose, informal) and as it ends up (specific,
 * resolved). No boxes, no arrows-as-steps, no icons — just two
 * columns of text and a single small pivot label between them.
 */
export default function RequirementOutcome() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-[1fr_auto_1fr] sm:gap-y-0">
        <p className="hidden font-mono text-xs uppercase tracking-wide text-muted sm:col-start-1 sm:block">
          The requirement
        </p>
        <span className="hidden sm:col-start-2 sm:block" />
        <p className="hidden font-mono text-xs uppercase tracking-wide text-ink sm:col-start-3 sm:block">
          The outcome
        </p>

        {requirementOutcomePairs.map((pair) => (
          <div key={pair.requirement} className="contents">
            <p className="border-t border-ink/10 py-6 text-lg italic text-muted sm:col-start-1 sm:text-xl">
              &ldquo;{pair.requirement}&rdquo;
            </p>
            <div className="flex items-center justify-center border-t border-ink/10 py-6 sm:col-start-2 sm:border-t-0">
              <span className="font-mono text-xs text-geaa-blue">becomes</span>
            </div>
            <p className="border-t border-ink/10 py-6 text-lg font-semibold text-ink sm:col-start-3 sm:text-xl">
              {pair.outcome}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
