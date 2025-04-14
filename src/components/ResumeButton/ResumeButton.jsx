import React from "react";
import styles from "./ResumeButton.module.css";

export default function ResumeButton() {
  return (
    <a
    href="/Ali-Mohammed-Resume.pdf"
    download
    className={styles.resumeButton}
  >
    Download Resume
  </a>
  

  );
}


