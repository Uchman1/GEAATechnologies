import Reveal from "@/components/motion/Reveal";
import { performanceReliability } from "@/lib/site-data";

export default function PerformanceReliability() {
  const { performance, reliability } = performanceReliability;

  return (
    <section className="bg-light py-24 lg:py-32">
      <Reveal className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              {performance.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              {performance.description}
            </p>
          </div>
          <div className="lg:border-l lg:border-ink/10 lg:pl-16">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              {reliability.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              {reliability.description}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
