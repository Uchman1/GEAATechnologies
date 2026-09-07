import Reveal from "@/components/motion/Reveal";
import LayeredDiagram from "@/components/shared/LayeredDiagram";
import { cloudLayers } from "@/lib/site-data";

export default function CloudVisual() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            Five layers, one sign-in
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            Every Microsoft 365 deployment is really this stack, whether
            it&rsquo;s visible or not. Getting identity right at the middle
            is what makes everything above and below it trustworthy.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-16 lg:mt-20">
          <LayeredDiagram steps={cloudLayers} theme="light" />
        </Reveal>
      </div>
    </section>
  );
}
