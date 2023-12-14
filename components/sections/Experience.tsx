import { EXPERIENCES } from "@/lib/constants";
import Image from "next/image";

export const Experience = () => {
  return (
    <section id="experience">
      <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl">
        Experience
      </h1>

      <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-3 pt-10 ml-1">
        {EXPERIENCES.map((experience, idx) => (
          <li key={idx} className="mb-14 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {experience.date}
            </time>
            <h2 className="text-xl font-semibold">
              {experience.title}
            </h2>
            <Image
              src={experience.img}
              alt={experience.company}
              height={40}
              className="max-w-[200px] mt-3 mb-5"
            />
            <ul className="text-base font-normal text-gray-500 dark:text-gray-400">
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx}>
                  {responsibility}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
};
