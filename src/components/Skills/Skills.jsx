import React from "react";
import styles from "./Skills.module.css";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiBootstrap,
  SiMongodb
} from "react-icons/si";

const skills = [
  {
    name: "JavaScript",
    description: "Core scripting language for building dynamic web apps.",
    icon: <SiJavascript className={styles.icon} />
  },
  {
    name: "React.js",
    description: "Component-based library for building modern UIs.",
    icon: <SiReact className={styles.icon} />
  },
  {
    name: "Node.js",
    description: "JavaScript runtime for backend development.",
    icon: <SiNodedotjs className={styles.icon} />
  },
  {
    name: "Express.js",
    description: "Minimal backend framework for Node.js apps.",
    icon: <SiExpress className={styles.icon} />
  },
  {
    name: "MySQL",
    description: "Relational database for structured data.",
    icon: <SiMysql className={styles.icon} />
  },
  {
    name: "HTML & CSS",
    description: "Markup and styling for web pages.",
    icon: (
      <>
        <SiHtml5 className={styles.icon} />
        <SiCss3 className={styles.icon} />
      </>
    )
  },
  {
    name: "Git & GitHub",
    description: "Version control and collaboration tools.",
    icon: <SiGithub className={styles.icon} />
  },
  {
    name: "Bootstrap",
    description: "Framework for responsive UI design.",
    icon: <SiBootstrap className={styles.icon} />
  },
  {
    name: "REST APIs",
    description: "Interfacing between frontend and backend.",
    icon: <SiExpress className={styles.icon} />
  },
  {
    name: "MongoDB",
    description: "NoSQL database for flexible data storage.",
    icon: <SiMongodb className={styles.icon} />
  }
];

export default function Skills() {
  return (
    <section  className={styles.skills} id="skills">
      <div className={styles.container}>
        <h2 className={styles.namee}><b className={styles.tools}>Tools</b>  & Technologies</h2>
        <div className={styles.cardGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.card}>
              <h3>{skill.name}</h3>
              <div className={styles.iconWrapper}>{skill.icon}</div>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
