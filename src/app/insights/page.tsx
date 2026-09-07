import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import CategoryTaxonomy from "@/components/insights/CategoryTaxonomy";
import ComingSoonPanel from "@/components/insights/ComingSoonPanel";
import FinalCta from "@/components/shared/FinalCta";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Insights",
  description:
    "GEAA's technology point of view — perspective on infrastructure, security, Microsoft 365, networking and the everyday decisions organisations face.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <PageHero
        headlineLines={["Perspective on the technology", "work we do."]}
        supporting="GEAA Insights is where we'll write about the infrastructure, security and technology decisions we work through — as the perspective builds, not before."
        readoutLeft="GEAA Insights"
        readoutRight="Technology point of view"
      />
      <CategoryTaxonomy />
      <ComingSoonPanel />
      <FinalCta
        headline="Have a technology question we haven't written about yet?"
        primaryLabel="Talk to GEAA"
        primaryHref="tel:08074696508"
        secondaryLabel="Get a Quote"
        secondaryHref="mailto:hello@geaatech.com"
      />
    </>
  );
}
