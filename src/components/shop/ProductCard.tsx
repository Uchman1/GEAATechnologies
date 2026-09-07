import Link from "next/link";
import type { Product } from "@/lib/site-data";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.categorySlug}/${product.slug}`}
      className="focus-ring group flex flex-col gap-2 border-b border-ink/10 py-7 transition-colors hover:bg-white/60 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
    >
      <div>
        <p className="font-mono text-xs text-muted">{product.manufacturer}</p>
        <h3 className="mt-1 text-xl font-semibold text-ink transition-colors group-hover:text-geaa-blue">
          {product.name}
        </h3>
        <p className="mt-1 max-w-lg text-sm text-muted sm:text-base">
          {product.shortDescription}
        </p>
      </div>
      <span className="shrink-0 font-mono text-xs text-muted sm:text-right">
        {product.customerPricingLabel}
      </span>
    </Link>
  );
}
