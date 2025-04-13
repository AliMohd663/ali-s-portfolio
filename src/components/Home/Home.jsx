import React from "react";
import styles from "./Home.module.css";
import profileImage from "../../assets/BlackBG.jpeg"; 
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";


export default function Home() {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={profileImage} alt="Profile" className={styles.profileImage} />
        </div>
        <div className={styles.right}>
          <h1 className={styles.name}>Ali Mohammed</h1>
          <p className={styles.description}>
           <b className={styles.bold}> I’m a full-stack web developer</b> specializing in building responsive web applications using the MERN stack.
          </p>
          <div className={styles.socialIcons}>
            <a href="https://github.com/AliMohd663" target="_blank" rel="noopener noreferrer"><FiGithub size={25}/></a>
            <a href="https://www.linkedin.com/in/ali-mohammed-11245530a/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={25}/></a>
            <a href="mailto:aliw663.am@gmail.com" target="_blank" rel="noopener noreferrer"><MdOutlineMail size={25}/></a>
            <a href="https://Wa.me/+966552265395" target="_blank" rel="noopener noreferrer"> <FaWhatsapp  size={25}/></a>
          </div>
        </div>
      </div>
    </section>
  );
}
