import Reveal from "@/components/motion/Reveal";
import { infrastructureProblems } from "@/lib/site-data";

export default function TheProblem() {
  return (
    <section className="bg-navy py-24 text-white lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal>
          <h2 className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.5rem]">
            Infrastructure decisions outlast the people who make them.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            A server bought without headroom becomes a bottleneck in
            eighteen months. A backup that&rsquo;s never tested is not a
            backup — it&rsquo;s an assumption. Infrastructure that isn&rsquo;t
            planned to scale gets replaced instead of extended, at a much
            higher cost, usually at the worst possible time. None of this
            shows up on day one. It shows up later, as downtime, as a
            system nobody can safely touch, or as an emergency instead of a
            project.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 grid gap-x-10 gap-y-6 border-t border-white/10 pt-10 sm:grid-cols-2 lg:mt-16">
          {infrastructureProblems.map((item) => (
            <div key={item.term} className="flex gap-4">
              <span className="w-40 shrink-0 font-mono text-xs text-white/40">
                {item.term}
              </span>
              <p className="text-sm leading-relaxed text-white/60 sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
