import React from "react";
import "../style/Hero.css";
import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-image">
          <div className="rotating-border"></div>
          <img src="../../public/profile.png" alt={t("Hassan")} />
        </div>

        <div className="hero-text">
          <h1>{t("YourName")}</h1>
          <p className="job-title">
            <Typewriter
              words={[t("JobTitle")]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          <div className="my__links">
            <a href="tel:+201064079153">
              <i className="fa fa-phone"></i>
            </a>
            <a
              href="https://wa.me/01028267169"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa fa-whatsapp"></i>
            </a>
            <a
              href="mailto:hassaneletreby21@gmail.com"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa fa-envelope"></i>
            </a>
            <a
              href="https://www.facebook.com/hsn.ahmd.731027"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/hassan-ahmed-5923a62ab/"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Hassan-Aletreby"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa fa-github"></i>
            </a>
          </div>

          <a href="#contact" className="contact-button">
            {t("ContactUs")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
