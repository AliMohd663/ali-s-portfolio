import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsappSquare, FaEnvelope } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import{ MdAlternateEmail } from "react-icons/md";
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
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact <b className={styles.me}>Me</b> </h2>
      <br />

      <div className={styles.container}>
        {/* Left: contact info + social links */}
        <div className={styles.info}>
          <div className={styles.email}>
            <p><MdOutlineMailOutline style={{color: "yellowgreen", size:"25"}} /> aliw663.am@gmail.com</p>
            <p><MdAlternateEmail style={{color: "yellowgreen", size:"25"}} /> help@ali-mohammed.com</p>
            <p><BsTelephone style={{color: "yellowgreen", size:"25"}} /> +966552265395</p>
          </div>

          <div className={styles.socialIcons}>
            <a href="https://Wa.me/+966552265395" target="_blank" rel="noopener noreferrer">
              <FaWhatsappSquare size={30} />
            </a>
            <a href="mailto:aliw663.am@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={30} />
            </a>
            <a href="https://github.com/AliMohd663" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/ali-mohammed-11245530a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>

        {/* Right: contact form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send</button>
          {status && <p>{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
