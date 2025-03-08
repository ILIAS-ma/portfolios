import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/AboutMe.module.css';

interface AboutMeProps {
  title: string;
  description: string;
  image: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ title, description, image }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.div
          className={styles.content}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className={`${styles.text}`}
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>{description}</p>
          </motion.div>
          <motion.div
            className={`${styles.image}`}
            variants={imageVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img src={image} alt="À propos de moi" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
