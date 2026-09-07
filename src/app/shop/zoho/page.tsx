import type { Metadata } from "next";
import CategoryPageTemplate from "@/components/shop/CategoryPageTemplate";
import { shopCategories } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

const category = shopCategories.find((c) => c.slug === "zoho")!;

export const metadata: Metadata = buildMetadata({
  title: category.name,
  description: category.description,
  path: "/shop/zoho",
});

export default function ZohoPage() {
  return <CategoryPageTemplate category={category} />;
}
