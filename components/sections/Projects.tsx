import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ExternalLinkIcon,
  GitHubLogoIcon,
  PlayIcon
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

import { PROJECTS } from "@/lib/data";

export const Projects = () => {
  return (
    <section id="projects">
      <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl mb-14">
        Projects
      </h1>

      <section className="flex flex-wrap gap-5">
        {PROJECTS.map((project, idx) => (
          <article key={idx} className="w-72">
            <Card>
              <Image
                src={project.img}
                alt="project image"
                className="rounded-t-lg object-cover h-[190px]"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.desc}</CardDescription>
              </CardHeader>
              <CardFooter className="gap-2">
                {project.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.url}
                    className={buttonVariants({
                      variant:
                        link.type === "Demo" || link.type === "Live"
                          ? "default"
                          : "outline",
                    })}
                  >
                    <p className="flex items-center gap-2">
                      {link.type === "Demo" && <PlayIcon />}
                      {link.type === "Live" && <ExternalLinkIcon />}
                      {link.type === "GitHub" && <GitHubLogoIcon />}
                      {link.type}
                    </p>
                  </Link>
                ))}
              </CardFooter>
            </Card>
          </article>
        ))}
      </section>
    </section>
  );
};
