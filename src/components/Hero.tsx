"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      <div className="blob left-0 top-0 h-72 w-72 bg-pink-300"></div>

      <div className="blob bottom-0 right-0 h-72 w-72 bg-sky-300"></div>

      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >
          <span className="mb-4 w-fit rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-500">
            👋 Hi, I’m Linh
          </span>

          <h1 className="mb-6 text-6xl font-black leading-tight md:text-7xl">
            Frontend
            <br />
            <span className="gradient-text">Developer</span>
          </h1>

          <p className="mb-8 max-w-xl text-lg text-gray-600">
            I build modern responsive websites with clean
            design, smooth animation and beautiful user
            experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-[#ff8ba7] px-7 py-4 font-medium text-white shadow-xl transition hover:scale-105"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-gray-300 bg-white px-7 py-4 font-medium transition hover:bg-gray-50"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="flex items-center justify-center"
        >
          <div className="glass rounded-[40px] p-5 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              alt="girl"
              className="h-[500px] w-[400px] rounded-[30px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}