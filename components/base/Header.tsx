"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Home", href: "#" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 h-16 flex items-center px-4 border-b bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <Link href="/">Harsh K</Link>
      <nav className="items-center space-x-6 text-sm font-medium ml-4 hidden md:flex">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.includes(item.href)
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <ThemeToggle />
    </header>
  );
};
