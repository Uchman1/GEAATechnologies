import Reveal from "@/components/motion/Reveal";

export default function PricingModel() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Requirement &rarr; Pricing &rarr; Sales &rarr; Quote &rarr; Order
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            There&rsquo;s no fixed shelf price here, because the real cost
            depends on configuration, quantity and licensing model. Every
            category works the same way: tell GEAA what you need, get
            pricing back, and work through any negotiation before an order
            is placed. No cart, no checkout on this page.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
