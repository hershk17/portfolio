"use client"

import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import { SKILLS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export const Skills = () => {
  const { theme } = useTheme();

  return (
    <section id="skills">
      <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl mb-14">
        Skills
      </h1>

      <section className="flex flex-wrap md:grid md:grid-cols-2 mt-10 gap-6">
        {SKILLS.map((skill, idx) => (
          <Card key={idx} className="w-full md:w-auto">
            <CardHeader>
              <CardTitle>{skill.title}</CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>
              <ul className="flex justify-around space-x-6 my-4">
                {skill.technologies.map((technology, idx) => (
                  <li
                    key={idx}
                    className="flex flex-col items-center justify-center md:w-16 lg:w-24 "
                  >
                    <Image
                      src={technology.icon}
                      alt={technology.name}
                      className={cn(
                        "w-14",
                        theme === "dark" && technology.invert && "invert"
                      )}
                    />
                    <p className="mt-1 mb-2">{technology.name}</p>
                    <Progress
                      value={technology.experience}
                      className="w-[75%] h-1 bg-primary/20"
                    />
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </section>
    </section>
  );
};
