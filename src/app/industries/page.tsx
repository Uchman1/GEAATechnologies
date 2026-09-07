import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ContextSection from "@/components/industries/ContextSection";
import FinalCta from "@/components/shared/FinalCta";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Industries",
  description:
    "GEAA Technologies serves SMEs, corporate organisations, professional services, education, healthcare, financial services and the public sector — the same capabilities, applied differently by context.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        headlineLines={["Different businesses.", "Different technology needs."]}
        supporting="GEAA Technologies works with organisations across several sectors. The service set stays the same — what changes is which parts matter most."
        readoutLeft="Industries GEAA serves"
        readoutRight="Same capabilities, different context"
      />
      <ContextSection />
      <FinalCta
        headline="The right technology depends on the business it's serving."
        primaryLabel="Talk to GEAA"
        primaryHref="tel:08074696508"
        secondaryLabel="Get a Quote"
        secondaryHref="mailto:hello@geaatech.com"
      />
    </>
  );
}
