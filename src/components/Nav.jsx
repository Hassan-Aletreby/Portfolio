import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "../style/Navbar.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
      setDarkMode(savedMode === "dark");
      document.body.classList.toggle("dark", savedMode === "dark");
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
    navigate("/", { state: { scrollTo: section } });
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={() => scrollToSection("home")}>
          <h2>{t("Port")}</h2>
          <img src="/public/profile.png" alt="" />
          <h2>{t("folio")}</h2>
        </div>

        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => scrollToSection("home")}>{t("Home")}</button>
          <button onClick={() => scrollToSection("about")}>{t("About")}</button>
          <button onClick={() => scrollToSection("skills")}>
            {t("Skills")}
          </button>
          <button onClick={() => scrollToSection("projects")}>
            {t("Projects")}
          </button>
          <button onClick={() => scrollToSection("contact")}>
            {t("Contact")}
          </button>
        </div>

        <div className="navbar-buttons">
          <div className="lang-dropdown">
            <button
              onClick={() => setShowLangDropdown(!showLangDropdown)}
              className="lang-btn">
              🌐 {i18n.language.toUpperCase()}
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
            {darkMode ? "🌞" : "🌙"}
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
