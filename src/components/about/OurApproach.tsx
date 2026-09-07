import Reveal from "@/components/motion/Reveal";
import EcosystemFlow from "@/components/graphics/EcosystemFlow";
import { approachSteps } from "@/lib/site-data";

export default function OurApproach() {
  return (
    <section className="bg-navy py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Our approach</h2>
          <p className="mt-4 text-base text-white/50 sm:text-lg">
            The same five stages, on every engagement, regardless of which
            service areas are involved.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-16 overflow-x-auto lg:mt-20">
          <div className="min-w-max py-2">
            <EcosystemFlow steps={approachSteps} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
