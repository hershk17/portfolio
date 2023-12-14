import { SKILLS } from "@/lib/constants";
import Image from "next/image";

export const Skills = () => {
  return (
    <section id="skills">
      {SKILLS.map((skill, idx) => (
        <section key={idx}>
          <h2 className="text-2xl font-bold mb-4">{skill.title}</h2>
          {skill.technologies.map((technology, idx) => (
            <Image
              key={idx}
              src={technology.icon}
              alt={technology.name}
              width={64}
              height={64}
            />
          ))}
        </section>
      ))}
    </section>
  );
};
