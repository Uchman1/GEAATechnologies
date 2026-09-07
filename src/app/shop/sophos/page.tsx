import type { Metadata } from "next";
import CategoryPageTemplate from "@/components/shop/CategoryPageTemplate";
import { shopCategories } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

const category = shopCategories.find((c) => c.slug === "sophos")!;

export const metadata: Metadata = buildMetadata({
  title: category.name,
  description: category.description,
  path: "/shop/sophos",
});

export default function SophosPage() {
  return <CategoryPageTemplate category={category} />;
}
