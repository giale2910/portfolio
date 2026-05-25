import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center text-5xl font-black">
          Project Showcase
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group glass overflow-hidden rounded-[32px] shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <h3 className="mb-3 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mb-5 text-gray-600">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-pink-100 px-4 py-2 text-sm text-pink-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="rounded-full bg-[#5ec8e5] px-5 py-3 text-white"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="rounded-full bg-[#ff8ba7] px-5 py-3 text-white"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}