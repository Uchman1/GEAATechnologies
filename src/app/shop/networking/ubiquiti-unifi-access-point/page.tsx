import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/shop/ProductDetailTemplate";
import { products, shopCategories } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

const product = products.find((p) => p.slug === "ubiquiti-unifi-access-point")!;
const category = shopCategories.find((c) => c.slug === "networking")!;

export const metadata: Metadata = buildMetadata({
  title: `${product.name} | ${category.name}`,
  description: product.shortDescription,
  path: "/shop/networking/ubiquiti-unifi-access-point",
});

export default function UbiquitiUnifiAccessPointPage() {
  return <ProductDetailTemplate product={product} category={category} />;
}
