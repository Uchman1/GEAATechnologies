import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import SupportSelectorSection from "@/components/support-page/SupportSelectorSection";
import WaysToReach from "@/components/support-page/WaysToReach";
import WhatHappensNext from "@/components/support-page/WhatHappensNext";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Support",
  description:
    "Already working with GEAA Technologies? Tell us what you need help with \u2014 technical, device, network, Microsoft 365, security, software or infrastructure support.",
  path: "/support",
});

export default function SupportPage() {
  return (
    <>
      <PageHero
        headlineLines={["Need help with", "your technology?"]}
        supporting="You already work with GEAA. Tell us what you need help with, and we'll point you to the right person."
        readoutLeft="GEAA Support"
        readoutRight="For existing customers"
      />
      <SupportSelectorSection />
      <WaysToReach />
      <WhatHappensNext />
    </>
  );
}
