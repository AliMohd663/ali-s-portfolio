import React from "react";
import styles from "./about.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About <b className={styles.aboutme}>Me</b></h2>
      <p>I'm a full-stack web developer passionate about building complete digital solutions. My toolkit includes:
Frontend: HTML5, CSS3, JavaScript (ES6+), and React for creating dynamic, responsive interfaces
Backend: Node.js & Express for crafting scalable server-side architectures
I thrive on turning complex problems into elegant solutions, obsessing over clean code and seamless user experiences. From pixel-perfect layouts to RESTful APIs, I love bridging the gap between design and functionality.

</p>
    </section>
  );
}

export default About;
