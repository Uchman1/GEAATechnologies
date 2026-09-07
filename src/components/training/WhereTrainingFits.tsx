import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { trainingRelatedAreas } from "@/lib/site-data";

export default function WhereTrainingFits() {
  return (
    <section className="bg-navy-deep py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Where training fits</h2>
          <p className="mt-4 text-base text-white/50 sm:text-lg">
            Not every engagement touches all three &mdash; these are the
            areas training most often connects to.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-14 grid grid-cols-1 divide-y divide-white/10 border border-white/10 sm:grid-cols-3 sm:divide-y-0 sm:divide-x lg:mt-16"
        >
          {trainingRelatedAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/solutions/${area.slug}`}
              className="focus-ring group block p-8 transition-colors hover:bg-white/[0.03]"
            >
              <h3 className="text-lg font-semibold transition-colors group-hover:text-electric-cyan sm:text-xl">
                {area.title}
              </h3>
              <p className="mt-2 text-sm text-white/50 sm:text-base">
                {area.description}
              </p>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
