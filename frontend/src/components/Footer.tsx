const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative z-10 border-t-2 border-neon/30 py-8 text-center">
      <p className="font-pixel text-[8px] text-neon/50 sm:text-[9px]">
        INSERT COIN TO CONTINUE — © 2026 LAWKO MOHAMMAD.
      </p>
      <p className="mt-3 font-mono text-sm text-cyan/40">
        built with react + tailwind • powered by go
      </p>
    </footer>
  );
}
