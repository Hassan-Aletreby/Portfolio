import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import "../style/Contactform.css";

const ContactForm = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_p0h0409", "template_yrkin88", form.current, {
        publicKey: "5hGGMG_5w7oPz74-2",
      })
      .then(
        () => {
          setStatusMessage(t("contact.success"));
          form.current.reset();
        },
        (error) => {
          setStatusMessage(t("contact.error"));
          console.error(error);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2>{t("contact.title")}</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>{t("contact.name")}</label>
        <input
          type="text"
          name="name"
          required
          requiredlabel={t("contact.name")}
        />

        <label>{t("contact.email")}</label>
        <input
          type="email"
          name="email"
          required
          requiredlabel={t("contact.email")}
        />

        <label>{t("contact.message")}</label>
        <textarea
          name="message"
          required
          requiredlabel={t("contact.message")}></textarea>

        <button type="submit">{t("contact.send")}</button>
      </form>
      {statusMessage && <p>{statusMessage}</p>}
    </section>
  );
};

export default ContactForm;
