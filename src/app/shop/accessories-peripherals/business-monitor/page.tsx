import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/shop/ProductDetailTemplate";
import { products, shopCategories } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

const product = products.find((p) => p.slug === "business-monitor")!;
const category = shopCategories.find((c) => c.slug === "accessories-peripherals")!;

export const metadata: Metadata = buildMetadata({
  title: `${product.name} | ${category.name}`,
  description: product.shortDescription,
  path: "/shop/accessories-peripherals/business-monitor",
});

export default function BusinessMonitorPage() {
  return <ProductDetailTemplate product={product} category={category} />;
}
