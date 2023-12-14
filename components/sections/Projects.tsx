import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CodeIcon, ExternalLinkIcon, PlayIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

import { PROJECTS } from "@/lib/constants";

export const Projects = () => {
  return (
    <section id="projects">
      <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl mb-10">
        Projects
      </h1>

      <section className="flex flex-wrap gap-5">
        {PROJECTS.map((project, idx) => (
          <article key={idx} className="w-72">
            <Card>
              <Image
                src={project.img}
                alt="project image"
                className="rounded-t-lg object-cover"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>
                  {project.desc}
                  {/* {project.stack?.map((item, idx) => (
                    <Badge key={idx}>{item}</Badge>
                  ))} */}
                </CardDescription>
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
                      {link.type === "GitHub" && <CodeIcon />}
                      {link.type}
                    </p>
                  </Link>
                ))}
                {/* <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Learn more{" "}
                  <svg
                    className="w-3 h-3 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a> */}
              </CardFooter>
            </Card>
          </article>
        ))}
      </section>
    </section>
  );
};
