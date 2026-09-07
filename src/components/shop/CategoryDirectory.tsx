import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { shopCategories } from "@/lib/site-data";

export default function CategoryDirectory() {
  return (
    <section className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Browse by category
          </h2>
          <p className="mt-4 text-base text-white/50 sm:text-lg">
            Nine categories, each connected to GEAA&rsquo;s wider technology
            capability.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 border-t border-white/10 lg:mt-16">
          {shopCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/shop/${category.slug}`}
              className="focus-ring group flex flex-col gap-2 border-b border-white/10 py-7 transition-colors hover:bg-white/[0.03] sm:flex-row sm:items-center sm:justify-between sm:gap-8"
            >
              <div>
                <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-electric-cyan">
                  {category.name}
                </h3>
                <p className="mt-1 max-w-lg text-sm text-white/50 sm:text-base">
                  {category.description}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="shrink-0 text-white/20 transition-all group-hover:translate-x-1 group-hover:text-electric-cyan"
              >
                &rarr;
              </span>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
