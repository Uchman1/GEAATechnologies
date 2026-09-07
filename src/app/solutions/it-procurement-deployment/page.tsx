import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import RequirementOutcomeSection from "@/components/procurement/RequirementOutcomeSection";
import OutcomeNotABox from "@/components/procurement/OutcomeNotABox";
import CapabilityDirectory from "@/components/shared/CapabilityDirectory";
import RelatedSolutions from "@/components/shared/RelatedSolutions";
import FinalCta from "@/components/shared/FinalCta";
import { procurementCapabilities, services } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "IT Procurement & Deployment",
  description:
    "GEAA Technologies sources and deploys hardware, software and licensing as one outcome — from requirement to working, configured technology.",
  path: "/solutions/it-procurement-deployment",
});

export default function ItProcurementDeploymentPage() {
  const service = services.find((s) => s.slug === "it-procurement-deployment")!;

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
        headlineLines={["From specification", "to deployment."]}
        supporting="GEAA Technologies helps organisations source and deploy the technology they need — as one outcome, not a delivery followed by a separate project."
        readoutLeft="Procurement & deployment"
        readoutRight="Specify. Source. Deploy."
      />
      <RequirementOutcomeSection />
      <OutcomeNotABox />
      <CapabilityDirectory
        title="What GEAA delivers"
        intro="Procurement and deployment across the same five areas, sourced and installed as one requirement."
        items={procurementCapabilities}
        theme="light"
      />
      <RelatedSolutions
        title="Part of one connected system"
        description="Procurement is rarely just procurement. It connects to the infrastructure it's built into, the devices it equips, and the licensing it activates."
        current="IT Procurement & Deployment"
        related={[
          { title: "Enterprise Infrastructure", slug: "enterprise-infrastructure" },
          { title: "Devices & Hardware", slug: "devices-hardware" },
          { title: "Software & Licensing", slug: "software-licensing" },
          { title: "Managed IT & Support", slug: "managed-it-support" },
        ]}
        theme="dark"
      />
      <FinalCta
        headline="Procurement that ends in a working desk, not a delivery note."
        primaryLabel="Request a Procurement Quote"
        primaryHref="mailto:hello@geaatech.com"
        secondaryLabel="Talk to GEAA"
        secondaryHref="tel:08074696508"
      />
    </>
  );
}
