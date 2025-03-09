import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles/Navbar.module.css';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <Link href="/" legacyBehavior>
          <a>Mon Portfolio</a>
        </Link>
      </div>
      <div className={styles.navbarToggle} onClick={() => setIsOpen(!isOpen)}>
        <motion.span 
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
        />
        <motion.span 
          animate={{ opacity: isOpen ? 0 : 1 }}
        />
        <motion.span 
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
        />
      </div>
      <div className={`${styles.navbarMenu} ${isOpen ? styles.isOpen : ''}`}>
        <ul>
          <li>
            <Link href="#about" legacyBehavior>
              <a onClick={() => setIsOpen(false)}>À propos</a>
            </Link>
          </li>
          <li>
            <Link href="#projects" legacyBehavior>
              <a onClick={() => setIsOpen(false)}>Projets</a>
            </Link>
          </li>
          <li>
            <Link href="#skills" legacyBehavior>
              <a onClick={() => setIsOpen(false)}>Compétences</a>
            </Link>
          </li>
          <li>
            <Link href="#contact" legacyBehavior>
              <a onClick={() => setIsOpen(false)}>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
