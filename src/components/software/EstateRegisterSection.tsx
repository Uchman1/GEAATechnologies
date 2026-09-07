import Reveal from "@/components/motion/Reveal";
import EstateRegister from "@/components/software/EstateRegister";

export default function EstateRegisterSection() {
  return (
    <section className="bg-navy-deep py-24 text-white lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            A software estate, not a pile of subscriptions
          </h2>
          <p className="mt-4 text-base text-white/50 sm:text-lg">
            Every organisation already has one of these, whether it&rsquo;s
            written down or not. Ours just makes it visible.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 lg:mt-16">
          <EstateRegister />
        </Reveal>
      </div>
    </section>
  );
}
