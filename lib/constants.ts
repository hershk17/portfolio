import blockchainWalletImg from "@/public/img/blockchain-wallet.webp";
import eventureImg from "@/public/img/eventure.webp";
import libraryImg from "@/public/img/library.webp";
import mailImg from "@/public/img/mail.webp";
import movieSpaceImg from "@/public/img/movie-space.webp";
import policyPlannerImg from "@/public/img/policy-planner.webp";
import portfolioImg from "@/public/img/portfolio.webp";
import snlImg from "@/public/img/snl.webp";
import weatherWidgetImg from "@/public/img/weather-widget.webp";
import wordleImg from "@/public/img/wordle.webp";

// TODO: update file formats
import senecaImg from "@/public/img/seneca.png";
import parImg from "@/public/img/par.svg";
import ceridianImg from "@/public/img/ceridian.png";

export const NAV_ITEMS = [
  { name: "Home", href: "" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const EXPERIENCES = [
  {
    title: "Software Developer",
    company: "Ceridian",
    img: ceridianImg,
    date: "Jan 2024 - Present",
    location: "North York, ON",
    responsibilities: [],
  },
  {
    title: "Software Developer",
    company: "PAR Technology",
    img: parImg,
    date: "May 2022 - Apr 2023",
    location: "Markham, ON",
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
    date: "Jan 2020 - Aug 2023",
    location: "North York, ON",
    responsibilities: [
      "Cumulative GPA: 3.9 / 4.0",
      "Seneca College BSD Scholarship",
      "Seneca College President's Honour List 2020 - 2023",
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
