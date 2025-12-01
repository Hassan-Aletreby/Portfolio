import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { GoSun } from "react-icons/go";
import { FaRegMoon } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import "../style/Navbar.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (!savedMode) {
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      setDarkMode(prefersDark);
      document.body.classList.toggle("dark", prefersDark);
      localStorage.setItem("theme", prefersDark ? "dark" : "light");
    } else {
      const isDark = savedMode === "dark";
      setDarkMode(isDark);
      document.body.classList.toggle("dark", isDark);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setShowLangDropdown(false);
  };

  const scrollToSection = (section) => {
    setMenuOpen(false);
    navigate(`/?scroll=${section}`);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={() => scrollToSection("home")}>
          <h2>{t("Port")}</h2>
          <div className="logo__img">
            <img src="/public/logo.png" alt="logo" />
          </div>
          <h2>{t("folio")}</h2>
        </div>

        <div
          className={`navbar-links ${menuOpen ? "open" : ""} ${
            i18n.language === "ar" ? "rtl" : "ltr"
          }`}>
          <a onClick={() => scrollToSection("home")}>{t("Home")}</a>
          <a onClick={() => scrollToSection("about")}>{t("About")}</a>
          <a onClick={() => scrollToSection("skills")}>{t("Skills")}</a>
          <a onClick={() => scrollToSection("projects")}>{t("Projects")}</a>
          <a onClick={() => scrollToSection("contact")}>{t("Contact")}</a>
        </div>

        <div className="navbar-buttons">
          <div className="lang-dropdown">
            <button
              onClick={() => setShowLangDropdown(!showLangDropdown)}
              className="lang-btn">
              <GrLanguage />
              {i18n.language.toUpperCase()}
            </button>
            {showLangDropdown && (
              <div className="lang-menu">
                <button
                  className="lang-btn"
                  onClick={() => changeLanguage("en")}>
                  English
                </button>
                <button
                  className="lang-btn"
                  onClick={() => changeLanguage("ar")}>
                  العربية
                </button>
              </div>
            )}
          </div>
          <button onClick={toggleTheme} className="theme-btn">
            {darkMode ? <GoSun /> : <FaRegMoon />}
          </button>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
