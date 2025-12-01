import { useState, useEffect } from "react";
import "../style/FloatingLinks.css";

export default function FloatingLinks() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("home");
      const footerSec = document.getElementById("footer-section");

      if (!hero || !footerSec) return;

      const heroRect = hero.getBoundingClientRect();
      const footerRect = footerSec.getBoundingClientRect();

      // لو أول سيكشن ظاهر على الشاشة
      const isHeroVisible = heroRect.bottom > 0;

      // لو آخر سيكشن ظاهر
      const isFooterVisible = footerRect.top < window.innerHeight;

      setHidden(isHeroVisible || isFooterVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`floating-container ${hidden ? "hide" : ""}`}>
      <button
        className={`floating-btn ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}>
        <i className="fa fa-share-alt"></i>
      </button>

      <ul className={`floating-links ${open ? "show" : ""}`}>
        <li>
          <a href="tel:+201064079153">
            <i className="fa fa-phone"></i>
          </a>
        </li>
        <li>
          <a href="https://wa.me/+201028267169">
            <i className="fa fa-whatsapp"></i>
          </a>
        </li>
        <li>
          <a href="mailto:hassaneletreby21@gmail.com">
            <i className="fa fa-envelope"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/hsn.ahmd.731027">
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/hassan-ahmed-5923a62ab/">
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/Hassan-Aletreby">
            <i className="fa fa-github"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
