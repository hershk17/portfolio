import { BackpackIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import pfp from "@/public/logos/pfp.webp";

export const Overview = () => {
  return (
    <section
      id="overview"
      className="container h-full min-h-[700px] flex flex-col text-center justify-center items-center pt-16 md:pt-20 space-y-12"
    >
      <Image
        src={pfp}
        alt="Profile Picture"
        priority={true}
        className="rounded-xl shadow-lg h-[220px] w-[220px] mt-12 md:mt-0 md:h-[300px] md:min-w-[300px]"
      />
      <p className="flex flex-col md:flex-row flex-wrap gap-5">
        <span className="text-5xl md:text-6xl">Hi, I&#39;m</span>
        <strong className="whitespace-nowrap text-6xl">
          Harsh.
        </strong>
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-7">
        <Link href="#projects">
          <Button className="text-lg h-14 flex w-72 md:w-48 gap-2">
            <EnvelopeClosedIcon className="h-5 w-5" />
            Contact Me
          </Button>
        </Link>
        <Link href="#experience">
          <Button
            className="text-lg h-14 flex w-72 md:w-48 gap-2"
            variant="outline"
          >
            <BackpackIcon className="h-5 w-5" />
            Experience
          </Button>
        </Link>
      </div>
    </section>
  );
};
