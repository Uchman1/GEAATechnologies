import Reveal from "@/components/motion/Reveal";
import LearningPath from "@/components/training/LearningPath";

export default function LearningPathSection() {
  return (
    <section className="bg-navy py-24 text-white lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Reveal className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Learning in motion</h2>
          <p className="mt-4 text-base text-white/50 sm:text-lg">
            Not a fixed course &mdash; a description of how confidence with a
            system actually builds.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-16 lg:mt-20">
          <LearningPath />
        </Reveal>
      </div>
    </section>
  );
}
