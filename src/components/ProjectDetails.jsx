import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { fetchProjectById } from "../api";
import "../style/ProjectDetails.css";
import { useNavigate } from "react-router-dom";

const ProjectDetails = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/", { state: { scrollTo: "projects" } });
  };
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "ar";

  const [project, setProject] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const getProject = async () => {
      const found = await fetchProjectById(id);
      setProject(found);
      if (found?.image) setMainImage(found.image);
    };
    getProject();
  }, [id]);

  if (!project) return <p>{t("Loading")}...</p>;

  const handleImageClick = (img) => {
    setMainImage(img);
  };

  return (
    <section className="project-details">
      <div className="container">
        <h2>{project[`title_${lang}`]}</h2>

        <div className="main__pic">
          <div className="main-image-container">
            <img
              className="main-image"
              src={mainImage}
              alt={project[`title_${lang}`]}
            />
          </div>

          {project.images?.length > 0 && (
            <div className="thumbnails">
              {project.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`thumbnail-${index}`}
                  className={`thumb ${mainImage === img ? "active" : ""}`}
                  onClick={() => handleImageClick(img)}
                />
              ))}
            </div>
          )}
        </div>

        <p>{project[`description_${lang}`]}</p>

        {project[`details_${lang}`] && <p>{project[`details_${lang}`]}</p>}

        {project.languages?.length > 0 && (
          <div className="languages">
            <h4>{t("Languages")}</h4>
            <ul>
              {project.languages.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="links">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="btn">
              {t("Live Demo")}
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn">
              GitHub
            </a>
          )}
        </div>

        <button onClick={handleBack} className="back-btn">
          {t("Back To Home")}
        </button>
      </div>
    </section>
  );
};

export default ProjectDetails;
