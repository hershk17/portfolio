"use client";

import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import { SKILLS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Skills = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="skills" className="container">
      <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl mb-14">
        Skills
      </h1>

      <section className="flex flex-wrap md:grid md:grid-cols-2 mt-10 gap-6">
        {SKILLS.map((skill, idx) => (
          <Card key={idx} className="w-full md:w-auto">
            <CardHeader>
              <CardTitle>{skill.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-2 lg:flex lg:justify-around gap-4 lg:space-x-6 my-4">
                {skill.technologies.map((technology, idx) => (
                  <li
                    key={idx}
                    className="flex flex-col items-center justify-center"
                  >
                    <Image
                      src={technology.icon}
                      alt={technology.name + " icon"}
                      className={cn(
                        "w-16",
                        mounted &&
                          resolvedTheme === "dark" &&
                          technology.invert &&
                          "invert"
                      )}
                    />
                    <p className="mt-1 mb-2">{technology.name}</p>
                    <Progress
                      aria-label={technology.experience + "% proficiency"}
                      value={technology.experience}
                      className="w-[75%] h-1 bg-primary/30 dark:bg-primary/50"
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
