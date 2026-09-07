"use client";

import { useState } from "react";
import Link from "next/link";
import { industryContexts } from "@/lib/site-data";

/**
 * Same underlying capabilities, different emphasis depending on the
 * business context selected. Genuinely interactive rather than
 * another static diagram or card grid — selecting a different
 * industry changes which capabilities are highlighted, which is the
 * point of this page: the underlying service set doesn't change, the
 * relevance of each part does.
 */
export default function IndustryContextSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = industryContexts[activeIndex];

  return (
    <div>
      <div role="tablist" aria-label="Industries" className="flex flex-wrap gap-2 border-b border-white/10 pb-6">
        {industryContexts.map((industry, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={industry.name}
              type="button"
              role="tab"
              id={`industry-tab-${i}`}
              aria-selected={isActive}
              aria-controls={`industry-panel-${i}`}
              onClick={() => setActiveIndex(i)}
              className={`focus-ring rounded-full px-4 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-electric-cyan text-navy-deep"
                  : "border border-white/15 text-white/60 hover:border-white/40 hover:text-white"
              }`}
            >
              {industry.name}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`industry-panel-${activeIndex}`}
        aria-labelledby={`industry-tab-${activeIndex}`}
        className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-16"
      >
        <p className="text-2xl font-medium leading-snug text-white lg:col-span-7 lg:text-3xl">
          {active.change}
        </p>

        <div className="lg:col-span-5">
          <p className="font-mono text-xs text-white/40">What matters most here</p>
          <div className="mt-4 flex flex-col gap-3">
            {active.emphasis.map((item) => (
              <Link
                key={item.slug}
                href={`/solutions/${item.slug}`}
                className="focus-ring group flex items-center justify-between border-b border-white/10 pb-3 text-white/70 transition-colors hover:text-white"
              >
                <span>{item.title}</span>
                <span aria-hidden="true" className="text-white/30 transition-colors group-hover:text-electric-cyan">
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
