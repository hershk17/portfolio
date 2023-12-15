import { ABOUT } from "@/lib/data";

export const About = () => {
  return (
    <section id="about">
      <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl">
        About
      </h1>
      <h2 className="mt-2 mb-10">a little about me</h2>

      {ABOUT.map((item) => (
        <section key={item.id}>
          <h1 className="text-2xl font-semibold tracking-tight mt-8 mb-4">
            <span className="text-primary font-extrabold mr-2">{item.id}</span>
            {item.title}
          </h1>
          {item.paragraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </section>
      ))}
    </section>
  );
};
