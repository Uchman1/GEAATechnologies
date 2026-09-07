import Reveal from "@/components/motion/Reveal";

export default function WaysToReach() {
  return (
    <section className="bg-navy py-20 text-white lg:py-28">
      <Reveal className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">
              Already have an ongoing arrangement with GEAA?
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
              If you have a standing support arrangement, your usual
              contact is still the fastest route. The categories above work
              just as well if you&rsquo;d rather start fresh.
            </p>
          </div>
          <div className="lg:border-l lg:border-white/15 lg:pl-16">
            <h3 className="text-xl font-semibold sm:text-2xl">
              Something urgent?
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
              For anything that needs attention right now, calling reaches
              us faster than email.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
