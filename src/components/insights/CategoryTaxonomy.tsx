import Reveal from "@/components/motion/Reveal";
import { insightsCategories } from "@/lib/site-data";

export default function CategoryTaxonomy() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Reveal className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="font-mono text-xs text-muted">What GEAA Insights will cover</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {insightsCategories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-ink/15 px-4 py-1.5 text-sm text-ink/70"
            >
              {category}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
