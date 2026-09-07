import Reveal from "@/components/motion/Reveal";
import { activityVsGovernance } from "@/lib/site-data";

export default function ActivityVsGovernance() {
  return (
    <section className="bg-navy-deep py-24 text-white lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Activity isn&rsquo;t the same as governance.
          </h2>
          <p className="mt-4 text-base text-white/50 sm:text-lg">
            One is informal. The other is deliberate. Here&rsquo;s the
            difference, in practice:
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-12 lg:mt-20">
          <div className="sm:col-span-3">
            <p className="font-mono text-xs text-white/40">Activity</p>
            <p className="mt-3 text-lg text-white/50">
              {activityVsGovernance.activity}
            </p>
          </div>

          <div className="sm:col-span-8 sm:col-start-5 sm:border-l sm:border-white/15 sm:pl-12">
            <p className="font-mono text-xs text-electric-cyan">Governance</p>
            <div className="mt-3 space-y-3">
              {activityVsGovernance.governance.map((line) => (
                <p key={line} className="text-xl font-medium sm:text-2xl">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
