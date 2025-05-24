import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "../style/Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  useEffect(() => {
    const items = document.querySelectorAll(".footer-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);
  const scrollToSection = (section) => {
    navigate("/", { state: { scrollTo: section } });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo" onClick={() => scrollToSection("home")}>
          <h2>{t("Port")}</h2>
          <img src="/profile.png" alt="logo" />
          <h2>{t("folio")}</h2>
        </div>
        <ul className="footer-links">
          <li className="footer-item">
            <a href="tel:+201064079153">
              <i className="fa fa-phone"></i> {t("phone")}
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://wa.me/+201028267169"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa fa-whatsapp"></i> {t("whatsapp")}
            </a>
          </li>
          <li className="footer-item">
            <a
              href="mailto:hassaneletreby21@gmail.com"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa fa-envelope"></i>Gmail
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://www.facebook.com/hsn.ahmd.731027"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa fa-facebook"></i> {t("facebook")}
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://www.linkedin.com/in/hassan-ahmed-5923a62ab/"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa fa-linkedin"></i> {t("linkedin")}
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://github.com/Hassan-Aletreby"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa fa-github"></i> {t("github")}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
