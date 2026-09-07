import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import GovernanceRegisterSection from "@/components/grc/GovernanceRegisterSection";
import WhyGovernanceMatters from "@/components/grc/WhyGovernanceMatters";
import GovernanceCapabilities from "@/components/grc/GovernanceCapabilities";
import ActivityVsGovernance from "@/components/grc/ActivityVsGovernance";
import GovernanceEstate from "@/components/grc/GovernanceEstate";
import GovernanceApproach from "@/components/grc/GovernanceApproach";
import GovernanceWorkshops from "@/components/grc/GovernanceWorkshops";
import RelatedSolutions from "@/components/shared/RelatedSolutions";
import FinalCta from "@/components/shared/FinalCta";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/site-data";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "GRC & IT Governance",
  description:
    "Practical governance, risk and compliance support for organisations making deliberate, defensible technology decisions.",
  path: "/solutions/grc-it-governance",
});

export default function GrcItGovernancePage() {
  const service = services.find((s) => s.slug === "grc-it-governance")!;

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
        headlineLines={["Technology needs", "governance, too."]}
        supporting="GEAA helps organisations put structure around technology governance, risk and policy decisions \u2014 so technology is managed deliberately rather than informally."
        ctas={[
          { label: "Talk to GEAA", href: "tel:08074696508" },
          { label: "Request a Quote", href: "mailto:hello@geaatech.com", variant: "outline" },
        ]}
        readoutLeft="Governance, risk & policy"
        readoutRight="Access, control & review"
      />
      <GovernanceRegisterSection />
      <WhyGovernanceMatters />
      <GovernanceCapabilities />
      <ActivityVsGovernance />
      <GovernanceEstate />
      <GovernanceApproach />
      <GovernanceWorkshops />
      <RelatedSolutions
        title="Part of one connected system"
        description="Governance rarely stands alone. It connects to the security it shapes, the licensing it oversees, the procurement it guides, and the support that keeps it current."
        current="GRC & IT Governance"
        related={[
          { title: "Cybersecurity", slug: "cybersecurity" },
          { title: "Software & Licensing", slug: "software-licensing" },
          { title: "IT Procurement & Deployment", slug: "it-procurement-deployment" },
          { title: "Managed IT & Support", slug: "managed-it-support" },
        ]}
        theme="light"
      />
      <FinalCta
        headline="Make technology decisions deliberately."
        supportingCopy="Talk to GEAA about governance, risk, policy or compliance considerations across your technology environment."
        primaryLabel="Talk to GEAA"
        primaryHref="tel:08074696508"
        secondaryLabel="Request a Quote"
        secondaryHref="mailto:hello@geaatech.com"
      />
    </>
  );
}
