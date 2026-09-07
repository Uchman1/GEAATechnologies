import {
  Server,
  CloudCog,
  ShieldCheck,
  Network,
  Laptop,
  KeyRound,
  LifeBuoy,
  PackageCheck,
  Scale,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { services, type Service } from "@/lib/site-data";

const icons: Record<string, LucideIcon> = {
  infrastructure: Server,
  cloud: CloudCog,
  cybersecurity: ShieldCheck,
  networking: Network,
  devices: Laptop,
  software: KeyRound,
  support: LifeBuoy,
  procurement: PackageCheck,
  grc: Scale,
  training: GraduationCap,
};

function ServiceRow({ service, featured }: { service: Service; featured?: boolean }) {
  const Icon = icons[service.id];

  return (
    <div
      className={`group relative flex flex-col gap-4 border-b border-white/10 py-8 transition-colors hover:bg-white/[0.03] md:flex-row md:items-center md:gap-10 ${
        featured ? "py-10 md:py-12" : ""
      }`}
    >
      <div className="flex items-center gap-4 md:w-56 md:shrink-0">
        <span className="font-mono text-xs text-white/30">{service.number}</span>
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors group-hover:border-electric-cyan/60 group-hover:text-electric-cyan">
          <Icon size={18} strokeWidth={1.75} />
        </span>
        <h3
          className={`font-semibold text-white transition-colors group-hover:text-electric-cyan md:hidden ${
            featured ? "text-2xl" : "text-xl"
          }`}
        >
          {service.title}
        </h3>
      </div>

      <h3
        className={`hidden font-semibold text-white transition-colors group-hover:text-electric-cyan md:block ${
          featured ? "md:w-72 md:text-3xl lg:text-4xl" : "md:w-64 md:text-2xl"
        }`}
      >
        {service.title}
      </h3>

      <p
        className={`max-w-xl leading-relaxed text-white/50 ${
          featured ? "text-base sm:text-lg" : "text-sm sm:text-base"
        }`}
      >
        {service.description}
      </p>
    </div>
  );
}

export default function ServicesDirectory() {
  const [featured, ...rest] = services;

  return (
    <section id="what-we-do" className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-14 max-w-2xl lg:mb-20">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            What we do
          </h2>
          <p className="mt-4 text-base text-white/50 sm:text-lg">
            Ten capabilities, one point of accountability — from the first
            server to the last helpdesk ticket.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border-t border-white/10">
            <ServiceRow service={featured} featured />
            {rest.map((service) => (
              <ServiceRow key={service.id} service={service} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
