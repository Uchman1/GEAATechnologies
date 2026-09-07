import Reveal from "@/components/motion/Reveal";
import ProtectionLayers from "@/components/cybersecurity/ProtectionLayers";

export default function ProtectAtEveryLayer() {
  return (
    <section className="bg-navy-deep py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs text-white/40">
            Exposure &rarr; Protection &rarr; Response
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Protect the business at every layer
          </h2>
          <p className="mt-4 text-base text-white/50 sm:text-lg">
            No single control catches everything. Each layer below exists
            because the one outside it won&rsquo;t always hold.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-16 lg:mt-20">
          <ProtectionLayers />
        </Reveal>
      </div>
    </section>
  );
}
