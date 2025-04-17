import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsappSquare,
  FaEnvelope
} from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { MdLocationOn, MdAlternateEmail } from "react-icons/md";
import emailjs from "emailjs-com";
import styles from "./contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_tkckjp6",
        "template_vywsnub",
        formData,
        "Xa2e2bOzBxX6YzzX3"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Something went wrong. Please try again.");
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2>
        Contact <b className={styles.me}>Me</b>
      </h2>

      <div className={styles.container}>
        {/* Contact Information */}
        <div className={styles.info}>
          <div className={styles.email}>
            <div>
              <h1>Get in Touch</h1>
              <p>
                I'm always open to new opportunities—whether it's a project
                inquiry, a potential collaboration, or just a friendly
                connection. Feel free to reach out!
              </p>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.icon}>
                <MdAlternateEmail color="yellowgreen" size={30} />
              </div>
              <div className={styles.details}>
                <h4>Email</h4>
                <p>aliw663.am@gmail.com</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.icon}>
                <MdLocationOn color="yellowgreen" size={30} />
              </div>
              <div className={styles.details}>
                <h4>Location</h4>
                <p>Eastern, Saudi Arabia</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.icon}>
                <BsTelephone color="yellowgreen" size={25} />
              </div>
              <div className={styles.details}>
                <h4>Phone</h4>
                <p>+966552265395</p>
              </div>
            </div>
          </div>

          <div className={styles.socialIcons}>
            <a
              href="https://Wa.me/+966552265395"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsappSquare size={30} />
            </a>
            <a
              href="mailto:aliw663.am@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={30} />
            </a>
            <a
              href="https://github.com/AliMohd663"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/ali-mohammed-11245530a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
            />
          </div>

          <button type="submit">Send</button>
          {status && <p className={styles.statusMsg}>{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
