import Link from "next/link";

import { NavDesktop } from "@/components/NavDesktop";
import { NavMobile } from "@/components/NavMobile";
import { ToggleTheme } from "@/components/ToggleTheme";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/sections/Footer";
import { Overview } from "@/components/sections/Overview";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <header className="fixed top-0 z-50 h-16 md:h-20 w-full flex items-center border-b bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
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

      <main className="relative top-0 left-0 h-full space-y-28">
        <Overview />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
