import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Overview } from "@/components/sections/Overview";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export const Main = () => {
  return (
    <main className="container space-y-24 overflow-auto scroll-pt-24">
      <Overview />
      <Experience />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </main>
  );
};
