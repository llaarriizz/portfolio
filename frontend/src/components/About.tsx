import { Terminal } from "./Terminal";

const STATS = [
  { value: "40+", label: "MINI PROJECTS" },
  { value: "99.9%", label: "UPTIME" },
  { value: "20", label: "AGE" },
];

export function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <h2 className="mb-10 text-center font-pixel text-sm text-cyan text-glow sm:text-2xl">
        &gt; ABOUT_ME
      </h2>

      <div className="grid items-center gap-8 md:grid-cols-2">
        <Terminal title="whoami.sh">
          <pre className="whitespace-pre-wrap font-mono text-base leading-snug text-neon/90 sm:text-lg">
{`$ ./identify --me

name     : Lawko
role     : Backend Engineer
location : Sulaymaniyah, Iraq
status   : student and open to work

I build the invisible parts —
the APIs, the queues, the
databases nobody sees until
they break.`}
          </pre>
        </Terminal>

        <div className="grid grid-cols-2 gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="pixel-frame flex flex-col items-center justify-center gap-2 bg-panel/70 p-6 text-neon"
            >
              <span className="font-pixel text-lg text-glow sm:text-2xl">
                {stat.value}
              </span>
              <span className="font-pixel text-[8px] text-cyan sm:text-[9px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
