import { Terminal } from "./Terminal";

const LINKS = [
  { label: "GITHUB", href: "https://github.com/llaarriizz", color: "text-neon border-neon" },
  { label: "WHATSAPP", href: "https://wa.me/9647709207340", color: "text-cyan border-cyan" },
  { label: "EMAIL", href: "mailto:lawkomohamad001@gmail.com", color: "text-magenta border-magenta" },
];

export function Contact() {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h2 className="mb-10 text-center font-pixel text-sm text-cyan text-glow sm:text-2xl">
        &gt; NEW_GAME_PLUS
      </h2>

      <Terminal title="contact">
        <p className="mb-6 font-mono text-lg text-fg/80">
          Got a system to build, a bug that won't die, or a team that ships?
          Let's talk.
        </p>
        <div className="flex flex-wrap gap-4">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`border-2 px-5 py-3 font-pixel text-[10px] transition-transform hover:-translate-y-1 ${link.color}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </Terminal>
    </section>
  );
}
