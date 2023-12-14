import { SKILLS } from "@/lib/constants";
import Image from "next/image";
import { Progress } from "../ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export const Skills = () => {
  return (
    <section id="skills">
      <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl">
        Skills
      </h1>
      <h2>Here&#39;s a snapshot of my proficiency in different technologies</h2>

      <section className="flex flex-wrap mt-10 gap-6">
        {SKILLS.map((skill, idx) => (
          <Card key={idx} className="max-w-[500px]">
            <CardHeader>
              <CardTitle>{skill.title}</CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>
              <ul className="flex space-x-6">
                {skill.technologies.map((technology, idx) => (
                  <li
                    key={idx}
                    className="flex flex-col items-center justify-center w-24"
                  >
                    <Image
                      src={technology.icon}
                      alt={technology.name}
                      width={56}
                      height={56}
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
