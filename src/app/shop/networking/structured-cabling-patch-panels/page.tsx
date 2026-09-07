import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/shop/ProductDetailTemplate";
import { products, shopCategories } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

const product = products.find((p) => p.slug === "structured-cabling-patch-panels")!;
const category = shopCategories.find((c) => c.slug === "networking")!;

export const metadata: Metadata = buildMetadata({
  title: `${product.name} | ${category.name}`,
  description: product.shortDescription,
  path: "/shop/networking/structured-cabling-patch-panels",
});

export default function StructuredCablingPatchPanelsPage() {
  return <ProductDetailTemplate product={product} category={category} />;
}
