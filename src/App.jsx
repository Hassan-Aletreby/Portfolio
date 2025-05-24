import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import ContactForm from "./components/ContactForm";
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

function ScrollToSectionWrapper({ children }) {
  const location = useLocation();
  const home = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    const targetId = location.state?.scrollTo;

    if (targetId) {
      const refs = {
        home: home,
        about: aboutRef,
        skills: skillsRef,
        projects: projectsRef,
        contact: contactRef,
      };
      const ref = refs[targetId];
      ref?.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <div ref={home}>
        <Hero />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <ContactForm />
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

function App() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { i18n } = useTranslation();

  useEffect(() => {
    const direction = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = direction;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router>
      <div className="pt-16 bg-white dark:bg-gray-900 min-h-screen text-black dark:text-white transition-all duration-300">
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />
        <Routes>
          <Route path="/" element={<ScrollToSectionWrapper />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
