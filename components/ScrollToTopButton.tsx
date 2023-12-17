"use client";

import { ChevronUpIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

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
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
  };

  return (
    <Button
      className={`fixed inset-x-0 m-auto rounded-full shadow-lg duration-200 gap-2 ${
        isVisible ? "bottom-10" : "bottom-[-5rem]"
      }`}
      onClick={scrollToTop}
    >
      Back to top
      <ChevronUpIcon className="h-4 w-4" />
    </Button>
  );
};

export default ScrollToTopButton;
