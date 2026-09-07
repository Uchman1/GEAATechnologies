import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/shop/ProductDetailTemplate";
import { products, shopCategories } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

const product = products.find((p) => p.slug === "sophos-endpoint-protection")!;
const category = shopCategories.find((c) => c.slug === "sophos")!;

export const metadata: Metadata = buildMetadata({
  title: `${product.name} | ${category.name}`,
  description: product.shortDescription,
  path: "/shop/sophos/sophos-endpoint-protection",
});

export default function SophosEndpointProtectionPage() {
  return <ProductDetailTemplate product={product} category={category} />;
}
