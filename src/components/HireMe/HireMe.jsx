import React from "react";
import { MdSchool } from "react-icons/md";
import { FaBriefcase, FaAward } from "react-icons/fa";
import styles from "./hireMe.module.css";

function HireMe() {
  return (
    <section className={styles.hireMe}>
      <div className={styles.introText}>
        <h2>Hire Me</h2>
        <p>
          I bring a strong foundation in web development, practical experience, and a continuous learning mindset.
          Here’s a brief look at my background and skills:
        </p>
        <p>
          From building responsive frontends to deploying full-stack applications, I approach projects with creativity and precision.
        </p>
        <p>
          I’m committed to delivering clean, scalable code and always eager to grow alongside challenging work.
        </p>
      </div>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.icon}>
            <MdSchool size={35} color="yellowgreen" />
          </div>
          <h3>Education</h3>
          <p>
            I hold a strong educational background in computer science, with focused learning in web development, programming, and database design.
            I’ve consistently pursued technical knowledge both academically and independently.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>
            <FaBriefcase size={35} color="yellowgreen" />
          </div>
          <h3>Experience</h3>
          <p>
            I have built and deployed full-stack web apps using modern frontend tools and Node.js with connected relational databases.
            These projects demonstrate practical experience handling dynamic content and real-world functionality.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>
            <FaAward size={35} color="yellowgreen" />
          </div>
          <h3>Skills & Certificates</h3>
          <p>
            I have hands-on experience with React, JavaScript, Node.js, and responsive design. My skills cover both frontend and backend development using connected databases.
            I completed a comprehensive web development bootcamp at <strong>Evangadi INC.</strong>, where I built full-stack applications and sharpened my understanding of modern web technologies and workflows.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HireMe;
