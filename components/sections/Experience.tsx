import Image from "next/image";

import { EXPERIENCES } from "@/lib/data";
import { cn } from "@/lib/utils";

export const Experience = () => {
  return (
    <section id="experience">
      <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl mb-14">
        Experience
      </h1>

      <ol className="relative border-s border-violet-100 dark:border-violet-900 space-y-14">
        {EXPERIENCES.map((experience, idx) => (
          <li key={idx} className="ms-4 ml-8">
            <div
              className={cn(
                "absolute rounded-full w-3 h-3 mt-1.5 -start-1.5",
                idx === 0 ? "bg-violet-500" : "bg-violet-200 dark:bg-violet-900"
              )}
            ></div>
            <Image
              src={experience.img}
              alt={experience.company}
              height={40}
              className="max-w-[200px] mt-3 mb-5"
            />
            <h2 className="text-xl font-semibold">{experience.title}</h2>
            <h3>{experience.location}</h3>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {experience.date}
            </time>
            <ul className="mt-3 list-disc ml-4">
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
};
