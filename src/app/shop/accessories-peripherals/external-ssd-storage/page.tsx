import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/shop/ProductDetailTemplate";
import { products, shopCategories } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

const product = products.find((p) => p.slug === "external-ssd-storage")!;
const category = shopCategories.find((c) => c.slug === "accessories-peripherals")!;

export const metadata: Metadata = buildMetadata({
  title: `${product.name} | ${category.name}`,
  description: product.shortDescription,
  path: "/shop/accessories-peripherals/external-ssd-storage",
});

export default function ExternalSsdStoragePage() {
  return <ProductDetailTemplate product={product} category={category} />;
}
