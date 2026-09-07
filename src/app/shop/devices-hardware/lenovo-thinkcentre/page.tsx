import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/shop/ProductDetailTemplate";
import { products, shopCategories } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

const product = products.find((p) => p.slug === "lenovo-thinkcentre")!;
const category = shopCategories.find((c) => c.slug === "devices-hardware")!;

export const metadata: Metadata = buildMetadata({
  title: `${product.name} | ${category.name}`,
  description: product.shortDescription,
  path: "/shop/devices-hardware/lenovo-thinkcentre",
});

export default function LenovoThinkcentrePage() {
  return <ProductDetailTemplate product={product} category={category} />;
}
