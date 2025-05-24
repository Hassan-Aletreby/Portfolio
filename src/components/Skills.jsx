import React, { useEffect, useState } from "react";
import { getSkills } from "../api";
import "../style/Skills.css";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await getSkills();
        setSkills(data);
      } catch (error) {
        console.error("فشل تحميل المهارات:", error);
      }
    };

    fetchSkills();
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

    const skillsSection = document.querySelector(".skills-section");
    if (skillsSection) observer.observe(skillsSection);

    const skillCards = document.querySelectorAll(".skill-card");
    skillCards.forEach((card) => observer.observe(card));

    return () => {
      if (skillsSection) observer.unobserve(skillsSection);
      skillCards.forEach((card) => observer.unobserve(card));
    };
  }, [skills]);

  return (
    <section className="skills-section" id="skills">
      <h2>{t("Skills")}</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            className="skill-card"
            key={skill.id || index}
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
            <img src={skill.icon} alt={skill.name} />
            <h3>{skill.name}</h3>{" "}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
