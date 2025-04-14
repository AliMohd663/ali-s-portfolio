import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaTiktok, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} <b className={styles.Dev}>Dev-Ali</b>. All rights reserved.
      </p>
      <div className={styles.socialIcons}>
        <a href="https://www.facebook.com/share/18mTN94JTs/" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a>
        <a href="https://x.com/Alimohammedaba?t=GVIQBwkpnee33l99lEaV6A&s=09" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/in/ali-mohammed-11245530a/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
}
