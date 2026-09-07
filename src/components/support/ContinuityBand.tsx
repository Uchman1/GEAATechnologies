import { continuityRhythm } from "@/lib/site-data";

/**
 * Not a process diagram — a continuous typographic rhythm. The
 * sequence repeats and scrolls rather than terminating, because the
 * point of this page is that the work doesn't stop. Content is
 * duplicated once so the marquee loop is seamless; reduced-motion
 * users simply see it sitting still, which still reads fine.
 */
export default function ContinuityBand() {
  const sequence = continuityRhythm.join("  \u2192  ") + "  \u2192  ";
  const content = (
    <span className="mx-4 text-3xl font-bold text-white/90 sm:text-4xl lg:text-5xl">
      {sequence}
    </span>
  );

  return (
    <div className="overflow-hidden border-y border-white/10 bg-navy py-8">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {content}
        {content}
      </div>
    </div>
  );
}
