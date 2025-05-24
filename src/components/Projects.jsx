import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProjects } from "../api";
import "../style/Projects.css";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "ar";
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };
    getProjects();
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    };

    const observer = new IntersectionObserver(callback, observerOptions);

    const projectsSection = document.querySelector(".projects-section");
    if (projectsSection) observer.observe(projectsSection);

    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card) => observer.observe(card));

    return () => {
      if (projectsSection) observer.unobserve(projectsSection);
      projectCards.forEach((card) => observer.unobserve(card));
    };
  }, [projects]);

  return (
    <section className="projects-section" id="projects">
      <h2>{t("Projects")}</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-card"
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
            <img src={project.image} alt={project[`title_${lang}`]} />
            <h3>{project[`title_${lang}`]}</h3>
            <p>{project[`description_${lang}`]}</p>

            <div className="project-links">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Live Demo">
                  <i className="fa fa-external-link"></i>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub">
                  <i className="fa fa-github"></i>
                </a>
              )}
              <Link to={`/project/${project.id}`} title="Details">
                <i className="fa fa-info-circle"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
