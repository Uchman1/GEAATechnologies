import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { services, serviceGroups, type Service } from "@/lib/site-data";

const byId = (id: string): Service => {
  const service = services.find((s) => s.id === id);
  if (!service) throw new Error(`Unknown service id: ${id}`);
  return service;
};

// Deliberately uneven tile sizes per group so the ten solutions read
// as an editorial composition, not identical cards. Each group's
// spans sum to a multiple of 12, so it wraps into whole rows on its
// own without spilling into the next group.
const spanConfig: Record<string, { span: string; large?: boolean }> = {
  infrastructure: { span: "lg:col-span-8", large: true },
  cybersecurity: { span: "lg:col-span-4" },
  cloud: { span: "lg:col-span-4" },
  networking: { span: "lg:col-span-4" },
  devices: { span: "lg:col-span-4" },
  software: { span: "lg:col-span-4" },
  support: { span: "lg:col-span-5" },
  procurement: { span: "lg:col-span-3" },
  grc: { span: "lg:col-span-7", large: true },
  training: { span: "lg:col-span-5" },
};

function Tile({ service, large }: { service: Service; large?: boolean }) {
  return (
    <Link
      href={`/solutions/${service.slug}`}
      className={`group focus-ring relative flex flex-col justify-between overflow-hidden border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-electric-cyan/40 hover:bg-white/[0.05] ${
        large ? "min-h-[220px] lg:p-9" : "min-h-[170px]"
      }`}
    >
      <div>
        <span className="font-mono text-xs text-white/30">{service.number}</span>
        <h3
          className={`mt-3 font-semibold text-white ${
            large ? "text-2xl lg:text-3xl" : "text-lg lg:text-xl"
          }`}
        >
          {service.title}
        </h3>
        <p
          className={`mt-3 text-white/50 ${
            large ? "max-w-md text-base" : "max-w-xs text-sm"
          }`}
        >
          {service.description}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {service.capabilities.slice(0, large ? 4 : 2).map((cap) => (
          <span
            key={cap}
            className="rounded-full border border-white/15 px-3 py-1 font-mono text-[11px] text-white/40"
          >
            {cap}
          </span>
        ))}
      </div>

      <ArrowUpRight
        aria-hidden="true"
        size={18}
        className="absolute right-6 top-6 text-white/20 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-electric-cyan"
      />
    </Link>
  );
}

export default function SolutionsGrid() {
  return (
    <section className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="space-y-16 lg:space-y-20">
          {serviceGroups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={0.05 + groupIndex * 0.05}>
              <p className="mb-6 font-mono text-xs text-white/40">{group.title}</p>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
                {group.ids.map((id) => {
                  const service = byId(id);
                  const { span, large } = spanConfig[id] ?? { span: "lg:col-span-4" };
                  return (
                    <div key={service.id} className={span}>
                      <Tile service={service} large={large} />
                    </div>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
