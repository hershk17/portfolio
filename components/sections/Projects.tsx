import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { PROJECTS } from "@/lib/data";

export const Projects = () => {
  return (
    <section id="projects" className="container">
      <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl mb-14">
        Projects
      </h1>

      <section className="flex flex-wrap gap-5">
        {PROJECTS.map((project, idx) => (
          <article key={idx} className="sm:w-[275px]">
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
                {project.links.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <Button key={idx} variant={link.type as any} asChild>
                      <Link href={link.url} target="_blank">
                        <p className="flex items-center gap-2">
                          <Icon />
                          {link.title}
                        </p>
                      </Link>
                    </Button>
                  );
                })}
              </CardFooter>
            </Card>
          </article>
        ))}
      </section>
    </section>
  );
};
