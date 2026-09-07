import Reveal from "@/components/motion/Reveal";
import LocationMotif from "@/components/graphics/LocationMotif";
import { company } from "@/lib/site-data";

export default function OurEnvironment() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Reveal className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">
              Our environment
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              GEAA is based at {company.address}. We work close to the
              businesses we support — visiting sites, standing in server
              rooms, and configuring hardware in the same buildings where it
              runs, rather than managing everything from a distance.
            </p>
            <p className="mt-4 font-mono text-sm text-muted">
              {company.phone}
            </p>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-xs text-ink/70 lg:col-span-5">
            <LocationMotif className="h-full w-full" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-center">
              <span className="font-mono text-[11px] text-muted">
                6.50°N, 3.35°E
              </span>
              <span className="font-mono text-[11px] text-muted">
                Surulere, Lagos
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
