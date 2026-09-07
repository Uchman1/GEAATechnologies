import Reveal from "@/components/motion/Reveal";
import { securityAwarenessTopics } from "@/lib/site-data";

export default function SecurityAwareness() {
  return (
    <section className="bg-light py-20 lg:py-28">
      <Reveal className="mx-auto max-w-3xl px-6 lg:px-10">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Good security habits are learned, too.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          Alongside systems and software, training covers the everyday
          practices that keep an organisation&rsquo;s technology safer
          &mdash; without turning every session into a security briefing.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {securityAwarenessTopics.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-ink/15 px-4 py-1.5 text-sm text-ink/70"
            >
              {topic}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
