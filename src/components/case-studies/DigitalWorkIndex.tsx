import Reveal from "@/components/motion/Reveal";
import { digitalWork } from "@/lib/site-data";

/**
 * A quiet text index, not a gallery/card grid \u2014 this section is
 * intentionally the least visually loud on the page, since it
 * supports GEAA's enterprise technology capability rather than
 * being the main event.
 */
export default function DigitalWorkIndex() {
  return (
    <section className="bg-navy-deep py-24 text-white lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Digital products &amp; platforms
          </h2>
          <p className="mt-4 text-base text-white/50 sm:text-lg">
            Active digital tools, applications and websites GEAA has
            built, alongside the enterprise technology work above.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 border-t border-white/10 lg:mt-16">
          {digitalWork.map((item) => (
            <div
              key={item.name}
              className="flex flex-col gap-1 border-b border-white/10 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <span className="text-lg font-medium text-white">{item.name}</span>
              <span className="text-sm text-white/50 sm:max-w-md sm:text-right">
                {item.description}
              </span>
              <span className="font-mono text-xs text-white/30 sm:w-32 sm:shrink-0 sm:text-right">
                {item.type}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
