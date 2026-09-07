import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/shop/ProductDetailTemplate";
import { products, shopCategories } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

const product = products.find((p) => p.slug === "zoho-one")!;
const category = shopCategories.find((c) => c.slug === "zoho")!;

export const metadata: Metadata = buildMetadata({
  title: `${product.name} | ${category.name}`,
  description: product.shortDescription,
  path: "/shop/zoho/zoho-one",
});

export default function ZohoOnePage() {
  return <ProductDetailTemplate product={product} category={category} />;
}
