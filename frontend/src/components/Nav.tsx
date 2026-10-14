const LINKS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b-2 border-neon/40 bg-void/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#home"
          className="font-pixel text-[10px] text-neon text-glow sm:text-xs"
        >
          [YOUR_NAME]
        </a>
        <ul className="flex gap-3 font-pixel text-[8px] sm:gap-6 sm:text-[10px]">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-cyan/80 transition-colors hover:text-neon hover:text-glow"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
