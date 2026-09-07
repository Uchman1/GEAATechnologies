import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/shop/ProductDetailTemplate";
import { products, shopCategories } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

const product = products.find((p) => p.slug === "microsoft-365-business")!;
const category = shopCategories.find((c) => c.slug === "microsoft-365")!;

export const metadata: Metadata = buildMetadata({
  title: `${product.name} | ${category.name}`,
  description: product.shortDescription,
  path: "/shop/microsoft-365/microsoft-365-business",
});

export default function Microsoft365BusinessPage() {
  return <ProductDetailTemplate product={product} category={category} />;
}
