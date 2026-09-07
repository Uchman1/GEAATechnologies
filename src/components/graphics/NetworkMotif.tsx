type NetworkMotifProps = {
  className?: string;
};

/**
 * Abstract infrastructure/connectivity motif for the hero.
 * Static nodes, connecting lines with a slow travelling dash to suggest
 * signal/data movement. No globes, no particles, no fake terminals.
 */
export default function NetworkMotif({ className }: NetworkMotifProps) {
  const nodes: [number, number][] = [
    [40, 260],
    [180, 120],
    [180, 320],
    [340, 60],
    [340, 200],
    [340, 360],
    [500, 130],
    [500, 300],
  ];

  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [2, 4],
    [2, 5],
    [4, 6],
    [4, 7],
    [3, 6],
    [5, 7],
  ];

  return (
    <svg
      viewBox="0 0 560 420"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {edges.map(([a, b], i) => {
        const [x1, y1] = nodes[a];
        const [x2, y2] = nodes[b];
        return (
          <line
            key={`edge-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeOpacity={0.18}
            strokeWidth={1}
          />
        );
      })}
      {edges.map(([a, b], i) => {
        const [x1, y1] = nodes[a];
        const [x2, y2] = nodes[b];
        return (
          <line
            key={`flow-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="var(--color-electric-cyan)"
            strokeOpacity={0.55}
            strokeWidth={1.25}
            strokeDasharray="4 12"
            className={i % 2 === 0 ? "animate-flow" : "animate-flow-slow"}
          />
        );
      })}
      {nodes.map(([x, y], i) => (
        <circle
          key={`node-${i}`}
          cx={x}
          cy={y}
          r={i === 4 ? 5 : 3.5}
          fill={i === 4 ? "var(--color-electric-cyan)" : "currentColor"}
          fillOpacity={i === 4 ? 1 : 0.5}
        />
      ))}
    </svg>
  );
}
