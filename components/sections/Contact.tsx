import Link from "next/link";

import { Button } from "@/components/ui/button";

import { LINKS } from "@/lib/data";
import { ContactForm } from "../ContactForm";

export const Contact = () => {
  return (
    <section id="contact">
      <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl mb-14">
        Contact
      </h1>

      <section className="md:flex gap-20">
        <ContactForm />
        <section className="flex flex-col gap-4 mt-12 md:mt-5">
          {LINKS.map((link, idx) => {
            const Icon = link.icon;
            return (
              <Link key={idx} href={link.href} target="_blank">
                <Button variant="ghost" className="h-16 flex items-start gap-3">
                  <Icon className="h-5 w-5 mt-1" />
                  <div className="flex flex-col items-start">
                    <span className="text-xl">{link.title}</span>
                    <span className="text-gray-400 dark:text-gray-500">
                      {link.description}
                    </span>
                  </div>
                </Button>
              </Link>
            );
          })}
        </section>
      </section>
    </section>
  );
};
