import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import CaseStudyFeature from "@/components/case-studies/CaseStudyFeature";
import SelectedWorkM365 from "@/components/case-studies/SelectedWorkM365";
import DigitalWorkIndex from "@/components/case-studies/DigitalWorkIndex";
import TrainingWork from "@/components/case-studies/TrainingWork";
import FinalCta from "@/components/shared/FinalCta";
import { caseStudies } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies",
  description:
    "Real infrastructure, security, workplace technology, governance and training work GEAA Technologies has delivered.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        headlineLines={["Real engagements,", "real technology delivered."]}
        supporting="A look at the infrastructure, security, workplace technology, governance and training work GEAA has actually carried out."
        readoutLeft="Case studies & selected work"
        readoutRight="Delivered, not imagined"
      />

      <section className="bg-navy py-4 lg:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {caseStudies.map((study, i) => (
            <CaseStudyFeature key={study.slug} study={study} reversed={i % 2 === 1} />
          ))}
        </div>
      </section>

      <SelectedWorkM365 />
      <DigitalWorkIndex />
      <TrainingWork />

      <FinalCta
        headline="See what GEAA could deliver for you."
        supportingCopy="Talk to GEAA about infrastructure, security, workplace technology, governance or training for your organisation."
        primaryLabel="Talk to GEAA"
        primaryHref="tel:08074696508"
        secondaryLabel="Get a Quote"
        secondaryHref="mailto:hello@geaatech.com"
      />
    </>
  );
}
