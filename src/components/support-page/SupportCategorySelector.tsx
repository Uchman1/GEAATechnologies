"use client";

import { useState } from "react";
import { supportCategories, company } from "@/lib/site-data";

/**
 * A quick router, not a ticketing system: selecting a category just
 * reveals the fastest way to reach GEAA about it (email or call).
 * No ticket number, no "request submitted" state, no fabricated
 * status \u2014 nothing is logged anywhere until a person reads the email
 * or answers the phone.
 */
export default function SupportCategorySelector() {
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected !== null ? supportCategories[selected] : null;

  function mailtoFor(categoryName: string) {
    const subject = encodeURIComponent(`${categoryName} request`);
    return `mailto:hello@geaatech.com?subject=${subject}`;
  }

  return (
    <div>
      <div role="radiogroup" aria-label="Support category" className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {supportCategories.map((category, i) => (
          <label
            key={category.name}
            className={`cursor-pointer border px-4 py-4 text-center text-sm transition-colors ${
              selected === i
                ? "border-geaa-blue bg-geaa-blue/5 font-semibold text-geaa-blue"
                : "border-ink/15 text-ink/70 hover:border-ink/30"
            }`}
          >
            <input
              type="radio"
              name="supportCategory"
              value={category.name}
              checked={selected === i}
              onChange={() => setSelected(i)}
              className="sr-only"
            />
            {category.name}
          </label>
        ))}
      </div>

      <div className="mt-10 border-t border-ink/10 pt-10" aria-live="polite">
        {active ? (
          <div>
            <p className="text-lg text-ink">{active.description}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={mailtoFor(active.name)}
                className="focus-ring rounded-full bg-geaa-blue px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-deep"
              >
                Email about this
              </a>
              <a
                href={`tel:${company.phone.replace(/\s+/g, "")}`}
                className="focus-ring rounded-full border border-ink/20 px-7 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/40"
              >
                Call GEAA
              </a>
            </div>
          </div>
        ) : (
          <p className="text-muted">Select a category above to get started.</p>
        )}
      </div>
    </div>
  );
}
