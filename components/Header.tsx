import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

import { ThemeToggle } from "@/components/ThemeToggle";
import { NAV_ITEMS } from "@/lib/data";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 h-20 flex items-center border-b bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="text-lg">
          Harsh K
        </Link>
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
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="flex md:hidden">
                <HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[350px] max-w-[80dvw] px-8">
              <SheetTitle className="text-2xl">
                Harsh&#39;s Portfolio
              </SheetTitle>
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
        </div>
      </div>
    </header>
  );
};
