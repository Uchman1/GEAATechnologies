import type { Metadata } from "next";
import CategoryPageTemplate from "@/components/shop/CategoryPageTemplate";
import { shopCategories } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

const category = shopCategories.find((c) => c.slug === "devices-hardware")!;

export const metadata: Metadata = buildMetadata({
  title: category.name,
  description: category.description,
  path: "/shop/devices-hardware",
});

export default function DevicesHardwarePage() {
  return <CategoryPageTemplate category={category} />;
}
