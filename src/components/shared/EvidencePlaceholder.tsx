import Reveal from "@/components/motion/Reveal";

type EvidencePlaceholderProps = {
  note: string;
};

/**
 * Restrained stand-in for proof/case studies where none exist yet.
 * Deliberately quiet — no invented logos, numbers, or testimonials.
 */
export default function EvidencePlaceholder({ note }: EvidencePlaceholderProps) {
  return (
    <section className="bg-light py-20 lg:py-24">
      <Reveal className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="border border-dashed border-ink/15 px-8 py-14 text-center">
          <p className="font-mono text-xs text-muted">Selected work</p>
          <p className="mx-auto mt-4 max-w-md text-base text-muted">{note}</p>
        </div>
      </Reveal>
    </section>
  );
}
