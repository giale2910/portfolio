"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-black gradient-text">
          Linh.dev
        </h1>

        <nav className="hidden gap-8 md:flex">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="/cv.pdf"
          className="rounded-full bg-[#ff8ba7] px-5 py-2 text-white shadow-lg transition hover:scale-105"
        >
          Download CV
        </a>
      </div>
    </header>
  );
}