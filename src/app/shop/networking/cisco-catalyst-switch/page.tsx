import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/shop/ProductDetailTemplate";
import { products, shopCategories } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

const product = products.find((p) => p.slug === "cisco-catalyst-switch")!;
const category = shopCategories.find((c) => c.slug === "networking")!;

export const metadata: Metadata = buildMetadata({
  title: `${product.name} | ${category.name}`,
  description: product.shortDescription,
  path: "/shop/networking/cisco-catalyst-switch",
});

export default function CiscoCatalystSwitchPage() {
  return <ProductDetailTemplate product={product} category={category} />;
}
