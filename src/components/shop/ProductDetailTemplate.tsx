import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import PricingDisplay from "@/components/shop/PricingDisplay";
import RelatedSolutions from "@/components/shared/RelatedSolutions";
import FinalCta from "@/components/shared/FinalCta";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, productSchema } from "@/lib/structured-data";
import type { Product, ShopCategory } from "@/lib/site-data";

function buildEnquiryMailto(product: Product) {
  const subject = encodeURIComponent(`Pricing request \u2014 ${product.name}`);
  const body = encodeURIComponent(
    `Product: ${product.name}\nManufacturer: ${product.manufacturer}\nCategory: ${product.categorySlug}\n\nQuantity:\nRequirements / configuration:\nTimeline:\nAdditional notes:\n`
  );
  return `mailto:hello@geaatech.com?subject=${subject}&body=${body}`;
}

export default function ProductDetailTemplate({
  product,
  category,
}: {
  product: Product;
  category: ShopCategory;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Shop", path: "/shop" },
          { name: category.name, path: `/shop/${category.slug}` },
          { name: product.name, path: `/shop/${category.slug}/${product.slug}` },
        ])}
      />
      <JsonLd data={productSchema(product, category)} />
      <section className="bg-navy-deep py-16 text-white lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <nav aria-label="Breadcrumb" className="font-mono text-xs text-white/40">
            <Link href="/shop" className="focus-ring hover:text-white">Shop</Link>
            {" / "}
            <Link href={`/shop/${category.slug}`} className="focus-ring hover:text-white">{category.name}</Link>
            {" / "}
            <span className="text-white/60">{product.name}</span>
          </nav>

          <p className="mt-6 font-mono text-xs text-electric-cyan">{product.manufacturer}</p>
          <h1 className="mt-2 text-3xl font-extrabold sm:text-5xl">{product.name}</h1>
          <p className="mt-5 max-w-xl text-base text-white/70 sm:text-lg">{product.shortDescription}</p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <Reveal className="mx-auto max-w-4xl px-6 lg:px-10">
          <p className="text-lg leading-relaxed text-ink sm:text-xl">{product.description}</p>

          {product.keySpecs.length > 0 && (
            <div className="mt-10 border-t border-ink/10 pt-8">
              <p className="font-mono text-xs text-muted">Key specifications</p>
              <ul className="mt-4 space-y-2">
                {product.keySpecs.map((spec) => (
                  <li key={spec} className="text-base text-ink/80">{spec}</li>
                ))}
              </ul>
            </div>
          )}

          {product.useCases.length > 0 && (
            <div className="mt-10 border-t border-ink/10 pt-8">
              <p className="font-mono text-xs text-muted">Suitable for</p>
              <ul className="mt-4 space-y-2">
                {product.useCases.map((useCase) => (
                  <li key={useCase} className="text-base text-ink/80">{useCase}</li>
                ))}
              </ul>
            </div>
          )}
        </Reveal>
      </section>

      <section className="bg-light py-16 lg:py-20">
        <Reveal className="mx-auto max-w-4xl px-6 lg:px-10">
          <PricingDisplay product={product} />
        </Reveal>
      </section>

      <section className="bg-navy py-16 text-white lg:py-20">
        <Reveal className="mx-auto max-w-2xl px-6 text-center lg:px-10">
          <p className="font-mono text-xs text-white/40">How pricing works here</p>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Request pricing, and GEAA&rsquo;s sales team reviews the
            requirement, clarifies configuration and quantity, and works
            through any negotiation before a quote is issued and an order
            is placed. No cart, no checkout on this page.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={buildEnquiryMailto(product)}
              className="focus-ring rounded-full bg-electric-cyan px-7 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-white"
            >
              Request Pricing
            </a>
            <a
              href="tel:08074696508"
              className="focus-ring rounded-full border border-white/25 px-7 py-3 text-sm font-medium text-white transition-colors hover:border-white/60"
            >
              Talk to Sales
            </a>
          </div>
        </Reveal>
      </section>

      <RelatedSolutions
        title="Related GEAA services"
        description={`${product.name} connects to the following areas of GEAA's technology capability.`}
        current={product.name}
        related={product.relatedServices}
        theme="light"
      />

      <FinalCta
        headline={`Ready to talk about ${product.name}?`}
        supportingCopy="Tell GEAA your quantity and requirements, and you'll hear back with pricing shaped around them."
        primaryLabel="Request Pricing"
        primaryHref="mailto:hello@geaatech.com"
        secondaryLabel="Talk to Sales"
        secondaryHref="tel:08074696508"
      />
    </>
  );
}
