export function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="grid-bg animate-grid absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(34,229,255,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_100%,rgba(255,46,151,0.12),transparent_55%)]" />
      <div className="animate-scan absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-neon/10 to-transparent" />
    </div>
  );
}
