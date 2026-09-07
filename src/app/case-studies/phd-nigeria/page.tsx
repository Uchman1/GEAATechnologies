import type { Metadata } from "next";
import CaseStudyDetailTemplate from "@/components/case-studies/CaseStudyDetailTemplate";
import { caseStudies } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

const study = caseStudies.find((s) => s.slug === "phd-nigeria")!;

export const metadata: Metadata = buildMetadata({
  title: study.client,
  description: study.summary,
  path: "/case-studies/phd-nigeria",
});

export default function PhdNigeriaPage() {
  return <CaseStudyDetailTemplate study={study} />;
}
