const experiences = [
  {
    year: "2025",
    role: "Frontend Developer Intern",
    company: "ABC Company",
  },

  {
    year: "2024",
    role: "Freelance Frontend Developer",
    company: "Self-employed",
  },

  {
    year: "2023",
    role: "Started Learning Web Development",
    company: "Personal Journey",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-50 px-6 py-28"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-16 text-center text-5xl font-black">
          My Journey
        </h2>

        <div className="space-y-8">
          {experiences.map((item) => (
            <div
              key={item.year}
              className="glass rounded-3xl border-l-8 border-pink-300 p-8 shadow-lg"
            >
              <span className="font-medium text-pink-500">
                {item.year}
              </span>

              <h3 className="mt-2 text-2xl font-bold">
                {item.role}
              </h3>

              <p className="text-gray-600">
                {item.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}