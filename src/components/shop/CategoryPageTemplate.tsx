import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/motion/Reveal";
import FinalCta from "@/components/shared/FinalCta";
import ProductCard from "@/components/shop/ProductCard";
import EmptyCategoryState from "@/components/shop/EmptyCategoryState";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";
import { products, type ShopCategory } from "@/lib/site-data";

/**
 * Shows real products where they exist for this category (Page 16),
 * and an honest empty state everywhere else \u2014 never invented SKUs.
 */
export default function CategoryPageTemplate({ category }: { category: ShopCategory }) {
  const categoryProducts = products.filter((p) => p.categorySlug === category.slug);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Shop", path: "/shop" },
          { name: category.name, path: `/shop/${category.slug}` },
        ])}
      />
      <PageHero
        headlineLines={[category.name]}
        supporting={category.description}
        ctas={[
          { label: "Request Pricing", href: "mailto:hello@geaatech.com" },
          { label: "Talk to Sales", href: "tel:08074696508", variant: "outline" },
        ]}
        readoutLeft="GEAA Shop"
        readoutRight={`${categoryProducts.length || "No"} product${categoryProducts.length === 1 ? "" : "s"} listed`}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <p className="text-center font-mono text-xs text-muted">
            {categoryProducts.length > 0 ? "What's available" : "Products in this category"}
          </p>
          {categoryProducts.length > 0 ? (
            <div className="mt-8 border-t border-ink/10">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="mt-8">
              <EmptyCategoryState />
            </div>
          )}
        </div>
      </section>

      <section className="bg-light py-16 lg:py-20">
        <Reveal className="mx-auto max-w-2xl px-6 text-center lg:px-10">
          <p className="text-sm text-muted">
            This category connects to GEAA&rsquo;s wider{" "}
            <Link
              href={`/solutions/${category.relatedService.slug}`}
              className="focus-ring font-medium text-geaa-blue underline underline-offset-2 hover:text-navy-deep"
            >
              {category.relatedService.title}
            </Link>{" "}
            capability.
          </p>
        </Reveal>
      </section>

      <FinalCta
        headline={`Ready to talk about ${category.name.toLowerCase()}?`}
        supportingCopy="Tell GEAA what you need and you'll hear back with pricing shaped around your requirement."
        primaryLabel="Request Pricing"
        primaryHref="mailto:hello@geaatech.com"
        secondaryLabel="Talk to Sales"
        secondaryHref="tel:08074696508"
      />
    </>
  );
}
