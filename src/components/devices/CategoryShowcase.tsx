import { Laptop, Cpu, Monitor, Server, Mouse, Printer, type LucideIcon } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { deviceCategories, type DeviceCategory } from "@/lib/site-data";

const icons: Record<DeviceCategory["icon"], LucideIcon> = {
  laptop: Laptop,
  cpu: Cpu,
  monitor: Monitor,
  server: Server,
  mouse: Mouse,
  printer: Printer,
};

function Tile({ category, span, large }: { category: DeviceCategory; span: string; large?: boolean }) {
  const Icon = icons[category.icon];

  return (
    <div className={`${span} relative overflow-hidden border border-white/10 bg-white/[0.03] p-7 ${large ? "min-h-[240px] lg:p-9" : "min-h-[190px]"}`}>
      <Icon
        aria-hidden="true"
        size={large ? 120 : 72}
        strokeWidth={1}
        className="pointer-events-none absolute -right-4 -top-4 text-white/[0.07]"
      />
      <div className="relative flex h-full flex-col justify-end">
        <h3 className={`font-semibold text-white ${large ? "text-2xl lg:text-3xl" : "text-lg"}`}>
          {category.name}
        </h3>
        <p className={`mt-2 text-white/50 ${large ? "max-w-sm text-base" : "max-w-xs text-sm"}`}>
          {category.description}
        </p>
      </div>
    </div>
  );
}

export default function CategoryShowcase() {
  const [laptops, desktops, monitors, servers, accessories, peripherals] = deviceCategories;

  return (
    <section className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Technology, by category
          </h2>
          <p className="mt-4 text-base text-white/50 sm:text-lg">
            Business-grade laptops, desktops, monitors, servers and the
            everyday hardware every office runs on — sourced, configured
            and delivered ready to work.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 grid grid-cols-1 gap-4 lg:mt-20 lg:grid-cols-12">
          <Tile category={laptops} span="lg:col-span-6" large />
          <Tile category={desktops} span="lg:col-span-3" />
          <Tile category={monitors} span="lg:col-span-3" />
          <Tile category={servers} span="lg:col-span-4" />
          <Tile category={accessories} span="lg:col-span-4" />
          <Tile category={peripherals} span="lg:col-span-4" />
        </Reveal>
      </div>
    </section>
  );
}
