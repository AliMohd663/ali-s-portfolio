import React from "react";
import styles from "./ResumeButton.module.css";

export default function ResumeButton() {
  return (
    <a
      href="../../../public/my-res.pdf"
      download
      className={styles.resumeButton}
    >
      Download Resume
    </a>
  );
}


