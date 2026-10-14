type Project = {
  title: string;
  tag: string;
  description: string;
  stack: string[];
  href: string;
};

const PROJECTS: Project[] = [
  {
    title: "PAYMENT GATEWAY",
    tag: "FINTECH",
    description:
      "Idempotent transaction service handling thousands of payments per second with exactly-once delivery.",
    stack: ["Go", "Postgres", "Kafka"],
    href: "#",
  },
  {
    title: "REALTIME CHAT API",
    tag: "MESSAGING",
    description:
      "WebSocket fan-out backend with presence tracking and horizontal scaling over Redis pub/sub.",
    stack: ["Go", "Redis", "WebSocket"],
    href: "#",
  },
  {
    title: "ETL PIPELINE",
    tag: "DATA",
    description:
      "Streaming ingestion and transformation pipeline moving millions of events into a warehouse nightly.",
    stack: ["Go", "ClickHouse", "Docker"],
    href: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <h2 className="mb-10 text-center font-pixel text-sm text-cyan text-glow sm:text-2xl">
        &gt; SELECT_LEVEL
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {PROJECTS.map((project) => (
          <a
            key={project.title}
            href={project.href}
            className="pixel-frame group flex flex-col gap-3 bg-panel/80 p-5 text-neon transition-transform duration-150 hover:-translate-y-2"
          >
            <div className="flex items-center justify-between">
              <span className="font-pixel text-[8px] text-magenta">
                {project.tag}
              </span>
              <span className="font-pixel text-[10px] text-amber">★</span>
            </div>
            <h3 className="font-pixel text-[11px] leading-relaxed text-neon text-glow sm:text-xs">
              {project.title}
            </h3>
            <p className="flex-1 font-mono text-base leading-snug text-fg/70">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="border border-cyan/50 px-2 py-1 font-pixel text-[7px] text-cyan"
                >
                  {tech}
                </span>
              ))}
            </div>
            <span className="font-pixel text-[8px] text-neon/60 transition-colors group-hover:text-neon">
              &gt; VIEW_CODE
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
