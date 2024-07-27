import Image from "next/image";

import { EXPERIENCES } from "@/lib/data";
import { cn } from "@/lib/utils";

export const Experience = () => {
  return (
    <section id="experience" className="container">
      <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl mb-14">
        Experience
      </h1>

      <ol className="relative border-s border-violet-100 dark:border-violet-900 space-y-14">
        {EXPERIENCES.map((experience, idx) => (
          <li key={idx} className="ms-4">
            <div
              className={cn(
                "absolute rounded-full mt-3.5",
                idx === 0
                  ? "bg-violet-500 w-4 h-4 -start-[0.535rem]"
                  : "bg-violet-200 dark:bg-violet-900 w-3 h-3 -start-1.5"
              )}
            ></div>
            <article className="ml-5">
              <Image
                src={experience.img}
                alt={experience.company}
                className={`w-auto h-auto [${
                  experience.imgSize === "lg"
                    ? "max-w-[250px] max-h-[50px]"
                    : "max-w-[200px] max-h-[40px]"
                } mt-3 mb-5`}
              />
              <h2 className="text-xl font-semibold">{experience.title}</h2>
              <h3>{experience.location}</h3>
              <time className="mb-1 text-sm text-gray-600 dark:text-gray-400">
                {experience.date}
              </time>
              <ul className="mt-3 list-disc ml-4">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
};
