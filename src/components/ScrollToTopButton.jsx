import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../style/ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 100);
  };

  const scrollToTop = () => {
    const topSection = document.querySelector("#home");
    if (topSection) {
      topSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTopButton;
