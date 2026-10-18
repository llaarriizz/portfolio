type Category = {
  title: string;
  accent: string;
  fill: string;
  skills: string[];
};

const CATEGORIES: Category[] = [
  { title: "LANGUAGES", accent: "text-neon", fill: "hover:bg-neon", skills: ["GO", "PYTHON", "RUST", "C", "C++", "JAVA"] },
  { title: "TOOLS AND PLATFORMS", accent: "text-amber", fill: "hover:bg-amber", skills: ["GIT", "GITHUB", "DOCKER", "LINUX", "POSTMAN"] },
  { title: "DATABASES", accent: "text-cyan", fill: "hover:bg-cyan", skills: ["POSTGRESQL", "MySQL", "MongoDB", "REDIS"] },
  { title: "FRONTEND", accent: "text-magenta", fill: "hover:bg-magenta", skills: ["REACT", "NEXT.JS", "TAILWIND CSS"] },
  { title: "BACKEND", accent: "text-purple", fill: "hover:bg-purple", skills: ["NODE.JS", "EXPRESS.JS", "FASTAPI", "AXUM", "net/http FOR GO"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative z-10 mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <h2 className="mb-10 text-center font-pixel text-sm text-cyan text-glow sm:text-2xl">
        &gt; SKILL_TREE
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((category) => (
          <div
            key={category.title}
            className={`pixel-frame bg-panel/70 p-5 ${category.accent}`}
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 bg-current" />
              <h3 className="font-pixel text-[10px] text-fg sm:text-xs">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className={`border-2 border-current bg-void px-3 py-2 font-pixel text-[9px] transition-colors hover:text-void ${category.fill}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
