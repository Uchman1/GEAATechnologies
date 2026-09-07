import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { grcEstateRelations } from "@/lib/site-data";

/**
 * A plain typographic quadrant \u2014 no icons, no tiles, no watermark
 * graphics. Deliberately quieter than the Solutions/Devices grids,
 * since these are illustrative relationships, not a claim that every
 * GRC engagement includes all four.
 *
 * Borders are computed explicitly per index rather than via
 * divide-x/divide-y, which only apply by DOM order and don't
 * understand that a 2-column grid wraps into visual rows \u2014 using
 * them here would put a stray left-border on the bottom-left item.
 */
function borderClasses(index: number, total: number): string {
  const isLastItem = index === total - 1;
  const isLastRow = index >= total - 2;
  const isLeftColumn = index % 2 === 0;

  let bottomBorder = "";
  if (!isLastItem) {
    bottomBorder = isLastRow ? "border-b sm:border-b-0" : "border-b";
  }

  const rightBorder = isLeftColumn ? "sm:border-r" : "";

  return `${bottomBorder} ${rightBorder}`.trim();
}

export default function GovernanceEstate() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            Governance in the technology estate
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            Governance work often touches these areas &mdash; not as a fixed
            checklist, but because this is where technology decisions
            usually live.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-14 grid grid-cols-1 border border-ink/10 sm:grid-cols-2 lg:mt-16"
        >
          {grcEstateRelations.map((item, i) => (
            <Link
              key={item.slug}
              href={`/solutions/${item.slug}`}
              className={`focus-ring group block border-ink/10 p-8 transition-colors hover:bg-light ${borderClasses(i, grcEstateRelations.length)}`}
            >
              <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-geaa-blue sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted sm:text-base">
                {item.description}
              </p>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
