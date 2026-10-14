import type { ReactNode } from "react";

type TerminalProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export function Terminal({ title = "bash", children, className = "" }: TerminalProps) {
  return (
    <div
      className={`relative border-2 border-neon/60 bg-panel/90 shadow-[0_0_0_2px_rgba(6,6,15,1),8px_8px_0_0_rgba(57,255,20,0.25)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b-2 border-neon/40 bg-void/60 px-3 py-2">
        <span className="size-3 bg-magenta" />
        <span className="size-3 bg-amber" />
        <span className="size-3 bg-neon" />
        <span className="ml-2 font-pixel text-[8px] tracking-widest text-neon/70">
          {title}
        </span>
      </div>
      <div className="p-4 sm:p-6">{children}</div>
    </div>
  );
}
