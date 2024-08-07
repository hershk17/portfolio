// Screenshot imports
import blockchainWalletImg from "@/public/screenshots/blockchain-wallet.webp";
import eventureImg from "@/public/screenshots/eventure.webp";
import libraryImg from "@/public/screenshots/library.webp";
import mailImg from "@/public/screenshots/mail.webp";
import movieSpaceImg from "@/public/screenshots/movie-space.webp";
import policyPlannerImg from "@/public/screenshots/policy-planner.webp";
import portfolioImg from "@/public/screenshots/portfolio.webp";
import snlImg from "@/public/screenshots/snl.webp";
import weatherWidgetImg from "@/public/screenshots/weather-widget.webp";

// Logo imports
import dayforceImg from "@/public/logos/dayforce.webp";
import isbImg from "@/public/logos/isb.webp";
import parImg from "@/public/logos/par.webp";
import senecaImg from "@/public/logos/seneca.webp";

// Icon imports
import angularIcon from "@/public/icons/angular.png";
import awsIcon from "@/public/icons/aws.svg";
import cppIcon from "@/public/icons/cpp.svg";
import csharpIcon from "@/public/icons/csharp.svg";
import dockerIcon from "@/public/icons/docker.svg";
import gitIcon from "@/public/icons/git.svg";
import githubIcon from "@/public/icons/github.svg";
import javaIcon from "@/public/icons/java.svg";
import mongodbIcon from "@/public/icons/mongodb.svg";
import mssqlIcon from "@/public/icons/mssql.svg";
import mysqlIcon from "@/public/icons/mysql.svg";
import nextjsIcon from "@/public/icons/nextjs.svg";
import nodejsIcon from "@/public/icons/nodejs.svg";
import postgresqlIcon from "@/public/icons/postgresql.svg";
import reactIcon from "@/public/icons/react.svg";
import typescriptIcon from "@/public/icons/typescript.svg";

import {
  CodeIcon,
  EnvelopeClosedIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
  HomeIcon,
  LightningBoltIcon,
  LinkedInLogoIcon,
  PersonIcon,
  PlayIcon
} from "@radix-ui/react-icons";
import { BackpackIcon } from "lucide-react";

export const NAV_ITEMS = [
  { name: "Overview", href: "#overview", icon: HomeIcon },
  { name: "About", href: "#about", icon: PersonIcon },
  { name: "Experience", href: "#experience", icon: BackpackIcon },
  { name: "Skills", href: "#skills", icon: LightningBoltIcon },
  { name: "Projects", href: "#projects", icon: CodeIcon },
  { name: "Contact", href: "#contact", icon: EnvelopeClosedIcon },
];

export const EXPERIENCES = [
  {
    title: "Software Developer",
    company: "Dayforce",
    img: dayforceImg,
    imgSize: "lg",
    date: "January 2024 - Present",
    location: "North York, Ontario, Canada",
    responsibilities: [],
  },
  {
    title: "Software Developer",
    company: "PAR Technology",
    img: parImg,
    imgSize: "md",
    invert: true,
    date: "May 2022 - April 2023",
    location: "Markham, Ontario, Canada",
    responsibilities: [
      "Designed features, debugged issues, wrote unit tests, code reviews in Angular with VS Code, Jasmine, Jira",
      "Created, tested, and integrated REST APIs in Java / Spring Boot with Eclipse, JUnit, and Postman",
      "Developed Data Visualization Dashboard (with Chart.js, Angular, Java, Spring Boot, MySQL)",
      "Revamped over 60% of front-end UI elements to support responsive layouts and consistent brand theming",
      "Gained exposure to Git, AWS EC2, RDS, Lambda, API Gateway, S3, and CI/CD pipelines with Jenkins",
    ],
  },
  {
    title: "Honours Bachelor of Technology - Software Development",
    company: "Seneca College",
    img: senecaImg,
    imgSize: "lg",
    date: "January 2020 - August 2023",
    location: "North York, Ontario, Canada",
    responsibilities: [
      "Cumulative GPA 3.9 / 4.0",
      "Seneca College BSD Scholarship 2020 - 2023",
      "Seneca College President's Honour List 2020 - 2023",
    ],
  },
  {
    title: "High School Diploma - Computer Science",
    company: "The Indian School, Bahrain",
    img: isbImg,
    imgSize: "lg",
    invert: true,
    date: "March 2019",
    location: "Isa Town, Kingdom of Bahrain",
    responsibilities: [
      "Scored 97.5% in CBSE Computer Science Boards",
      "Maintained Vice President position in the Student Council for 3 years",
      "Planned and organized community programs, festivals, and fundraising events",
    ],
  },
];

export const PROJECTS = [
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
        title: "Demo",
        icon: PlayIcon,
        type: "default",
        url: "https://www.youtube.com/watch?v=uKlhKMTh05k",
      },
      {
        title: "GitHub",
        icon: GitHubLogoIcon,
        type: "outline",
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
        title: "Live",
        icon: ExternalLinkIcon,
        type: "default",
        url: "https://policy-planner.vercel.app/home",
      },
      {
        title: "GitHub",
        icon: GitHubLogoIcon,
        type: "outline",
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
        title: "Live",
        icon: ExternalLinkIcon,
        type: "default",
        url: "https://play.google.com/store/apps/details?id=com.dps926.moviespace",
      },
      {
        title: "GitHub",
        icon: GitHubLogoIcon,
        type: "outline",
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
        title: "Demo",
        icon: PlayIcon,
        type: "default",
        url: "https://www.youtube.com/watch?v=r-ZLR86G9oo",
      },
      {
        title: "GitHub",
        icon: GitHubLogoIcon,
        type: "outline",
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
        title: "Live",
        icon: ExternalLinkIcon,
        type: "default",
        url: "https://weatherite.vercel.app/",
      },
      {
        title: "GitHub",
        icon: GitHubLogoIcon,
        type: "outline",
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
        title: "GitHub",
        icon: GitHubLogoIcon,
        type: "outline",
        url: "https://github.com/hershk17/portfolio",
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
        title: "GitHub",
        icon: GitHubLogoIcon,
        type: "outline",
        url: "https://github.com/hershk17/library-manager-app",
      },
    ],
  },
  {
    title: "Mailbox Manager",
    img: mailImg,
    stack: ["Qt", "C++"],
    desc: "A desktop application for managing emails.",
    links: [
      {
        title: "GitHub",
        icon: GitHubLogoIcon,
        type: "outline",
        url: "https://github.com/hershk17/desktop-mail-app",
      },
    ],
  },
  {
    title: "Snakes and Ladders",
    img: snlImg,
    stack: ["C++"],
    desc: "A terminal-based version of the Snakes n' Ladders board game.",
    links: [
      {
        title: "GitHub",
        icon: GitHubLogoIcon,
        type: "outline",
        url: "https://github.com/hershk17/snl-terminal-app",
      },
    ],
  },
];

export const ABOUT = [
  {
    id: "01",
    title: "Who I Am",
    paragraphs: [
      "Hi, my name's Harsh. I have a bachelors degree in Software Development from Seneca College and a passion for full stack development.",
      "In my free time, I enjoy travelling, photography, football, video games and learning about the latest web technologies.",
    ],
  },
  {
    id: "02",
    title: "My Passion",
    paragraphs: [
      "When I first took up Computer Science in 11th grade, I knew it was exactly what I wanted to do! Ever since then, I have strived to further my career by consistently trying to challenge myself and reach new heights.",
      "After completing my bachelor's degree, I have gained substantial knowledge of software development and my love for the industry continues to grow.",
    ],
  },
  {
    id: "03",
    title: "My Goals",
    paragraphs: [
      "My goal is to become a skilled Software Developer capable of making meaningful contributions in the industry. The possibilities are truly exciting, and I look forward to what the future holds.",
    ],
  },
];

export const SKILLS = [
  {
    title: "Frontend",
    technologies: [
      { name: "React", icon: reactIcon, experience: 90 },
      { name: "TypeScript", icon: typescriptIcon, experience: 90 },
      { name: "Next.js", icon: nextjsIcon, experience: 85, invert: true },
      { name: "Angular", icon: angularIcon, experience: 80 },
    ],
  },
  {
    title: "Backend",
    technologies: [
      { name: ".NET/C#", icon: csharpIcon, experience: 95 },
      { name: "Java", icon: javaIcon, experience: 85 },
      { name: "Node.js", icon: nodejsIcon, experience: 85 },
      { name: "C++", icon: cppIcon, experience: 80 },
    ],
  },
  {
    title: "Databases",
    technologies: [
      { name: "PostgreSQL", icon: postgresqlIcon, experience: 90 },
      { name: "MSSQL", icon: mssqlIcon, experience: 85 },
      { name: "MySQL", icon: mysqlIcon, experience: 85 },
      { name: "Mongo", icon: mongodbIcon, experience: 80 },
    ],
  },
  {
    title: "DevOps",
    technologies: [
      { name: "Git", icon: gitIcon, experience: 90 },
      { name: "Actions", icon: githubIcon, experience: 90, invert: true },
      { name: "AWS", icon: awsIcon, experience: 80, invert: true },
      { name: "Docker", icon: dockerIcon, experience: 80 },
    ],
  },
];

export const LINKS = [
  {
    title: "Email",
    description: "hersh.k17@gmail.com",
    href: "mailto:hersh.k17@gmail.com",
    icon: EnvelopeClosedIcon,
  },
  {
    title: "LinkedIn",
    description: "Harsh Keswani",
    href: "https://www.linkedin.com/in/harsh-keswani/",
    icon: LinkedInLogoIcon,
  },
  {
    title: "GitHub",
    description: "hershk17",
    href: "https://github.com/hershk17",
    icon: GitHubLogoIcon,
  },
];
