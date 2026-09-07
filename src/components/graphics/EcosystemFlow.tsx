type EcosystemFlowProps = {
  steps: string[];
};

/**
 * Horizontal (vertical on mobile) chain showing how GEAA's systems
 * connect. Connector segments use an animated dashed gradient to
 * suggest movement/data flow between stages, without a fake
 * terminal or particle field.
 */
export default function EcosystemFlow({ steps }: EcosystemFlowProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-0">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-col md:flex-row md:items-center">
          <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2">
            <span className="font-mono text-xs text-electric-cyan">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-lg md:text-xl font-semibold text-white">
              {step}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              aria-hidden="true"
              className="
                my-3 ml-[3px] h-8 w-px
                md:my-0 md:mx-6 md:h-px md:w-14
                bg-[repeating-linear-gradient(to_bottom,var(--color-electric-cyan)_0_6px,transparent_6px_16px)]
                md:bg-[repeating-linear-gradient(to_right,var(--color-electric-cyan)_0_6px,transparent_6px_16px)]
                opacity-60
                animate-dash-y md:animate-dash-x
              "
            />
          )}
        </div>
      ))}
    </div>
  );
}
