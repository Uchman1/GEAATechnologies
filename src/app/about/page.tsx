import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import OurApproach from "@/components/about/OurApproach";
import WhatWeBelieve from "@/components/about/WhatWeBelieve";
import OurEnvironment from "@/components/about/OurEnvironment";
import WhyWeExist from "@/components/about/WhyWeExist";
import FinalCta from "@/components/shared/FinalCta";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "GEAA Technologies Limited is an enterprise technology company based in Lagos, Nigeria — helping organisations acquire, deploy, secure, connect and support the infrastructure their business depends on.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        headlineLines={[
          "Technology is only valuable",
          "when it moves the business forward.",
        ]}
        supporting="GEAA Technologies Limited is an enterprise technology company. We help organisations acquire, deploy, secure, connect and support the technology their business depends on."
        readoutLeft="Surulere, Lagos, Nigeria"
        readoutRight="Est. enterprise technology partner"
      />
      <WhoWeAre />
      <OurApproach />
      <WhatWeBelieve />
      <OurEnvironment />
      <WhyWeExist />
      <FinalCta
        headline="Let's build the right technology foundation."
        primaryLabel="Talk to GEAA"
        primaryHref="tel:08074696508"
        secondaryLabel="Get a Quote"
        secondaryHref="mailto:hello@geaatech.com"
      />
    </>
  );
}
