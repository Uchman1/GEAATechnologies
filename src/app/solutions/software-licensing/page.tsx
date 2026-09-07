import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import EstateRegisterSection from "@/components/software/EstateRegisterSection";
import CapabilityDirectory from "@/components/shared/CapabilityDirectory";
import RelatedSolutions from "@/components/shared/RelatedSolutions";
import FinalCta from "@/components/shared/FinalCta";
import { softwareCapabilities, services } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Software & Licensing",
  description:
    "GEAA Technologies manages business software and licensing as one organised estate — Microsoft 365, Zoho and line-of-business applications, tracked and renewed properly.",
  path: "/solutions/software-licensing",
});

export default function SoftwareLicensingPage() {
  const service = services.find((s) => s.slug === "software-licensing")!;

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
        headlineLines={["The software your business", "depends on."]}
        supporting="GEAA Technologies manages the software and licensing a business runs on as one organised estate, not a folder of expiring subscriptions."
        readoutLeft="Software & licensing"
        readoutRight="Estate management & renewals"
      />
      <EstateRegisterSection />
      <CapabilityDirectory
        title="What GEAA delivers"
        intro="Six areas of software and licensing capability, covering what the business runs and what it's licensed to run."
        items={softwareCapabilities}
        theme="light"
      />
      <RelatedSolutions
        title="Part of one connected system"
        description="Software licensing doesn't stand alone. It connects to the cloud tenancy it runs in, the team that manages it, and the hardware it's provisioned onto."
        current="Software & Licensing"
        related={[
          { title: "Cloud & Microsoft 365", slug: "cloud-microsoft-365" },
          { title: "Managed IT & Support", slug: "managed-it-support" },
          { title: "IT Procurement & Deployment", slug: "it-procurement-deployment" },
          { title: "Cybersecurity", slug: "cybersecurity" },
        ]}
        theme="dark"
      />
      <FinalCta
        headline="A software estate that's organised, not just installed."
        primaryLabel="Request Licensing Quote"
        primaryHref="mailto:hello@geaatech.com"
        secondaryLabel="Talk to GEAA"
        secondaryHref="tel:08074696508"
      />
    </>
  );
}
