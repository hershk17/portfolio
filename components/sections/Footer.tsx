export const Footer = () => {
  return (
    <footer className="bg-secondary text-foreground/80 mt-28">
      <section className="container h-24 flex justify-between items-center">
        <p>&#169; Harsh K, {new Date().getFullYear()}</p>
        <p>built with Next.js</p>
      </section>
    </footer>
  );
};
