import { useTranslation } from "react-i18next";
import "../style/About.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>{t("AboutMe")}</h2>
          <p>{t("AboutDescription")}</p>
          <ul>
            <li>
              <p>
                {t("Experience")}: 2 {t("Years")}
              </p>
            </li>
            <li>
              <p>
                {t("Projects")}: {t("ManyProjects")}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
