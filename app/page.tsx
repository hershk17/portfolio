import Link from "next/link";

import { NavDesktop } from "@/components/NavDesktop";
import { NavMobile } from "@/components/NavMobile";
import { ToggleTheme } from "@/components/ToggleTheme";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Overview } from "@/components/sections/Overview";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 h-16 md:h-20 flex items-center border-b bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="text-lg">
            Harsh K
          </Link>
          <NavDesktop />
          <div className="flex items-center gap-2">
            <ToggleTheme />
            <NavMobile />
          </div>
        </div>
      </header>

      <main className="container space-y-28">
        <Overview />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-secondary text-foreground/80 mt-24">
        <section className="container h-14 flex justify-between items-center">
          <p>&#169; Harsh K, 2023</p>
          <p>built with Next.js</p>
        </section>
      </footer>
    </>
  );
}
