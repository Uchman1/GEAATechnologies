type Node = { key: string; label: string; x: number; y: number; accent?: boolean };

// Office (LAN hub) connects locally to Users and Servers, then out
// through Security to the Internet and Cloud — a believable, simple
// topology rather than an abstract or decorative layout.
const nodes: Node[] = [
  { key: "users", label: "Users", x: 90, y: 80 },
  { key: "office", label: "Office", x: 240, y: 190 },
  { key: "servers", label: "Servers", x: 90, y: 300 },
  { key: "security", label: "Security", x: 410, y: 190, accent: true },
  { key: "internet", label: "Internet", x: 560, y: 190 },
  { key: "cloud", label: "Cloud", x: 690, y: 190 },
];

const edges: [string, string][] = [
  ["users", "office"],
  ["servers", "office"],
  ["office", "security"],
  ["security", "internet"],
  ["internet", "cloud"],
];

const byKey = Object.fromEntries(nodes.map((n) => [n.key, n]));

/**
 * A labeled network topology — real nodes and real connections,
 * not an abstract decorative motif and not a fake NOC dashboard
 * (no counters, no status widgets, just the diagram itself).
 */
export default function NetworkTopology() {
  return (
    <svg
      viewBox="0 0 760 380"
      className="mx-auto w-full max-w-4xl text-white/70"
      role="img"
      aria-label="Diagram showing users and servers connecting through the office network, then through security to the internet and cloud"
    >
      {edges.map(([a, b], i) => {
        const from = byKey[a];
        const to = byKey[b];
        return (
          <line
            key={`edge-${i}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="currentColor"
            strokeOpacity={0.2}
            strokeWidth={1.5}
          />
        );
      })}
      {edges.map(([a, b], i) => {
        const from = byKey[a];
        const to = byKey[b];
        return (
          <line
            key={`flow-${i}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="var(--color-electric-cyan)"
            strokeOpacity={0.5}
            strokeWidth={1.5}
            strokeDasharray="3 11"
            className={i % 2 === 0 ? "animate-flow" : "animate-flow-slow"}
          />
        );
      })}
      {nodes.map((node) => (
        <g key={node.key}>
          <circle
            cx={node.x}
            cy={node.y}
            r={node.key === "office" ? 9 : node.accent ? 8 : 6}
            fill={
              node.key === "office"
                ? "var(--color-geaa-blue)"
                : node.accent
                  ? "var(--color-electric-cyan)"
                  : "currentColor"
            }
            fillOpacity={node.accent || node.key === "office" ? 1 : 0.6}
          />
          <text
            x={node.x}
            y={node.y + 26}
            textAnchor="middle"
            className="font-mono"
            fontSize="13"
            fill="currentColor"
            fillOpacity={0.6}
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
