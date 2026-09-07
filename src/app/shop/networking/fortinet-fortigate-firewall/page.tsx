import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/shop/ProductDetailTemplate";
import { products, shopCategories } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

const product = products.find((p) => p.slug === "fortinet-fortigate-firewall")!;
const category = shopCategories.find((c) => c.slug === "networking")!;

export const metadata: Metadata = buildMetadata({
  title: `${product.name} | ${category.name}`,
  description: product.shortDescription,
  path: "/shop/networking/fortinet-fortigate-firewall",
});

export default function FortinetFortigateFirewallPage() {
  return <ProductDetailTemplate product={product} category={category} />;
}
