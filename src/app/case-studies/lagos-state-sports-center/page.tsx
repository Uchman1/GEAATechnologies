import type { Metadata } from "next";
import CaseStudyDetailTemplate from "@/components/case-studies/CaseStudyDetailTemplate";
import { caseStudies } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

const study = caseStudies.find((s) => s.slug === "lagos-state-sports-center")!;

export const metadata: Metadata = buildMetadata({
  title: study.client,
  description: study.summary,
  path: "/case-studies/lagos-state-sports-center",
});

export default function LagosStateSportsCenterPage() {
  return <CaseStudyDetailTemplate study={study} />;
}
