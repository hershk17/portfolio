import pfp from "@/public/img/logos/pfp.webp";
import Image from "next/image";

export const Overview = () => {
  return (
    <section id="overview">
      <Image src={pfp} alt="Profile Picture" height={250}  className="rounded-lg shadow-lg"/>
    </section>
  );
};
