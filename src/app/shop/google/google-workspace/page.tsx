import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/shop/ProductDetailTemplate";
import { products, shopCategories } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

const product = products.find((p) => p.slug === "google-workspace")!;
const category = shopCategories.find((c) => c.slug === "google")!;

export const metadata: Metadata = buildMetadata({
  title: `${product.name} | ${category.name}`,
  description: product.shortDescription,
  path: "/shop/google/google-workspace",
});

export default function GoogleWorkspacePage() {
  return <ProductDetailTemplate product={product} category={category} />;
}
