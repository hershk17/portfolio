import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Overview } from "@/components/sections/Overview";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export const Main = () => {
  return (
    <main className="container">
      <Overview />
      <Experience />
      <Education />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </main>
  );
};