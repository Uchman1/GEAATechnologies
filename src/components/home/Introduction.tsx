import Reveal from "@/components/motion/Reveal";

export default function Introduction() {
  return (
    <section className="bg-light py-24 lg:py-32">
      <Reveal className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <h2 className="lg:col-span-6 text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            Technology should work for the business —
            <br />
            not become another problem for the business.
          </h2>

          <div className="lg:col-span-5 lg:col-start-8 lg:self-end lg:border-l lg:border-ink/10 lg:pl-10">
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              GEAA Technologies Limited works with organisations across
              Nigeria to plan, deploy and support the infrastructure, cloud,
              security and networking that keep their business running. We
              handle the technical work so your team can focus on running
              the business, not troubleshooting it.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
