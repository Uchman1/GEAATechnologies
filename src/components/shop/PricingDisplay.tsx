import type { Product } from "@/lib/site-data";

/**
 * Renders customer-facing pricing per the product's pricingModel.
 * VENDOR_PRICED shows official reference prices per configuration,
 * always paired with a note that GEAA's final quote can differ.
 * MARKET_PRICED and QUOTE_REQUIRED never show a number \u2014 there
 * isn't one to show. No internal cost/margin field is ever read here.
 */
export default function PricingDisplay({ product }: { product: Product }) {
  return (
    <div className="border border-ink/10 bg-light p-6 sm:p-8">
      <p className="font-mono text-xs text-muted">{product.customerPricingLabel}</p>
      <p className="mt-3 text-base leading-relaxed text-ink">
        {product.customerPricingDescription}
      </p>

      {product.pricingModel === "VENDOR_PRICED" && product.configurations.length > 0 && (
        <div className="mt-6 space-y-4 border-t border-ink/10 pt-6">
          {product.configurations.map((config) => (
            <div key={config.name} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <span className="font-medium text-ink">{config.name}</span>
              {config.vendorReferencePrice !== undefined && (
                <span className="font-mono text-sm text-muted">
                  {config.vendorCurrency === "USD" ? "$" : `${config.vendorCurrency} `}
                  {config.vendorReferencePrice.toFixed(2)} {config.billingPeriod}
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      {product.vendorPriceSource && product.lastPriceChecked && (
        <p className="mt-6 font-mono text-[11px] text-muted/70">
          Source: {product.manufacturer}&rsquo;s official pricing page. Checked {product.lastPriceChecked}.
        </p>
      )}
    </div>
  );
}
