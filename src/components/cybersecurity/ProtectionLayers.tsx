import type { ReactNode } from "react";
import { protectionLayers } from "@/lib/site-data";

/**
 * Defense-in-depth as nested frames around a protected core — a
 * deliberately different grammar from the vertical stack diagrams
 * used on Infrastructure and Cloud & Microsoft 365. Built with plain
 * nested boxes (border + padding) rather than absolutely-positioned
 * circles, so it stays robust and legible at any viewport width
 * without relying on precise geometry.
 */
export default function ProtectionLayers() {
  const [network, endpoint, identity, email, data] = protectionLayers;

  return (
    <div className="mx-auto max-w-3xl">
      <Layer item={network} tint="border-white/15">
        <Layer item={endpoint} tint="border-white/20">
          <Layer item={identity} tint="border-white/25">
            <Layer item={email} tint="border-electric-cyan/30">
              <div className="rounded-sm border border-electric-cyan/50 bg-electric-cyan/[0.07] p-6 text-center sm:p-8">
                <span className="font-mono text-xs text-electric-cyan">
                  {data.label}
                </span>
                <p className="mx-auto mt-2 max-w-[24ch] text-sm text-white/70 sm:text-base">
                  {data.caption}
                </p>
              </div>
            </Layer>
          </Layer>
        </Layer>
      </Layer>
    </div>
  );
}

function Layer({
  item,
  tint,
  children,
}: {
  item: { label: string; caption: string };
  tint: string;
  children: ReactNode;
}) {
  return (
    <div className={`border ${tint} p-5 sm:p-7`}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <span className="font-mono text-xs text-white/40">{item.label}</span>
        <span className="text-xs text-white/40 sm:text-sm">{item.caption}</span>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
