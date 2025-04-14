import React from "react";
import styles from "./ResumeButton.module.css";

export default function ResumeButton() {
  return (
    <a
      href="/AliMohammedResume.pdf"
      download
      className={styles.resumeButton}
    >
      Download Resume
    </a>
  );
}


