import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/motion/Reveal";
import RelatedSolutions from "@/components/shared/RelatedSolutions";
import FinalCta from "@/components/shared/FinalCta";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, caseStudySchema } from "@/lib/structured-data";
import type { CaseStudy } from "@/lib/site-data";

export default function CaseStudyDetailTemplate({ study }: { study: CaseStudy }) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/case-studies" },
          { name: study.client, path: `/case-studies/${study.slug}` },
        ])}
      />
      <JsonLd data={caseStudySchema(study)} />
      <PageHero
        headlineLines={[study.client]}
        supporting={study.positioning}
        readoutLeft="Case study"
        readoutRight={study.status}
      />

      <section className="bg-white py-20 lg:py-28">
        <Reveal className="mx-auto max-w-3xl px-6 lg:px-10">
          <p className="font-mono text-xs text-muted">Context</p>
          <p className="mt-3 text-lg leading-relaxed text-ink sm:text-xl">{study.context}</p>

          <p className="mt-10 font-mono text-xs text-muted">Requirement</p>
          <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">{study.requirement}</p>
        </Reveal>
      </section>

      <section className="bg-navy py-20 text-white lg:py-28">
        <Reveal className="mx-auto max-w-3xl px-6 lg:px-10">
          <h2 className="text-2xl font-bold sm:text-3xl">What GEAA delivered</h2>
          <ul className="mt-8 space-y-4 border-t border-white/10 pt-8">
            {study.geaaRole.map((item) => (
              <li key={item} className="flex gap-4 border-b border-white/10 pb-4 text-base text-white/70 sm:text-lg">
                <span aria-hidden="true" className="text-electric-cyan">&mdash;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="bg-light py-20 lg:py-28">
        <Reveal className="mx-auto max-w-3xl px-6 lg:px-10">
          <p className="font-mono text-xs text-muted">Engagement status</p>
          <p className="mt-3 text-lg text-ink sm:text-xl">{study.status}</p>

          <p className="mt-10 font-mono text-xs text-muted">Outcome</p>
          <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">{study.outcome}</p>
        </Reveal>
      </section>

      <RelatedSolutions
        title="Related solutions"
        description="This engagement drew on the following areas of GEAA's technology capability."
        current={study.client}
        related={study.relatedServices}
        theme="dark"
      />

      <FinalCta
        headline="Considering GEAA for a similar requirement?"
        supportingCopy="Talk to GEAA about infrastructure, security, workplace technology, governance or training for your organisation."
        primaryLabel="Talk to GEAA"
        primaryHref="tel:08074696508"
        secondaryLabel="Get a Quote"
        secondaryHref="mailto:hello@geaatech.com"
      />
    </>
  );
}
