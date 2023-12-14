import { CodeIcon, ExternalLinkIcon, PlayIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import blockchainWalletImg from "../../public/img/blockchain-wallet.webp";
import eventureImg from "../../public/img/eventure.webp";
import libraryImg from "../../public/img/library.webp";
import mailImg from "../../public/img/mail.webp";
import movieSpaceImg from "../../public/img/movie-space.webp";
import policyPlannerImg from "../../public/img/policy-planner.webp";
import portfolioImg from "../../public/img/portfolio.webp";
import snlImg from "../../public/img/snl.webp";
import weatherWidgetImg from "../../public/img/weather-widget.webp";
import wordleImg from "../../public/img/wordle.webp";
import { useLayoutEffect } from "react";

const PROJECTS = [
  {
    title: "Blockchain Wallet",
    img: blockchainWalletImg,
    desc: "A web-based digital banking and wallet application for the Banano cryptocurrency.",
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "Thymeleaf",
      "Docker",
    ],
    links: [
      {
        type: "Demo",
        url: "https://www.youtube.com/watch?v=uKlhKMTh05k",
      },
      {
        type: "GitHub",
        url: "https://github.com/hershk17/banano-wallet-web-app",
      },
    ],
  },
  {
    title: "Policy Planner",
    img: policyPlannerImg,
    desc: "A web-based application for calculating vehicle insurance premiums.",
    stack: [
      "Java",
      "Spring Boot",
      "Angular",
      "Typescript",
      "HTML/CSS",
      "Azure",
    ],
    links: [
      {
        type: "Live",
        url: "https://policy-planner.vercel.app/home",
      },
      {
        type: "GitHub",
        url: "https://github.com/hershk17/insurance-calculator",
      },
    ],
  },
  {
    title: "Movie Space",
    img: movieSpaceImg,
    desc: "A cross-platform application for movie browsing, searching, and creating watchlists.",
    stack: [
      "Angular",
      "TypeScript",
      "HTML/CSS",
      "Ionic",
      "SQLite",
      "Google Play",
    ],
    links: [
      {
        type: "Live",
        url: "https://play.google.com/store/apps/details?id=com.dps926.moviespace",
      },
      {
        type: "GitHub",
        url: "https://github.com/hershk17/movie-space-ionic-app",
      },
    ],
  },
  {
    title: "Eventure",
    img: eventureImg,
    desc: "A cross-platform social media application with an emphasis on organizing and attending events.",
    stack: ["Angular", "TypeScript", "HTML/CSS", "Ionic", "Firebase"],
    links: [
      {
        type: "Demo",
        url: "https://www.youtube.com/watch?v=r-ZLR86G9oo",
      },
      {
        type: "GitHub",
        url: "https://github.com/hershk17/capstone-events-app",
      },
    ],
  },
  {
    title: "Weather Widget",
    img: weatherWidgetImg,
    desc: "A web-based application for viewing detailed weather information for any location.",
    stack: ["React", "JavaScript", "HTML/CSS", "Bootstap", "Vercel"],
    links: [
      {
        type: "Live",
        url: "https://weatherite.vercel.app/",
      },
      {
        type: "GitHub",
        url: "https://github.com/hershk17/weather-web-app",
      },
    ],
  },
  {
    title: "Personal Portfolio",
    img: portfolioImg,
    desc: "A web-based application showcasing my skills, goals, and projects.",
    stack: ["React", "JavaScript", "HTML/CSS", "MUI", "Firebase"],
    links: [
      {
        type: "GitHub",
        url: "",
      },
    ],
  },
  {
    title: "Library Manager",
    img: libraryImg,
    desc: "A desktop application for tracking and managing library resources.",
    stack: ["Java", "JavaFX", "PostgreSQL"],
    links: [
      {
        type: "GitHub",
        url: "https://github.com/hershk17/library-manager-app",
      },
    ],
  },
  {
    title: "Mailbox Manager",
    img: mailImg,
    stack: ["Qt", "C++"],
    desc: "A desktop application for sending, receiving, and deleting emails.",
    links: [
      {
        type: "GitHub",
        url: "https://github.com/hershk17/desktop-mail-app",
      },
    ],
  },
  {
    title: "Snakes and Ladders",
    img: snlImg,
    stack: ["C++"],
    desc: "A terminal-based version of the popular Snakes and Ladders board game.",
    links: [
      {
        type: "GitHub",
        url: "https://github.com/hershk17/snl-terminal-app",
      },
    ],
  },
  {
    title: "Wordle Clone",
    img: wordleImg,
    techstack: ["React", "JavaScript", "HTML/CSS"],
    desc: "A simple word game inspired by the popular browser game 'Wordle'.",
    links: [
      {
        type: "Work in Progress...",
        url: "",
      },
    ],
  },
];

export const Projects = () => {
  return (
    <section id="projects">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Projects
      </h1>
      <h2>Some of the things I&apos;ve worked on</h2>

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
              </CardFooter>
            </Card>
          </article>
        ))}
      </section>
    </section>
  );
};
