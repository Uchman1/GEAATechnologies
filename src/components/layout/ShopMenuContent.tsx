"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { shopCategories } from "@/lib/site-data";

// The 5 primary categories only \u2014 the 4 vendor sub-pages
// (microsoft-365/google/zoho/sophos) live under Software & Licensing
// itself rather than cluttering the nav dropdown.
const primaryShopSlugs = [
  "devices-hardware",
  "servers-infrastructure",
  "networking",
  "software-licensing",
  "accessories-peripherals",
];

export default function ShopMenuContent({ onNavigate }: { onNavigate: () => void }) {
  const primaryCategories = primaryShopSlugs
    .map((slug) => shopCategories.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <div className="mx-auto max-w-md px-6 py-10 lg:px-10">
      <p className="font-mono text-xs uppercase tracking-wide text-muted">Shop by category</p>
      <ul className="mt-4 space-y-1">
        {primaryCategories.map((category) => (
          <li key={category.slug}>
            <Link
              href={`/shop/${category.slug}`}
              onClick={onNavigate}
              className="focus-ring group -mx-3 block rounded-lg px-3 py-3 transition-colors hover:bg-light"
            >
              <span className="block text-sm font-medium text-ink group-hover:text-geaa-blue">
                {category.name}
              </span>
              <span className="mt-0.5 block text-xs leading-relaxed text-muted">
                {category.description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6 border-t border-black/5 pt-6">
        <Link
          href="/shop"
          onClick={onNavigate}
          className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-geaa-blue hover:underline"
        >
          Browse full shop
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
