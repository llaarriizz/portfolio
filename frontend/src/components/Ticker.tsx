const TICKER = [
  "GO",
  "POSTGRES",
  "REDIS",
  "KAFKA",
  "DOCKER",
  "KUBERNETES",
  "gRPC",
  "LINUX",
  "CI/CD",
];

export function Ticker() {
  const items = [...TICKER, ...TICKER];

  return (
    <div className="relative z-10 overflow-hidden border-y-2 border-neon/40 bg-panel/60 py-3">
      <div className="animate-marquee flex w-max gap-8">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-pixel text-[10px] text-neon/70"
          >
            ◆ {item}
          </span>
        ))}
      </div>
    </div>
  );
}
