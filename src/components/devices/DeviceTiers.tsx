import { Sparkles, Laptop, Server, type LucideIcon } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { deviceTiers } from "@/lib/site-data";

const icons: LucideIcon[] = [Sparkles, Laptop, Server];

function Panel({
  tier,
  Icon,
  className,
  iconSize = 64,
}: {
  tier: { title: string; description: string };
  Icon: LucideIcon;
  className?: string;
  iconSize?: number;
}) {
  return (
    <div className={`relative overflow-hidden border border-ink/10 bg-white p-8 ${className ?? ""}`}>
      <Icon
        aria-hidden="true"
        size={iconSize}
        strokeWidth={1}
        className="pointer-events-none absolute -right-4 -top-4 text-ink/[0.05]"
      />
      <h3 className="relative text-2xl font-bold text-ink sm:text-3xl">
        {tier.title}
      </h3>
      <p className="relative mt-3 max-w-sm text-sm leading-relaxed text-muted sm:text-base">
        {tier.description}
      </p>
    </div>
  );
}

export default function DeviceTiers() {
  const [featured, business, enterprise] = deviceTiers;

  return (
    <section className="bg-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal delay={0.05}>
          <div className="grid gap-4 md:grid-cols-12 md:grid-rows-2">
            <Panel
              tier={featured}
              Icon={icons[0]}
              iconSize={100}
              className="md:col-span-7 md:row-span-2 flex flex-col justify-end min-h-[15rem]"
            />
            <Panel
              tier={business}
              Icon={icons[1]}
              className="md:col-span-5 md:col-start-8 md:row-start-1"
            />
            <Panel
              tier={enterprise}
              Icon={icons[2]}
              className="md:col-span-5 md:col-start-8 md:row-start-2"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
