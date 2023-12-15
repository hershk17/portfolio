import { SKILLS } from "@/lib/data";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "../ui/card";
import { Progress } from "../ui/progress";

export const Skills = () => {
  return (
    <section id="skills">
      <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl">
        Skills
      </h1>
      <h2 className="mt-2 mb-10">
        Here&#39;s my proficiency in different technologies
      </h2>

      <section className="flex flex-wrap lg:grid lg:grid-cols-2 mt-10 gap-6">
        {SKILLS.map((skill, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle>{skill.title}</CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>
              <ul className="flex justify-between space-x-6">
                {skill.technologies.map((technology, idx) => (
                  <li
                    key={idx}
                    className="flex flex-col items-center justify-center w-16 lg:w-24"
                  >
                    <Image
                      src={technology.icon}
                      alt={technology.name}
                      className="w-10 lg:w-14"
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
