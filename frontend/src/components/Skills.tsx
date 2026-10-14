type Skill = { name: string; level: number; color: string };

const SKILLS: Skill[] = [
  { name: "GO", level: 95, color: "bg-neon" },
  { name: "POSTGRESQL", level: 90, color: "bg-cyan" },
  { name: "DOCKER / K8S", level: 80, color: "bg-magenta" },
  { name: "REDIS", level: 85, color: "bg-amber" },
  { name: "gRPC / REST", level: 92, color: "bg-neon" },
  { name: "LINUX", level: 88, color: "bg-cyan" },
];

export function Skills() {
  return (
    <section id="skills" className="relative z-10 mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <h2 className="mb-10 text-center font-pixel text-sm text-cyan text-glow sm:text-2xl">
        &gt; SKILL_TREE
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {SKILLS.map((skill) => (
          <div key={skill.name}>
            <div className="mb-2 flex items-end justify-between font-pixel text-[9px] sm:text-[11px]">
              <span className="text-fg">{skill.name}</span>
              <span className="text-neon/70">LV {skill.level}</span>
            </div>
            <div className="h-4 border-2 border-neon/50 bg-void p-0.5">
              <div
                className={`h-full ${skill.color} transition-[width] duration-1000`}
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
