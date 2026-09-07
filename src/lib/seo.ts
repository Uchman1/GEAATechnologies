import type { Metadata } from "next";

/**
 * Central site-wide SEO configuration. Only confirmed facts \u2014
 * nothing here should ever include invented hours, ratings, awards,
 * certifications, or registration numbers.
 */
export const siteConfig = {
  name: "GEAA Technologies Limited",
  shortName: "GEAA Technologies",
  url: "https://geaatech.com",
  locale: "en_NG",
  defaultTitle: "GEAA Technologies Limited | Enterprise Technology That Moves Business Forward",
  defaultDescription:
    "GEAA Technologies helps organisations acquire, deploy, secure, connect and support the technology infrastructure their businesses depend on.",
};

type BuildMetadataInput = {
  /** Page-specific title \u2014 the site name is appended via the root layout's title template. */
  title: string;
  description: string;
  /** Route path starting with "/", e.g. "/solutions/cybersecurity" or "/" for home. */
  path: string;
};

/**
 * Produces a complete, consistent Metadata object (title, description,
 * canonical, Open Graph, Twitter) from just a title/description/path \u2014
 * so every page gets full coverage without repeating boilerplate.
 *
 * No social preview image is set: GEAA doesn't yet have a branded OG
 * image asset, and a fabricated one would create a broken/misleading
 * preview. Twitter card is "summary" (not "summary_large_image") for
 * the same reason \u2014 add an image and upgrade the card type once a
 * real asset exists.
 */
export function buildMetadata({ title, description, path }: BuildMetadataInput): Metadata {
  const absoluteUrl = `${siteConfig.url}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
