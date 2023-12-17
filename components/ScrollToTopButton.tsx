"use client";

import { Button } from "@/components/ui/button";
import { ChevronUpIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

import { animateScroll } from "react-scroll";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 400,
      smooth: true,
    });
  };

  return (
    <Button
      className={`fixed md:inset-x-0 md:m-auto right-10 rounded-full shadow-xl duration-200 gap-2 ${
        isVisible ? "bottom-20 opacity-100" : "bottom-0 opacity-0"
      }`}
      onClick={scrollToTop}
    >
      Back to top
      <ChevronUpIcon className="h-5 w-5" />
    </Button>
  );
};

export default ScrollToTopButton;
