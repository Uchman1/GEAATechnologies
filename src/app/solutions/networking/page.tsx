import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import TopologySection from "@/components/networking/TopologySection";
import PerformanceReliability from "@/components/networking/PerformanceReliability";
import CapabilityDirectory from "@/components/shared/CapabilityDirectory";
import ProcessSteps from "@/components/shared/ProcessSteps";
import RelatedSolutions from "@/components/shared/RelatedSolutions";
import FinalCta from "@/components/shared/FinalCta";
import { networkingCapabilities, networkingProcess, services } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Networking",
  description:
    "GEAA Technologies designs and deploys the LAN, WAN, Wi-Fi and business connectivity that keeps offices, users and systems working as one network.",
  path: "/solutions/networking",
});

export default function NetworkingPage() {
  const service = services.find((s) => s.slug === "networking")!;

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
        headlineLines={["Everything connected.", "Everything working."]}
        supporting="GEAA Technologies designs and deploys the network that connects your offices, users and systems — and keeps them connected."
        readoutLeft="Network topology & connectivity"
        readoutRight="Design, deployment & support"
      />
      <TopologySection />
      <PerformanceReliability />
      <CapabilityDirectory
        title="What GEAA delivers"
        intro="Seven areas of networking capability, from the cable in the wall to the link out to the internet."
        items={networkingCapabilities}
        theme="dark"
      />
      <ProcessSteps title="How we work" steps={networkingProcess} />
      <RelatedSolutions
        title="Part of one connected system"
        description="A network is only as good as what's running on it. It depends on the infrastructure it serves, the security that protects it, and the team that keeps it healthy."
        current="Networking"
        related={[
          { title: "Enterprise Infrastructure", slug: "enterprise-infrastructure" },
          { title: "Cybersecurity", slug: "cybersecurity" },
          { title: "Cloud & Microsoft 365", slug: "cloud-microsoft-365" },
          { title: "Managed IT & Support", slug: "managed-it-support" },
        ]}
        theme="light"
      />
      <FinalCta
        headline="A network built to carry the business, not just survive it."
        primaryLabel="Design My Network"
        primaryHref="tel:08074696508"
        secondaryLabel="Get a Quote"
        secondaryHref="mailto:hello@geaatech.com"
      />
    </>
  );
}
