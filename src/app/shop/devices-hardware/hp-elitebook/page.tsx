import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/shop/ProductDetailTemplate";
import { products, shopCategories } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

const product = products.find((p) => p.slug === "hp-elitebook")!;
const category = shopCategories.find((c) => c.slug === "devices-hardware")!;

export const metadata: Metadata = buildMetadata({
  title: `${product.name} | ${category.name}`,
  description: product.shortDescription,
  path: "/shop/devices-hardware/hp-elitebook",
});

export default function HpElitebookPage() {
  return <ProductDetailTemplate product={product} category={category} />;
}
