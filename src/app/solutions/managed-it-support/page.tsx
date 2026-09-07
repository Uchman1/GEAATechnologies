import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ContinuityBand from "@/components/support/ContinuityBand";
import AfterDeployment from "@/components/support/AfterDeployment";
import CapabilityDirectory from "@/components/shared/CapabilityDirectory";
import RelatedSolutions from "@/components/shared/RelatedSolutions";
import FinalCta from "@/components/shared/FinalCta";
import { supportCapabilities, services } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Managed IT & Support",
  description:
    "GEAA Technologies stays engaged after deployment — IT support, maintenance, monitoring and vendor coordination to keep technology environments operational.",
  path: "/solutions/managed-it-support",
});

export default function ManagedItSupportPage() {
  const service = services.find((s) => s.slug === "managed-it-support")!;

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
        headlineLines={["Technology doesn't stop", "after deployment."]}
        supporting="GEAA Technologies stays involved after go-live — supporting, maintaining and monitoring the technology your business runs on."
        readoutLeft="Managed IT & support"
        readoutRight="Ongoing operational continuity"
      />
      <ContinuityBand />
      <AfterDeployment />
      <CapabilityDirectory
        title="What GEAA delivers"
        intro="Seven areas of ongoing support, covering the people, devices and systems technology actually depends on."
        items={supportCapabilities}
        theme="dark"
      />
      <RelatedSolutions
        title="Part of one connected system"
        description="Support doesn't happen in isolation. It depends on the infrastructure being monitored, the network carrying it, and the licensing behind the software it covers."
        current="Managed IT & Support"
        related={[
          { title: "Enterprise Infrastructure", slug: "enterprise-infrastructure" },
          { title: "Networking", slug: "networking" },
          { title: "Cybersecurity", slug: "cybersecurity" },
          { title: "Software & Licensing", slug: "software-licensing" },
        ]}
        theme="light"
      />
      <FinalCta
        headline="Need technical support?"
        primaryLabel="Request Support"
        primaryHref="mailto:hello@geaatech.com"
        secondaryLabel="Talk to GEAA"
        secondaryHref="tel:08074696508"
      />
    </>
  );
}
