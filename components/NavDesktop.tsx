import Link from "next/link";

import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/data";

export const NavDesktop = () => {
  return (
    <nav className="flex-1 justify-end items-center space-x-8 font-medium mx-4 hidden md:flex">
      {NAV_ITEMS.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={cn(
            "hover:text-foreground hover:underline underline-offset-4 text-foreground/70"
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
