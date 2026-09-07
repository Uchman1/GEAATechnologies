import Reveal from "@/components/motion/Reveal";
import IndustryContextSelector from "@/components/industries/IndustryContextSelector";

export default function ContextSection() {
  return (
    <section className="bg-navy-deep py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            The technology is the same. What changes is what matters most.
          </h2>
          <p className="mt-4 text-base text-white/50 sm:text-lg">
            Select a business context to see which of GEAA&rsquo;s solutions
            usually carry the most weight there.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 lg:mt-20">
          <IndustryContextSelector />
        </Reveal>
      </div>
    </section>
  );
}
