import Reveal from "@/components/motion/Reveal";
import type { CapabilityItem } from "@/lib/site-data";

type CapabilityDirectoryProps = {
  title: string;
  intro?: string;
  items: CapabilityItem[];
  theme?: "dark" | "light";
};

/**
 * Editorial capability directory: large typographic rows separated by
 * thin rules, one small technical label per row. Not a card grid —
 * reusable across service detail pages.
 */
export default function CapabilityDirectory({
  title,
  intro,
  items,
  theme = "dark",
}: CapabilityDirectoryProps) {
  const isDark = theme === "dark";

  return (
    <section className={isDark ? "bg-navy py-24 lg:py-32" : "bg-light py-24 lg:py-32"}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <h2 className={`text-3xl font-bold sm:text-4xl ${isDark ? "text-white" : "text-ink"}`}>
            {title}
          </h2>
          {intro && (
            <p className={`mt-4 text-base sm:text-lg ${isDark ? "text-white/50" : "text-muted"}`}>
              {intro}
            </p>
          )}
        </Reveal>

        <Reveal
          delay={0.1}
          className={`mt-14 border-t lg:mt-20 ${isDark ? "border-white/10" : "border-ink/10"}`}
        >
          {items.map((item) => (
            <div
              key={item.name}
              className={`flex flex-col gap-2 border-b py-8 md:flex-row md:items-baseline md:justify-between md:gap-10 ${
                isDark ? "border-white/10" : "border-ink/10"
              }`}
            >
              <div className="md:max-w-md">
                <h3 className={`text-xl font-semibold sm:text-2xl ${isDark ? "text-white" : "text-ink"}`}>
                  {item.name}
                </h3>
                <p className={`mt-2 max-w-lg text-sm sm:text-base ${isDark ? "text-white/50" : "text-muted"}`}>
                  {item.description}
                </p>
              </div>
              <span
                className={`shrink-0 font-mono text-xs md:text-right ${
                  isDark ? "text-white/35" : "text-muted/80"
                }`}
              >
                {item.label}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
