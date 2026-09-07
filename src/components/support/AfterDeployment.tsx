import Reveal from "@/components/motion/Reveal";

export default function AfterDeployment() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Reveal className="mx-auto max-w-3xl px-6 lg:px-10">
        <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[2.5rem]">
          Most technology projects end at go-live. Ours doesn&rsquo;t.
        </h2>
        <p className="mt-8 text-base leading-relaxed text-muted sm:text-lg">
          A server that&rsquo;s been running for a year still needs patches.
          A laptop fleet still needs someone watching for problems before an
          employee notices them. A vendor issue still needs someone to chase
          it down. GEAA stays engaged after the deployment is finished — not
          as an afterthought, but as an ongoing part of how the technology
          keeps working.
        </p>
      </Reveal>
    </section>
  );
}
