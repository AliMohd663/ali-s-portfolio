import React from "react";
import styles from "./Services.module.css";
import { FaCode, FaDatabase, FaLaptopCode, FaSyncAlt } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { RiToolsLine, RiDraftLine, RiCloudLine } from "react-icons/ri";

const services = [
  {
    title: "Modern Web Applications",
    description: "Full-stack apps using React for frontend and Node.js/Express for backend.",
    icon: <FaLaptopCode className={styles.icon} />
  },
  {
    title: "REST API Integration",
    description: "Connecting frontend apps to RESTful APIs with Express and MySQL.",
    icon: <FaSyncAlt className={styles.icon} />
  },
  {
    title: "Interactive Frontends",
    description: "Responsive interfaces using React, Bootstrap, and mobile-first design.",
    icon: <FaCode className={styles.icon} />
  },
  {
    title: "Database Solutions",
    description: "Designing scalable MySQL/MariaDB relational databases.",
    icon: <FaDatabase className={styles.icon} />
  },
  {
    title: "Website Modernization",
    description: "Upgrading legacy websites into dynamic React-based applications.",
    icon: <RiCloudLine className={styles.icon} />
  },
  {
    title: "Project Prototyping",
    description: "MVP development using modern MERN stack tools and workflows.",
    icon: <RiDraftLine className={styles.icon} />
  },
  {
    title: "UI/UX Implementation",
    description: "Translating design mockups into accessible web interfaces.",
    icon: <MdDesignServices className={styles.icon} />
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing updates and improvements for React/Node.js projects.",
    icon: <RiToolsLine className={styles.icon} />
  }
];

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <h2 className={styles.heading}> <b className={styles.myservice}>My</b> Services</h2>
        <div className={styles.cards}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <h3>{service.title}</h3>
              {service.icon}
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
