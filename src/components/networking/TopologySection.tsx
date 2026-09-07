import Reveal from "@/components/motion/Reveal";
import NetworkTopology from "@/components/networking/NetworkTopology";

export default function TopologySection() {
  return (
    <section className="bg-navy py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            One network, everything on it
          </h2>
          <p className="mt-4 text-base text-white/50 sm:text-lg">
            Users and servers reach each other locally. Everything leaving
            the building passes through security first.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-16 overflow-x-auto lg:mt-20">
          <NetworkTopology />
        </Reveal>
      </div>
    </section>
  );
}
