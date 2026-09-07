import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import LearningPathSection from "@/components/training/LearningPathSection";
import HumanSideOfTechnology from "@/components/training/HumanSideOfTechnology";
import CapabilityDirectory from "@/components/shared/CapabilityDirectory";
import TrainingMeetsTechnology from "@/components/training/TrainingMeetsTechnology";
import WhereTrainingFits from "@/components/training/WhereTrainingFits";
import PracticalNotCatalogue from "@/components/training/PracticalNotCatalogue";
import EngagementModel from "@/components/training/EngagementModel";
import SecurityAwareness from "@/components/training/SecurityAwareness";
import RelatedSolutions from "@/components/shared/RelatedSolutions";
import FinalCta from "@/components/shared/FinalCta";
import { trainingCapabilities, services } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Technology Training",
  description:
    "Hands-on technology training that helps staff confidently use the systems, software and security practices their organisation relies on.",
  path: "/solutions/technology-training",
});

export default function TechnologyTrainingPage() {
  const service = services.find((s) => s.slug === "technology-training")!;

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
        headlineLines={["Technology works", "when people know how to use it."]}
        supporting="Hands-on technology training that helps staff confidently use the systems, software and security practices their organisation relies on."
        ctas={[
          { label: "Talk to GEAA", href: "tel:08074696508" },
          { label: "Request a Quote", href: "mailto:hello@geaatech.com", variant: "outline" },
        ]}
        readoutLeft="User, system & workflow"
        readoutRight="Practice, adoption & security"
      />
      <LearningPathSection />
      <HumanSideOfTechnology />
      <CapabilityDirectory
        title="What GEAA trains"
        intro="Five practical training areas, shaped around the technology an organisation already runs."
        items={trainingCapabilities}
        theme="dark"
      />
      <TrainingMeetsTechnology />
      <WhereTrainingFits />
      <PracticalNotCatalogue />
      <EngagementModel />
      <SecurityAwareness />
      <RelatedSolutions
        title="Part of one connected system"
        description="Training works alongside the technology it covers \u2014 the cloud systems people adopt, the security habits they practise, and the support that keeps everything running."
        current="Technology Training"
        related={[
          { title: "Cloud & Microsoft 365", slug: "cloud-microsoft-365" },
          { title: "Cybersecurity", slug: "cybersecurity" },
          { title: "Managed IT & Support", slug: "managed-it-support" },
        ]}
        theme="light"
      />
      <FinalCta
        headline="Help your people use the technology you've invested in."
        supportingCopy="Talk to GEAA about practical training for the systems, software and security practices your organisation relies on."
        primaryLabel="Talk to GEAA"
        primaryHref="tel:08074696508"
        secondaryLabel="Request a Quote"
        secondaryHref="mailto:hello@geaatech.com"
      />
    </>
  );
}
