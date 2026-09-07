import Reveal from "@/components/motion/Reveal";
import { technologies } from "@/lib/site-data";

export default function TechStack() {
  return (
    <section className="bg-light py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="font-mono text-xs text-muted">Technology we deploy</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-lg font-semibold text-ink/70 sm:text-xl"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
