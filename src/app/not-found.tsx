import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-light py-20">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
        <p className="font-mono text-xs uppercase tracking-wide text-muted">404</p>
        <h1 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl">
          This page doesn&rsquo;t exist.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          The page you&rsquo;re looking for may have moved or the link may be
          out of date. Here are a few places to start instead.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="focus-ring rounded-full bg-geaa-blue px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-electric-cyan hover:text-navy-deep"
          >
            Go to homepage
          </Link>
          <Link
            href="/solutions"
            className="focus-ring rounded-full border border-ink/15 px-6 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink/30"
          >
            View solutions
          </Link>
          <Link
            href="/contact"
            className="focus-ring rounded-full border border-ink/15 px-6 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink/30"
          >
            Contact GEAA
          </Link>
        </div>
      </div>
    </section>
  );
}
