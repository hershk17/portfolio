import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { NAV_ITEMS } from "@/lib/data";
import { cn } from "@/lib/utils";

export const NavMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="flex md:hidden">
          <HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[350px] max-w-[80dvw] px-8">
        <SheetTitle className="text-2xl">Harsh&#39;s Portfolio</SheetTitle>
        <nav className="flex flex-col text-xl space-y-7 mt-10">
          {NAV_ITEMS.map((link) => {
            const Icon = link.icon;
            return (
              <SheetClose key={link.name} asChild>
                <Link
                  href={link.href}
                  className={cn(
                    "flex gap-3 hover:text-foreground hover:underline underline-offset-4"
                  )}
                >
                  <Icon className="h-6 w-6" />
                  {link.name}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
