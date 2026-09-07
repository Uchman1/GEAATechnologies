import Link from "next/link";
import type { CaseStudy } from "@/lib/site-data";

/**
 * Large editorial index entry \u2014 no card border, no shadow, no
 * image placeholder pretending to be a project photo. Typography,
 * metadata and a thin rule do the work.
 */
export default function CaseStudyFeature({ study, reversed }: { study: CaseStudy; reversed?: boolean }) {
  const metaCols = reversed ? "lg:col-span-4 lg:col-start-9" : "lg:col-span-4";
  const summaryCols = reversed ? "lg:col-span-7 lg:col-start-1" : "lg:col-span-7 lg:col-start-6";

  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="focus-ring group grid gap-6 border-t border-white/10 py-12 transition-colors hover:bg-white/[0.02] lg:grid-cols-12 lg:gap-10 lg:py-16"
    >
      <div className={metaCols}>
        <p className="font-mono text-xs text-white/40">{study.client}</p>
        <h3 className="mt-3 text-2xl font-bold text-white transition-colors group-hover:text-electric-cyan sm:text-3xl">
          {study.positioning}
        </h3>
        <p className="mt-3 font-mono text-xs text-white/40">{study.status}</p>
      </div>

      <div className={summaryCols}>
        <p className="max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
          {study.summary}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-electric-cyan">
          View case study <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </Link>
  );
}
