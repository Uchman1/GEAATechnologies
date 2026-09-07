type LocationMotifProps = {
  className?: string;
};

/**
 * Abstract coordinate/locator graphic standing in for a literal photo
 * or map embed. Rings + crosshair + marked point, styled as a
 * technical readout rather than decoration for its own sake.
 */
export default function LocationMotif({ className }: LocationMotifProps) {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="160" cy="160" r="140" stroke="currentColor" strokeOpacity="0.12" />
      <circle cx="160" cy="160" r="96" stroke="currentColor" strokeOpacity="0.16" />
      <circle cx="160" cy="160" r="52" stroke="currentColor" strokeOpacity="0.22" />
      <line x1="160" y1="8" x2="160" y2="312" stroke="currentColor" strokeOpacity="0.1" />
      <line x1="8" y1="160" x2="312" y2="160" stroke="currentColor" strokeOpacity="0.1" />
      <circle cx="160" cy="160" r="5" fill="var(--color-electric-cyan)" />
      <circle
        cx="160"
        cy="160"
        r="14"
        stroke="var(--color-electric-cyan)"
        strokeOpacity="0.5"
      />
    </svg>
  );
}
