import Reveal from "@/components/motion/Reveal";
import NetworkMotif from "@/components/graphics/NetworkMotif";
import { services } from "@/lib/site-data";

export default function BuiltToWorkTogether() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-24 text-white lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.14]"
      >
        <NetworkMotif className="h-[120%] w-[120%] max-w-none" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Built to work together
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/60 sm:text-lg">
            None of the ten is a standalone product. Infrastructure needs
            the network to reach anyone; the network needs security to be
            worth trusting; devices need support to stay useful. We design
            and support them as one system.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 flex flex-wrap justify-center gap-3">
          {services.map((service) => (
            <span
              key={service.id}
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70"
            >
              {service.title}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
