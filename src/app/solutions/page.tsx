import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import SolutionsGrid from "@/components/solutions/SolutionsGrid";
import BuiltToWorkTogether from "@/components/solutions/BuiltToWorkTogether";
import QuoteCta from "@/components/shared/QuoteCta";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Solutions",
  description:
    "Enterprise infrastructure, cloud & Microsoft 365, cybersecurity, networking, devices, software licensing, managed IT support, and procurement & deployment — designed to work together.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        headlineLines={["Technology systems", "don't work in isolation."]}
        supporting="Infrastructure, cloud, security, networks, devices and support only deliver value when they work as one system. That's how GEAA designs and supports them."
        readoutLeft="10 solution areas"
        readoutRight="One point of accountability"
      />
      <SolutionsGrid />
      <BuiltToWorkTogether />
      <QuoteCta
        quote="The right technology doesn't announce itself \u2014 it simply lets the business move."
        primaryLabel="Get a Quote"
        primaryHref="mailto:hello@geaatech.com"
        secondaryLabel="Talk to GEAA"
        secondaryHref="tel:08074696508"
      />
    </>
  );
}
