const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "MongoDB",
  "Figma",
  "Git",
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-14 text-center text-5xl font-black">
          Skills & Tech Stack
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="glass rounded-3xl p-8 text-center shadow-lg transition hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}