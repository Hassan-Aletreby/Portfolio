import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import ContactForm from "./components/ContactForm";
import FloatingLinks from "./components/FloatingLinks";
import Loading from "./components/Loading";
import { useTranslation } from "react-i18next";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Footer from "./components/Footer";
import "font-awesome/css/font-awesome.min.css";
import Skills from "./components/Skills";
import ScrollToTopButton from "./components/ScrollToTopButton";

// ================================
//      SCROLL TO SECTION WRAPPER
// ================================
function ScrollToSectionWrapper() {
  const { search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const section = params.get("scroll");

    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150); // مهلة بسيطة لضمان تحميل العناصر أولاً
    }
  }, [search]);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactForm />
      <FloatingLinks />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

// ================================
//              APP
// ================================
function App() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  // ضبط اتجاه الصفحة حسب اللغة
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // شاشة اللودينج
  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 2000);
    const timer2 = setTimeout(() => setLoading(false), 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      {loading && <Loading fadeOut={fadeOut} />}

      <div className={`app-content ${loading ? "hidden" : "fade-in"}`}>
        <Router>
          <div className="pt-16 bg-white dark:bg-gray-900 min-h-screen text-black dark:text-white transition-all duration-500">
            <Navbar
              darkMode={darkMode}
              toggleDarkMode={() => setDarkMode(!darkMode)}
            />

            <Routes>
              <Route path="/" element={<ScrollToSectionWrapper />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
