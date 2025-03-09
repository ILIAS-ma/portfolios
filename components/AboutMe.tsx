import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/AboutMe.module.css';
import AnimateOnScroll from './AnimateOnScroll';

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

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <AnimateOnScroll animation="slideRight">
          <h2 className={styles.title}>{title}</h2>
        </AnimateOnScroll>
        
        <div className={styles.content}>
          <AnimateOnScroll animation="slideRight" delay={0.2}>
            <div className={`${styles.text}`}>
              <p>{description}</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="slideLeft" delay={0.4}>
            <div className={`${styles.image}`}>
              <img src={image} alt="À propos de moi" style={{ marginTop: '20px' }} />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
