import Reveal from "@/components/motion/Reveal";
import { whyGeaa } from "@/lib/site-data";

export default function WhyGeaa() {
  return (
    <section id="why-geaa" className="bg-navy-deep py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Why GEAA</h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:mt-20">
          {whyGeaa.map((reason) => (
            <div key={reason.title} className="border-t border-white/15 pt-6">
              <h3 className="text-xl font-semibold sm:text-2xl">
                {reason.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/50 sm:text-base">
                {reason.description}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
