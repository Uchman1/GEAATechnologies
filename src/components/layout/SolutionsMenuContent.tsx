"use client";

import Link from "next/link";
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
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { services, serviceGroups } from "@/lib/site-data";

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

export default function SolutionsMenuContent({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
      <div className="grid gap-10 md:grid-cols-3">
        {serviceGroups.map((group) => (
          <div key={group.title}>
            <p className="font-mono text-xs uppercase tracking-wide text-muted">{group.title}</p>
            <ul className="mt-4 space-y-1">
              {group.ids.map((id) => {
                const service = services.find((s) => s.id === id);
                if (!service) return null;
                const Icon = icons[id];
                return (
                  <li key={id}>
                    <Link
                      href={`/solutions/${service.slug}`}
                      onClick={onNavigate}
                      className="focus-ring group -mx-3 flex items-start gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-light"
                    >
                      {Icon && <Icon size={18} className="mt-0.5 shrink-0 text-geaa-blue" />}
                      <span>
                        <span className="block text-sm font-medium text-ink group-hover:text-geaa-blue">
                          {service.title}
                        </span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-muted">
                          {service.description}
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8 border-t border-black/5 pt-6">
        <Link
          href="/solutions"
          onClick={onNavigate}
          className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-geaa-blue hover:underline"
        >
          View all solutions
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
