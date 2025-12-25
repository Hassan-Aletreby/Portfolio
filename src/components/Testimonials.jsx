import { useTranslation } from "react-i18next";
import "../style/Testimonials.css";

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonials = t("testimonials.items", {
    returnObjects: true,
  });

  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="section-title">{t("testimonials.title")}</h2>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <img src={item.image} alt={item.name} className="testimonial-img" />

            <h3 className="testimonial-name">{item.name}</h3>
            <span className="testimonial-job">{item.job}</span>

            <p className="testimonial-review">"{item.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
