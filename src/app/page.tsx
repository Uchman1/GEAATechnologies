import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import ServicesDirectory from "@/components/home/ServicesDirectory";
import EcosystemSection from "@/components/home/EcosystemSection";
import WhyGeaa from "@/components/home/WhyGeaa";
import WhatWeDeliver from "@/components/home/WhatWeDeliver";
import TechStack from "@/components/home/TechStack";
import HumanSection from "@/components/home/HumanSection";
import FinalCta from "@/components/shared/FinalCta";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Enterprise IT Solutions & Technology Services in Lagos, Nigeria",
  description:
    "GEAA Technologies is a Lagos-based enterprise technology company delivering infrastructure, cloud & Microsoft 365, cybersecurity, networking, devices, managed IT support and governance for organisations across Nigeria.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <ServicesDirectory />
      <EcosystemSection />
      <WhyGeaa />
      <WhatWeDeliver />
      <TechStack />
      <HumanSection />
      <FinalCta
        headline="Ready to build a stronger technology foundation?"
        primaryLabel="Get a Quote"
        primaryHref="mailto:hello@geaatech.com"
        secondaryLabel="Talk to GEAA"
        secondaryHref="tel:08074696508"
      />
    </>
  );
}
