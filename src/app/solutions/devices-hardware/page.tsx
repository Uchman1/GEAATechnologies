import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import CategoryShowcase from "@/components/devices/CategoryShowcase";
import DeviceTiers from "@/components/devices/DeviceTiers";
import ShopTransition from "@/components/devices/ShopTransition";
import RelatedSolutions from "@/components/shared/RelatedSolutions";
import FinalCta from "@/components/shared/FinalCta";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/site-data";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Devices & Hardware",
  description:
    "GEAA Technologies sources, configures and delivers business laptops, desktops, monitors, servers and everyday hardware — ready to work from day one.",
  path: "/solutions/devices-hardware",
});

export default function DevicesHardwarePage() {
  const service = services.find((s) => s.slug === "devices-hardware")!;

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
        headlineLines={["The right technology", "for the people using it."]}
        supporting="GEAA Technologies sources, configures and delivers the laptops, desktops and hardware your team actually needs — at fleet scale or one device at a time."
        readoutLeft="Devices & hardware"
        readoutRight="Sourcing & fleet configuration"
      />
      <CategoryShowcase />
      <DeviceTiers />
      <ShopTransition />
      <RelatedSolutions
        title="Part of one connected system"
        description="Devices are only as good as what supports them. They depend on the network they connect to, the security protecting them, and the team keeping them running."
        current="Devices & Hardware"
        related={[
          { title: "IT Procurement & Deployment", slug: "it-procurement-deployment" },
          { title: "Managed IT & Support", slug: "managed-it-support" },
          { title: "Cybersecurity", slug: "cybersecurity" },
          { title: "Networking", slug: "networking" },
        ]}
        theme="light"
      />
      <FinalCta
        headline="From a single laptop to a full office fit-out."
        primaryLabel="Shop Technology"
        primaryHref="/shop"
        secondaryLabel="Request a Quote"
        secondaryHref="mailto:hello@geaatech.com"
      />
    </>
  );
}
