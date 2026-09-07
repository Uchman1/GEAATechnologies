import { company } from "@/lib/site-data";
import { siteConfig } from "@/lib/seo";
import type { Product, ShopCategory, Service, CaseStudy } from "@/lib/site-data";

/**
 * JSON-LD builders. Every one of these is deliberately limited to
 * facts already established elsewhere on the site (company.*,
 * service/product/case-study data) \u2014 none of them accept or invent
 * ratings, reviews, prices, availability, hours, founding dates,
 * certifications or registration numbers. That's not an oversight;
 * see the SEO audit report for why.
 */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    telephone: company.phone,
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    telephone: company.phone,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.name,
    url: siteConfig.url,
  };
}

export type BreadcrumbItem = { name: string; path: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: company.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    url: `${siteConfig.url}/solutions/${service.slug}`,
  };
}

/**
 * Deliberately has NO `offers` block \u2014 no price, priceCurrency or
 * availability. Hardware is market-priced and every product on the
 * site (including vendor-referenced software) is quote-based, not
 * sold directly through this website. Declaring a price here would
 * misrepresent GEAA's actual commercial pricing to search engines
 * and, by extension, to searchers.
 */
export function productSchema(product: Product, category: ShopCategory) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    category: category.name,
    ...(product.manufacturer && product.manufacturer !== "Multiple manufacturers"
      ? { brand: { "@type": "Brand", name: product.manufacturer } }
      : {}),
  };
}

export function caseStudySchema(study: CaseStudy) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.client,
    description: study.summary,
    url: `${siteConfig.url}/case-studies/${study.slug}`,
    about: study.positioning,
  };
}
