import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProfileHeader from "@/components/ProfileHeader";
import GoogleBouncingSearchBar from "@/components/GoogleBouncingSearchBar";

export default function Home() {
  return (
    <main>
      <Navbar />
      
      <Hero />
      <ProfileHeader/>
      <GoogleBouncingSearchBar/>
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}