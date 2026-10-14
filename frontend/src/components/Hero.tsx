import { useTypewriter } from "../hooks/useTypewriter";

export function Hero() {
  const typed = useTypewriter(
    "> initializing backend services... [OK]",
    45,
    400,
  );

  return (
    <section
      id="home"
      className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 pt-24 pb-16 text-center sm:px-6"
    >
      <p className="mb-6 font-pixel text-[10px] tracking-widest text-cyan text-glow sm:text-xs">
        PRESS START
      </p>

      <h1
        data-text="BACKEND ENGINEER"
        className="glitch font-pixel text-xl leading-relaxed text-neon text-glow sm:text-4xl"
      >
        BACKEND ENGINEER
      </h1>

      <div className="mt-6 min-h-[1.5em] font-mono text-lg text-neon/90 sm:text-2xl">
        {typed}
        <span className="animate-blink">_</span>
      </div>

      <p className="mt-6 max-w-xl font-mono text-lg text-fg/70 sm:text-xl">
        I design APIs, data pipelines, and distributed systems that stay
        online when things go wrong.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="animate-pulse-glow border-2 border-neon bg-neon/10 px-6 py-3 font-pixel text-[10px] text-neon transition-transform hover:-translate-y-1 sm:text-xs"
        >
          VIEW PROJECTS
        </a>
        <a
          href="#contact"
          className="border-2 border-magenta px-6 py-3 font-pixel text-[10px] text-magenta transition-transform hover:-translate-y-1 hover:bg-magenta hover:text-void sm:text-xs"
        >
          CONTACT ME
        </a>
      </div>
    </section>
  );
}
