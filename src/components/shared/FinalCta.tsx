import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

type FinalCtaProps = {
  headline: string;
  supportingCopy?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

// Internal paths (e.g. "/shop") get Next's Link; tel:/mailto:/external
// hrefs stay as plain anchors.
function isInternalPath(href: string) {
  return href.startsWith("/");
}

function CtaLink({ href, className, children }: { href: string; className: string; children: string }) {
  if (isInternalPath(href)) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export default function FinalCta({
  headline,
  supportingCopy,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: FinalCtaProps) {
  return (
    <section className="bg-navy-deep py-28 text-white lg:py-36">
      <Reveal className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
          {headline}
        </h2>
        {supportingCopy && (
          <p className="mx-auto mt-5 max-w-xl text-base text-white/60 sm:text-lg">
            {supportingCopy}
          </p>
        )}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <CtaLink
            href={primaryHref}
            className="focus-ring rounded-full bg-electric-cyan px-8 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-white"
          >
            {primaryLabel}
          </CtaLink>
          <CtaLink
            href={secondaryHref}
            className="focus-ring rounded-full border border-white/25 px-8 py-3 text-sm font-medium text-white transition-colors hover:border-white/60"
          >
            {secondaryLabel}
          </CtaLink>
        </div>
      </Reveal>
    </section>
  );
}
