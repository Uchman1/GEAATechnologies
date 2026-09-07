import type { Metadata } from "next";
import CaseStudyDetailTemplate from "@/components/case-studies/CaseStudyDetailTemplate";
import { caseStudies } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

const study = caseStudies.find((s) => s.slug === "sashamc-lexlyn-grc")!;

export const metadata: Metadata = buildMetadata({
  title: study.client,
  description: study.summary,
  path: "/case-studies/sashamc-lexlyn-grc",
});

export default function SashamcLexlynGrcPage() {
  return <CaseStudyDetailTemplate study={study} />;
}
