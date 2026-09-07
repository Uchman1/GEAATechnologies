import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/shop/ProductDetailTemplate";
import { products, shopCategories } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

const product = products.find((p) => p.slug === "sophos-firewall")!;
const category = shopCategories.find((c) => c.slug === "sophos")!;

export const metadata: Metadata = buildMetadata({
  title: `${product.name} | ${category.name}`,
  description: product.shortDescription,
  path: "/shop/sophos/sophos-firewall",
});

export default function SophosFirewallPage() {
  return <ProductDetailTemplate product={product} category={category} />;
}
