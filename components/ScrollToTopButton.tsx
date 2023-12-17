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
      className={`fixed right-20 rounded-full shadow-xl duration-200 gap-2 ${
        isVisible ? "bottom-28 opacity-100" : "bottom-0 opacity-0"
      }`}
      onClick={scrollToTop}
    >
      Back to top
      <ChevronUpIcon className="h-4 w-4" />
    </Button>
  );
};

export default ScrollToTopButton;
