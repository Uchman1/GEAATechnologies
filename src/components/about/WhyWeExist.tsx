import Reveal from "@/components/motion/Reveal";

export default function WhyWeExist() {
  return (
    <section className="bg-navy py-24 text-white lg:py-32">
      <Reveal className="mx-auto max-w-3xl px-6 lg:px-10">
        <h2 className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]">
          Most organisations don&rsquo;t have a technology problem. They have
          a fragmentation problem.
        </h2>
        <p className="mt-8 text-base leading-relaxed text-white/60 sm:text-lg">
          A different vendor for hardware, another for the network, another
          for security, another for support — each one solving their own
          slice, none of them accountable for the whole. When something
          breaks, no one owns it. GEAA exists to be the one point of
          accountability: an enterprise technology partner that plans,
          deploys and supports the full stack, so organisations get
          dependable technology without having to manage the vendors
          themselves.
        </p>
      </Reveal>
    </section>
  );
}
