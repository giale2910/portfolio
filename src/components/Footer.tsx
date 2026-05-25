// import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <h2 className="text-2xl font-black gradient-text">
          Linh.dev
        </h2>

        <div className="flex gap-5">
          <a href="#">
            {/* <Github /> */}
          </a>

          <a href="#">
            {/* <Linkedin /> */}
          </a>
        </div>
      </div>
    </footer>
  );
}