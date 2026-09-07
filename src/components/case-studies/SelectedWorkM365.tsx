import Reveal from "@/components/motion/Reveal";
import { m365SelectedWork } from "@/lib/site-data";

/**
 * One shared scope description, not four repetitive mini case
 * studies \u2014 the four clients share the same delivery scope, so
 * showing that once and then naming all four clients demonstrates
 * breadth honestly without inflating four similar engagements.
 */
export default function SelectedWorkM365() {
  return (
    <section className="bg-light py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            Microsoft 365 &mdash; selected engagements
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
            GEAA has delivered the same core Microsoft 365 scope for
            several organisations: licensing, user and domain
            configuration, account setup, email configuration, Teams,
            SharePoint, OneDrive, and ongoing administration and support.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-3">
          {m365SelectedWork.clients.map((client) => (
            <span
              key={client}
              className="rounded-full border border-ink/15 bg-white px-5 py-2 text-sm font-medium text-ink/80"
            >
              {client}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
