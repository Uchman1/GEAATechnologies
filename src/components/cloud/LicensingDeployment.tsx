import Reveal from "@/components/motion/Reveal";

export default function LicensingDeployment() {
  return (
    <section className="bg-navy py-24 text-white lg:py-32">
      <Reveal className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Licensing & deployment
            </h2>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:border-l lg:border-white/15 lg:pl-10">
            <h3 className="text-lg font-semibold text-electric-cyan">
              Licensing
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">
              Microsoft 365 licensing gets confusing fast — the wrong plan
              means either paying for features nobody uses, or missing ones
              the business actually needs. We help organisations choose and
              manage licensing that matches how the team actually works.
            </p>

            <h3 className="mt-8 text-lg font-semibold text-electric-cyan">
              Deployment
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">
              Getting Microsoft 365 running well is more than turning it on.
              Mailboxes, Teams, SharePoint and OneDrive need proper
              configuration, and users need a rollout that doesn&rsquo;t
              disrupt their day. We handle that end to end.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
