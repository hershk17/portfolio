import {
  ClipboardIcon,
  EnvelopeClosedIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import pfp from "@/public/logos/pfp.webp";

export const Overview = () => {
  return (
    <section
      id="overview"
      className="flex flex-col h-[calc(100vh-10rem)] md:h-[calc(100vh-8rem)] text-center justify-center items-center"
    >
      <Image
        src={pfp}
        alt="Profile Picture"
        priority={true}
        className="rounded-xl shadow-lg h-[220px] w-[220px] mt-12 md:mt-0 md:h-[40vh] md:w-[40vh]"
      />
      <p className="mt-[5vh] flex flex-col md:flex-row flex-wrap gap-2 md:gap-5">
        <span className="text-4xl md:text-6xl">Hi, I&#39;m</span>
        <strong className="whitespace-nowrap text-5xl md:text-6xl">
          Harsh Keswani.
        </strong>
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-7 mt-16">
        <Link
          href="https://drive.google.com/file/d/14z5-qhxuDHm9UHOTPu8Hs1YVBjDVQsLK/view?usp=drive_link"
          target="_blank"
        >
          <Button className="text-lg h-14 flex w-72 md:w-48 gap-2">
            <ClipboardIcon className="h-5 w-5" />
            My Resume
          </Button>
        </Link>
        <Link href="#about">
          <Button
            className="text-lg h-14 flex w-72 md:w-48 gap-2"
            variant="outline"
          >
            <PersonIcon className="h-5 w-5" />
            About Me
          </Button>
        </Link>
        <Link href="#contact">
          <Button
            className="text-lg h-14 flex w-72 md:w-48 gap-2"
            variant="outline"
          >
            <EnvelopeClosedIcon className="h-5 w-5" />
            Contact Me
          </Button>
        </Link>
      </div>
    </section>
  );
};
