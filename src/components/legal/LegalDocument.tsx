import type { ReactNode } from "react";

type LegalDocumentProps = {
  title: string;
  lastUpdated: string;
  children: ReactNode;
};

/**
 * Shared shell for legal/reference pages \u2014 deliberately plain: no
 * hero, no diagram, no CTA-heavy layout. Just a readable document
 * using the site's existing type scale and colours.
 */
export default function LegalDocument({ title, lastUpdated, children }: LegalDocumentProps) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">{title}</h1>
        <p className="mt-3 font-mono text-xs text-muted">Last updated: {lastUpdated}</p>
        <div className="mt-12 space-y-10">{children}</div>
      </div>
    </section>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-ink sm:text-2xl">{heading}</h2>
      <div className="mt-3 space-y-4 text-base leading-relaxed text-muted [&_a]:text-geaa-blue [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-navy-deep [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </div>
  );
}
