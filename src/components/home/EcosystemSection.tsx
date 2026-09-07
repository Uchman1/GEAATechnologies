import Reveal from "@/components/motion/Reveal";
import EcosystemFlow from "@/components/graphics/EcosystemFlow";
import { ecosystemFlow } from "@/lib/site-data";

export default function EcosystemSection() {
  return (
    <section className="bg-navy-deep py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Technology in action
          </h2>
          <p className="mt-4 text-base text-white/50 sm:text-lg">
            None of this works in isolation. Infrastructure, cloud, security,
            network, devices and support are one connected system — and we
            treat it that way.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-16 overflow-x-auto lg:mt-20">
          <div className="min-w-max py-2">
            <EcosystemFlow steps={ecosystemFlow} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
