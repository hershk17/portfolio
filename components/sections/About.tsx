import { ABOUT } from "@/lib/data";

export const About = () => {
  return (
    <section id="about" className="container">
      <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl mb-14">
        About
      </h1>

      {ABOUT.map((item) => (
        <section key={item.id} className="mb-12">
          <h1 className="text-2xl font-semibold mb-4">
            <span className="text-primary font-extrabold mr-3">{item.id}</span>
            {item.title}
          </h1>
          <article className="space-y-4">
            {item.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </article>
        </section>
      ))}
    </section>
  );
};
