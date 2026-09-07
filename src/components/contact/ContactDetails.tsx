import LocationMotif from "@/components/graphics/LocationMotif";
import { company } from "@/lib/site-data";

export default function ContactDetails() {
  return (
    <div className="lg:sticky lg:top-24">
      <div className="relative mx-auto aspect-square w-full max-w-[220px] text-ink/70">
        <LocationMotif className="h-full w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-center">
          <span className="font-mono text-[11px] text-muted">6.50&deg;N, 3.35&deg;E</span>
          <span className="font-mono text-[11px] text-muted">Surulere, Lagos</span>
        </div>
      </div>

      <div className="mt-8 space-y-4 text-center lg:text-left">
        <p className="text-sm leading-relaxed text-muted">{company.address}</p>
        <a
          href={`tel:${company.phone.replace(/\s+/g, "")}`}
          className="focus-ring block text-lg font-semibold text-ink transition-colors hover:text-geaa-blue"
        >
          {company.phone}
        </a>
        <p className="text-sm text-muted">
          Prefer to talk directly? Call or email &mdash; our team will get
          back to you.
        </p>
      </div>
    </div>
  );
}
