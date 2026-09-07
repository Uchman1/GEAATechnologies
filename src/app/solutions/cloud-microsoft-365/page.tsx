import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import CloudVisual from "@/components/cloud/CloudVisual";
import CapabilityDirectory from "@/components/shared/CapabilityDirectory";
import LicensingDeployment from "@/components/cloud/LicensingDeployment";
import RelatedSolutions from "@/components/shared/RelatedSolutions";
import EvidencePlaceholder from "@/components/shared/EvidencePlaceholder";
import FinalCta from "@/components/shared/FinalCta";
import { microsoft365Capabilities, cloudInfrastructureCapabilities, services } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Cloud & Microsoft 365",
  description:
    "GEAA Technologies deploys, migrates and supports Microsoft 365 — Exchange Online, Teams, SharePoint and OneDrive — along with the cloud infrastructure and licensing behind it.",
  path: "/solutions/cloud-microsoft-365",
});

export default function CloudMicrosoft365Page() {
  const service = services.find((s) => s.slug === "cloud-microsoft-365")!;

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
        headlineLines={["Work from anywhere.", "Operate with confidence."]}
        supporting="GEAA Technologies deploys and supports Microsoft 365 and the cloud infrastructure behind it, so teams can work from anywhere without losing control of how it's run."
        readoutLeft="Cloud & Microsoft 365"
        readoutRight="Deployment & user management"
      />
      <CloudVisual />
      <CapabilityDirectory
        title="Microsoft 365"
        intro="The applications most organisations already depend on, set up properly."
        items={microsoft365Capabilities}
        theme="dark"
      />
      <CapabilityDirectory
        title="Cloud infrastructure"
        intro="What sits behind Microsoft 365 so it keeps running reliably."
        items={cloudInfrastructureCapabilities}
        theme="light"
      />
      <LicensingDeployment />
      <RelatedSolutions
        title="Part of one connected system"
        description="Cloud identity and data don't stand alone. They depend on the network that reaches them, the security that protects them, and the team that keeps them running."
        current="Cloud & Microsoft 365"
        related={[
          { title: "Enterprise Infrastructure", slug: "enterprise-infrastructure" },
          { title: "Cybersecurity", slug: "cybersecurity" },
          { title: "Networking", slug: "networking" },
          { title: "Managed IT & Support", slug: "managed-it-support" },
        ]}
        theme="dark"
      />
      <EvidencePlaceholder note="Cloud and Microsoft 365 deployments will be documented here as they're completed." />
      <FinalCta
        headline="Microsoft 365, running the way your business actually works."
        primaryLabel="Talk to a Cloud Specialist"
        primaryHref="tel:08074696508"
        secondaryLabel="Get a Quote"
        secondaryHref="mailto:hello@geaatech.com"
      />
    </>
  );
}
