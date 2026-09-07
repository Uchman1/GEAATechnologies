import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ProtectAtEveryLayer from "@/components/cybersecurity/ProtectAtEveryLayer";
import CapabilityDirectory from "@/components/shared/CapabilityDirectory";
import RelatedSolutions from "@/components/shared/RelatedSolutions";
import FinalCta from "@/components/shared/FinalCta";
import { cybersecurityCapabilities, services } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Cybersecurity",
  description:
    "GEAA Technologies builds security into how the business operates — endpoint, network, email and threat protection, deployed and supported as one system.",
  path: "/solutions/cybersecurity",
});

export default function CybersecurityPage() {
  const service = services.find((s) => s.slug === "cybersecurity")!;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: service.title, path: `/solutions/${service.slug}` },
        ])}
      />
      <JsonLd data={serviceSchema(service)} />
      <PageHero
        headlineLines={[
          "Security should be built into",
          "the way your business operates.",
        ]}
        supporting="GEAA Technologies protects the systems your business runs on — endpoints, network, email and identity — as one connected practice, not a checklist."
        readoutLeft="Enterprise security posture"
        readoutRight="Deployment & ongoing support"
      />
      <ProtectAtEveryLayer />
      <CapabilityDirectory
        title="What GEAA delivers"
        intro="Six areas of security capability, deployed and supported as an ongoing practice — using tools including Sophos, not installed once and left alone."
        items={cybersecurityCapabilities}
        theme="dark"
      />
      <RelatedSolutions
        title="Part of one connected system"
        description="Security isn't a bolt-on. It depends on the network it protects, the infrastructure it runs on, and the team that keeps it current."
        current="Cybersecurity"
        related={[
          { title: "Enterprise Infrastructure", slug: "enterprise-infrastructure" },
          { title: "Cloud & Microsoft 365", slug: "cloud-microsoft-365" },
          { title: "Networking", slug: "networking" },
          { title: "Managed IT & Support", slug: "managed-it-support" },
        ]}
        theme="light"
      />
      <FinalCta
        headline="Security built into the business, not bolted onto it afterward."
        primaryLabel="Secure Your Environment"
        primaryHref="tel:08074696508"
        secondaryLabel="Get a Quote"
        secondaryHref="mailto:hello@geaatech.com"
      />
    </>
  );
}
