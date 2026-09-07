import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { services, caseStudies, shopCategories, products } from "@/lib/site-data";

/**
 * Generated from the same data every page pulls from, so a new
 * service/case-study/category/product added to site-data.ts is
 * picked up here automatically \u2014 nothing to remember to update
 * separately.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/about",
    "/solutions",
    "/industries",
    "/insights",
    "/case-studies",
    "/shop",
    "/contact",
    "/support",
    "/privacy-policy",
    "/terms-of-use",
  ];

  const solutionRoutes = services.map((s) => `/solutions/${s.slug}`);
  const caseStudyRoutes = caseStudies.map((c) => `/case-studies/${c.slug}`);
  const shopCategoryRoutes = shopCategories.map((c) => `/shop/${c.slug}`);
  const productRoutes = products.map((p) => `/shop/${p.categorySlug}/${p.slug}`);

  const allPaths = [
    ...staticRoutes,
    ...solutionRoutes,
    ...caseStudyRoutes,
    ...shopCategoryRoutes,
    ...productRoutes,
  ];

  const priorityFor = (path: string): number => {
    if (path === "/") return 1;
    if (path === "/solutions" || path === "/shop") return 0.8;
    if (path.startsWith("/solutions/")) return 0.8;
    return 0.6;
  };

  return allPaths.map((path) => ({
    url: `${siteConfig.url}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: priorityFor(path),
  }));
}
