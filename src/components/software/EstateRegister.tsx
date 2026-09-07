import { estateRegister } from "@/lib/site-data";

/**
 * A software estate as a register/ledger, not a flow or stack —
 * a genuinely different grammar from the vertical diagrams, nested
 * frames and topology used elsewhere. Real table markup with both
 * horizontal and vertical rules, giving it a systematic, "organised
 * estate" feel without imitating a software dashboard UI.
 */
export default function EstateRegister() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <thead>
          <tr>
            <th className="w-48 border-b border-r border-white/15 py-4 pr-6 font-mono text-xs font-normal text-white/40">
              Layer
            </th>
            <th className="border-b border-white/15 py-4 pl-6 font-mono text-xs font-normal text-white/40">
              What GEAA manages
            </th>
          </tr>
        </thead>
        <tbody>
          {estateRegister.map((row) => (
            <tr key={row.layer}>
              <td className="border-b border-r border-white/10 py-6 pr-6 align-top text-lg font-semibold text-white sm:text-xl">
                {row.layer}
              </td>
              <td className="border-b border-white/10 py-6 pl-6 align-top text-sm text-white/60 sm:text-base">
                {row.managed}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
