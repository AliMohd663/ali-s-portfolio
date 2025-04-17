import React from "react";
import styles from "./Projects.module.css";
import amazonImg from '../../assets/amazon.jpeg';
import netflixImg from '../../assets/netflix.jpeg';
import appleImg from '../../assets/apple.jpeg';
import evangadiImg from '../../assets/evangadi.jpeg';
import { FaGithub } from "react-icons/fa";
import { VscLinkExternal } from "react-icons/vsc";

const projects = [
  {
    title: "Amazon E-Commerce",
    image: amazonImg,
    description: "A full-stack Amazon clone with product listings, cart, and checkout. Built using React, Redux, Firebase, and Stripe.",
    demoLink: "https://alimoh663.netlify.app",
    codeLink: "https://github.com/AliMohd663/amazon-clone"
  },
  {
    title: "Netflix clone",
    image: netflixImg,
    description: "A streaming platform replica built with React, Firebase, and Context API. Implements user authentication, movie browsing by category, and video playback functionality.",
    demoLink: "https://ali-mohd.netlify.app",
    codeLink: "https://github.com/AliMohd663/Netflix-Project"
  },
  {
    title: "Apple Clone",
    image: appleImg,
    description: "A responsive clone of Apple’s homepage, built with HTML, CSS, and JavaScript to replicate Apple’s clean design, layout, and smooth user experience.",
    demoLink: "https://arh-appple-alimohd663.netlify.app",
    codeLink: "https://github.com/AliMohd663/apple-dep"
  },
  {
    title: "Evangadi Forum",
    image: evangadiImg,
    description: "A community platform for posting questions and getting answers. Encourages knowledge sharing through discussions and engagement.",
    demoLink: "https://evangadiforum2017.ali-mohammed.com/",
    codeLink: "https://github.com/AliMohd663/forum2017"
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2> <b className={styles.build}>Built</b> & Deployed</h2>
        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
                <p className={styles.overlayDescription}>{project.description}</p>
              </div>
              <h3>{project.title}</h3>
              <div className={styles.projectLinks}>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <VscLinkExternal size={10} /> <small>Live Demo</small>
                </a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={11} /> <small>Source Code</small>
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
