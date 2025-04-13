import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2>About Me</h2>
        <p>
          I'm a passionate full-stack developer with a focus on creating modern, responsive web applications.
          I specialize in JavaScript, React, Node.js, and database systems like MySQL. With a strong background
          in UI/UX and API integrations, I enjoy bringing ideas to life in the browser.
        </p>
      </div>
    </section>
  );
}
