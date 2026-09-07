import { Rocket, ShieldCheck, Network, LifeBuoy, type LucideIcon } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { deliverBlocks, type DeliverBlock } from "@/lib/site-data";

const icons: Record<string, LucideIcon> = {
  Deploy: Rocket,
  Secure: ShieldCheck,
  Connect: Network,
  Support: LifeBuoy,
};

function Block({
  block,
  className,
  iconSize = 64,
}: {
  block: DeliverBlock;
  className?: string;
  iconSize?: number;
}) {
  const Icon = icons[block.verb];

  return (
    <div
      className={`relative overflow-hidden border border-white/10 bg-white/[0.03] p-8 ${className ?? ""}`}
    >
      <Icon
        aria-hidden="true"
        size={iconSize}
        strokeWidth={1}
        className="pointer-events-none absolute -right-4 -top-4 text-white/[0.06]"
      />
      <h3 className="relative text-2xl font-bold text-white sm:text-3xl">
        {block.verb}
      </h3>
      <p className="relative mt-3 max-w-sm text-sm leading-relaxed text-white/50 sm:text-base">
        {block.description}
      </p>
    </div>
  );
}

export default function WhatWeDeliver() {
  const [deploy, secure, connect, support] = deliverBlocks;

  return (
    <section className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            What we deliver
          </h2>
          <p className="mt-4 text-base text-white/50 sm:text-lg">
            No client counters, no invented certifications — just the four
            things that have to happen for technology to actually help.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 lg:mt-20">
          <div className="grid gap-4 md:grid-cols-12 md:grid-rows-2">
            <Block
              block={deploy}
              iconSize={96}
              className="md:col-span-7 md:row-span-2 flex flex-col justify-end min-h-[16rem]"
            />
            <Block
              block={secure}
              className="md:col-span-5 md:col-start-8 md:row-start-1"
            />
            <Block
              block={connect}
              className="md:col-span-5 md:col-start-8 md:row-start-2"
            />
          </div>
          <Block block={support} className="mt-4" iconSize={48} />
        </Reveal>
      </div>
    </section>
  );
}
