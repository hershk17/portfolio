import { EXPERIENCES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Experience = () => {
  return (
    <section id="experience">
      <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl">
        Experience
      </h1>
      <h2 className="mt-4">This is what I&#39;ve been up to</h2>

      <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-4 pt-6 ml-1">
        {EXPERIENCES.map((experience, idx) => (
          <li key={idx} className="mb-14 ms-4 ml-6">
            <div
              className={cn(
                "absolute rounded-full w-3 h-3 mt-1.5 -start-1.5 ",
                idx === 0
                  ? "bg-gray-600 dark:bg-gray-100"
                  : "bg-gray-300 dark:bg-gray-500"
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
            <ul className="mt-3">
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
