import { grcRegisterFields } from "@/lib/site-data";

/**
 * A governance record, not a flowchart: each field sits beneath the
 * last inside a single bordered "form," connected by a plain rule
 * rather than dots or arrows. Content is explicitly illustrative \u2014
 * a template of what a governance record looks like, not real
 * client or organisational data.
 */
export default function GovernanceRegister() {
  return (
    <div className="mx-auto max-w-2xl border border-ink/15 bg-white">
      <div className="flex items-center justify-between border-b border-ink/15 px-6 py-4">
        <span className="font-mono text-xs text-muted">Governance record</span>
        <span className="font-mono text-xs text-muted">Illustrative example</span>
      </div>

      <div className="px-6">
        {grcRegisterFields.map((field, i) => (
          <div
            key={field.label}
            className={`flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-8 ${
              i < grcRegisterFields.length - 1 ? "border-b border-ink/10" : ""
            }`}
          >
            <span className="font-mono text-xs text-geaa-blue sm:w-48 sm:shrink-0">
              {field.label}
            </span>
            <p className="text-base text-ink/80">{field.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
