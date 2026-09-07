import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import InfrastructureVisual from "@/components/infrastructure/InfrastructureVisual";
import TheProblem from "@/components/infrastructure/TheProblem";
import CapabilityDirectory from "@/components/shared/CapabilityDirectory";
import ProcessSteps from "@/components/shared/ProcessSteps";
import RelatedSolutions from "@/components/shared/RelatedSolutions";
import EvidencePlaceholder from "@/components/shared/EvidencePlaceholder";
import FinalCta from "@/components/shared/FinalCta";
import { infrastructureCapabilities, infrastructureProcess, services } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Enterprise Infrastructure",
  description:
    "GEAA Technologies helps organisations deploy, maintain and support the servers, storage, backup and enterprise hardware their critical operations depend on.",
  path: "/solutions/enterprise-infrastructure",
});

export default function EnterpriseInfrastructurePage() {
  const service = services.find((s) => s.slug === "enterprise-infrastructure")!;

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
        headlineLines={["Enterprise", "Infrastructure"]}
        supporting="GEAA Technologies helps organisations deploy, maintain and support the infrastructure their critical operations depend on."
        readoutLeft="Infrastructure & core systems"
        readoutRight="Enterprise deployment & support"
      />
      <InfrastructureVisual />
      <TheProblem />
      <CapabilityDirectory
        title="What GEAA delivers"
        intro="Seven areas of infrastructure capability, structured so more can be added as the practice grows."
        items={infrastructureCapabilities}
        theme="light"
      />
      <ProcessSteps title="How we work" steps={infrastructureProcess} />
      <RelatedSolutions
        title="Part of one connected system"
        description="Infrastructure rarely stands alone. It works alongside the network that reaches it, the security that protects it, and the team that supports it."
        current="Enterprise Infrastructure"
        related={[
          { title: "Networking", slug: "networking" },
          { title: "Cybersecurity", slug: "cybersecurity" },
          { title: "Cloud & Microsoft 365", slug: "cloud-microsoft-365" },
          { title: "Managed IT & Support", slug: "managed-it-support" },
        ]}
        theme="light"
      />
      <EvidencePlaceholder note="Infrastructure projects will be documented here as they're completed." />
      <FinalCta
        headline="Build the infrastructure your business can depend on."
        primaryLabel="Discuss Your Infrastructure"
        primaryHref="tel:08074696508"
        secondaryLabel="Get a Quote"
        secondaryHref="mailto:hello@geaatech.com"
      />
    </>
  );
}
