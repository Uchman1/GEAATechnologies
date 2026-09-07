import type { Metadata } from "next";
import CategoryPageTemplate from "@/components/shop/CategoryPageTemplate";
import { shopCategories } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

const category = shopCategories.find((c) => c.slug === "microsoft-365")!;

export const metadata: Metadata = buildMetadata({
  title: category.name,
  description: category.description,
  path: "/shop/microsoft-365",
});

export default function Microsoft365Page() {
  return <CategoryPageTemplate category={category} />;
}
