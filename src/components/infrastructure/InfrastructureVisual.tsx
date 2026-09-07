import Reveal from "@/components/motion/Reveal";
import LayeredDiagram from "@/components/shared/LayeredDiagram";
import { infrastructureLayers } from "@/lib/site-data";

export default function InfrastructureVisual() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            Every layer depends on the one below it
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            Infrastructure isn&rsquo;t one thing — it&rsquo;s a stack. Weakness
            in any layer eventually shows up in the business operations at
            the top.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-16 lg:mt-20">
          <LayeredDiagram steps={infrastructureLayers} theme="light" />
        </Reveal>
      </div>
    </section>
  );
}
