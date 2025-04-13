import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { HiMenu, HiX } from "react-icons/hi";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoWrapper}> 
      Ali </div>

      <div className={styles.navRight}>
  <button className={styles.hamburger} onClick={toggleMenu}>
    {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
  </button>

  <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
    <li><a href="#home" onClick={closeMenu}>Home</a></li>
    <li><a href="#about" onClick={closeMenu}>About</a></li>
    <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
    <li><a href="#services" onClick={closeMenu}>Services</a></li>
    <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
  </ul>
</div>

    </nav>
  );
}