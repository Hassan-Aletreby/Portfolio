import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../style/ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hidden, setHidden] = useState(false);

  const checkVisibility = () => {
    const hero = document.getElementById("home");
    const footerSec = document.getElementById("footer-section");
    if (!hero || !footerSec) return;
    const heroRect = hero.getBoundingClientRect();
    const isHeroVisible = heroRect.bottom > 0;
    setHidden(isHeroVisible);
    setIsVisible(window.scrollY > 200 && !isHeroVisible);
  };

  const scrollToTop = () => {
    const topSection = document.querySelector("#home");
    if (topSection) {
      topSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
    return () => window.removeEventListener("scroll", checkVisibility);
  }, []);

  return (
    isVisible &&
    !hidden && (
      <div id="scroll-to-top" className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </div>
    )
  );
};

export default ScrollToTopButton;
