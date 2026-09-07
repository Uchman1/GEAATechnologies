import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

type RelatedSolutionsProps = {
  title: string;
  description: string;
  current: string;
  related: { title: string; slug: string }[];
  theme?: "dark" | "light";
};

/**
 * Shows how one solution relates to others, without implying a
 * mandatory sequence — a chip cloud (current page highlighted, the
 * rest linked), not a directional flow diagram.
 */
export default function RelatedSolutions({
  title,
  description,
  current,
  related,
  theme = "light",
}: RelatedSolutionsProps) {
  const isDark = theme === "dark";

  return (
    <section className={isDark ? "bg-navy-deep py-24 text-white lg:py-32" : "bg-white py-24 lg:py-32"}>
      <Reveal className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <h2 className={`text-3xl font-bold sm:text-4xl ${isDark ? "text-white" : "text-ink"}`}>
          {title}
        </h2>
        <p className={`mx-auto mt-5 max-w-xl text-base sm:text-lg ${isDark ? "text-white/60" : "text-muted"}`}>
          {description}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <span
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              isDark ? "bg-electric-cyan text-navy-deep" : "bg-ink text-white"
            }`}
          >
            {current}
          </span>
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/solutions/${item.slug}`}
              className={`focus-ring rounded-full border px-4 py-2 text-sm transition-colors ${
                isDark
                  ? "border-white/15 text-white/70 hover:border-electric-cyan/60 hover:text-white"
                  : "border-ink/15 text-muted hover:border-geaa-blue/50 hover:text-ink"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
