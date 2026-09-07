import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export default function ShopTransition() {
  return (
    <section className="bg-navy-deep py-14 text-white">
      <Reveal className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center lg:px-10">
        <p className="max-w-md text-base text-white/60 sm:text-lg">
          Browsing for something specific? The full GEAA technology
          catalogue is on its way.
        </p>
        <Link
          href="/shop"
          className="focus-ring shrink-0 rounded-full border border-white/25 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:border-electric-cyan/60 hover:text-electric-cyan"
        >
          Shop Technology
        </Link>
      </Reveal>
    </section>
  );
}
