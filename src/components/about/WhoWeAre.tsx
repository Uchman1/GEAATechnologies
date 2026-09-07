import Reveal from "@/components/motion/Reveal";
import { capabilityVerbs } from "@/lib/site-data";

export default function WhoWeAre() {
  return (
    <section className="bg-light py-24 lg:py-32">
      <Reveal className="mx-auto max-w-4xl px-6 lg:px-10">
        <p className="text-2xl font-medium leading-snug text-ink sm:text-3xl lg:text-[2.25rem]">
          GEAA Technologies Limited is an enterprise technology company. We
          help organisations acquire, deploy, secure, connect and support the
          technology infrastructure their businesses depend on — treated as
          one connected responsibility, not a set of separate vendor
          relationships.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {capabilityVerbs.map((verb) => (
            <span
              key={verb}
              className="rounded-full border border-ink/15 px-4 py-1.5 font-mono text-xs text-muted"
            >
              {verb}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
