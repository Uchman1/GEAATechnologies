import Reveal from "@/components/motion/Reveal";
import SupportCategorySelector from "@/components/support-page/SupportCategorySelector";

export default function SupportSelectorSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            What do you need help with?
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            Pick a category and we&rsquo;ll show you the fastest way to
            reach the team about it.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <SupportCategorySelector />
        </Reveal>
      </div>
    </section>
  );
}
