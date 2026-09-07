import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import PricingModel from "@/components/shop/PricingModel";
import CategoryDirectory from "@/components/shop/CategoryDirectory";
import FinalCta from "@/components/shared/FinalCta";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Shop",
  description:
    "Browse GEAA Technologies' hardware, networking, software and licensing categories \u2014 then request pricing shaped around your requirement.",
  path: "/shop",
});

export default function ShopPage() {
  return (
    <>
      <PageHero
        headlineLines={["The right technology,", "priced around your requirement."]}
        supporting="Browse by category, then talk to GEAA for pricing that reflects your configuration, quantity and licensing needs."
        ctas={[
          { label: "Request Pricing", href: "mailto:hello@geaatech.com" },
          { label: "Talk to Sales", href: "tel:08074696508", variant: "outline" },
        ]}
        readoutLeft="GEAA Shop"
        readoutRight="9 categories"
      />
      <PricingModel />
      <CategoryDirectory />
      <FinalCta
        headline="Tell us what you need, and we'll get you the right price."
        supportingCopy="Every category above works the same way \u2014 a real requirement gets a real quote."
        primaryLabel="Request Pricing"
        primaryHref="mailto:hello@geaatech.com"
        secondaryLabel="Talk to Sales"
        secondaryHref="tel:08074696508"
      />
    </>
  );
}
