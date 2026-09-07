/**
 * Renders a JSON-LD structured-data block. Server component \u2014 no
 * "use client" needed, this never runs in the browser.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
