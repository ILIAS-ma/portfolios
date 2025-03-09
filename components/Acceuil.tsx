import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Acceuil.module.css';
import { FaArrowDown } from 'react-icons/fa';

const Acceuil: React.FC = () => {
  // Remplacer l'animation mot par mot par une phrase complète
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className={styles.acceuilSection}>
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className={styles.header}
        >
          <h1 className={styles.title}>Ilias Bounabat</h1>
          <h2 className={styles.subtitle}>Développeur Full Stack</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className={styles.description}
        >
          {/* Texte fixe au lieu d'une animation de mots */}
          Je conçois et développe des expériences web modernes, combinant code propre et design intuitif.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          onClick={handleScrollDown}
          className={styles.scrollButton}
          aria-label="Défiler vers le bas"
        >
          <FaArrowDown />
        </motion.button>
      </div>
    </section>
  );
};

export default Acceuil;
