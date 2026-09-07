import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/shop/ProductDetailTemplate";
import { products, shopCategories } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

const product = products.find((p) => p.slug === "hpe-proliant-rack")!;
const category = shopCategories.find((c) => c.slug === "servers-infrastructure")!;

export const metadata: Metadata = buildMetadata({
  title: `${product.name} | ${category.name}`,
  description: product.shortDescription,
  path: "/shop/servers-infrastructure/hpe-proliant-rack",
});

export default function HpeProliantRackPage() {
  return <ProductDetailTemplate product={product} category={category} />;
}
