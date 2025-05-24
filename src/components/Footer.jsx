import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../style/Footer.css";

const Footer = () => {
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

  return (
    <footer className="footer">
      <div className="footer-container">
        <ul className="footer-links">
          <li className="footer-item">
            <a href="tel:+201064079153">
              <i className="fa fa-phone"></i> {t("phone")}
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://wa.me/01028267169"
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
