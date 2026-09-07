import Link from "next/link";
import { company } from "@/lib/site-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-navy-deep text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="text-lg font-bold text-white">GEAA</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              {company.tagline}
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-white/50">
              Get in touch
            </p>
            <p className="mt-4 text-sm leading-relaxed">{company.address}</p>
            <a
              href={`tel:${company.phone.replace(/\s+/g, "")}`}
              className="focus-ring mt-2 inline-block text-sm text-white transition-colors hover:text-electric-cyan"
            >
              {company.phone}
            </a>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-white/50">
              Solutions
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/solutions" className="focus-ring hover:text-white">
                  What we do
                </Link>
              </li>
              <li>
                <Link href="/#why-geaa" className="focus-ring hover:text-white">
                  Why GEAA
                </Link>
              </li>
              <li>
                <Link href="/about" className="focus-ring hover:text-white">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="focus-ring hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="focus-ring hover:text-white">
              Terms of Use
            </Link>
            <p className="font-mono">{company.domain}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
