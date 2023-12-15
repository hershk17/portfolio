import pfp from "@/public/img/logos/pfp.webp";
import {
  ClipboardIcon,
  EnvelopeClosedIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export const Overview = () => {
  return (
    <section
      id="overview"
      className="flex flex-col h-[calc(100dvh-8rem)] text-center justify-center items-center"
    >
      <Image
        src={pfp}
        alt="Profile Picture"
        className="rounded-xl shadow-lg h-[220px] w-[220px] md:h-[40dvh] md:w-[40dvh]"
      />
      <span className="text-5xl md:text-6xl mt-[5dvh]">
        Hi, I&#39;m{" "}
        <strong className="whitespace-nowrap">Harsh Keswani.</strong>
      </span>

      <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-7 mt-16">
        <Link href="/resume.pdf">
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
