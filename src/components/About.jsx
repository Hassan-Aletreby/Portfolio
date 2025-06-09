import { useTranslation } from "react-i18next";
import "../style/About.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>{t("AboutMe")}</h2>
          <p style={{ whiteSpace: "pre-line" }}>{t("AboutDescription")}</p>

          <ul>
            {/* <li>
              <strong>{t("Experience")}:</strong> 2 {t("Years")}
            </li> */}
            <li>
              <strong>{t("Projects")}:</strong> {t("ManyProjects")}
            </li>
            <li>
              <strong>{t("CurrentFocus")}:</strong> {t("ReactApps")}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
