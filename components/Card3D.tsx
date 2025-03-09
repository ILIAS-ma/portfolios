// components/Card3D.tsx

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Card3D.module.css';

interface Project {
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Projet 1',
    description: 'Description du Projet 1',
    image: 'https://th.bing.com/th/id/OIP.V3nD0p-Bhf-TivgmJaYR0wHaEK?rs=1&pid=ImgDetMain',
  },
  {
    title: 'Projet 2',
    description: 'Description du Projet 2',
    image: 'https://th.bing.com/th/id/OIP.IqH_Scclir84QAm86x2CLAHaE8?pid=ImgDet&w=206&h=137&c=7&dpr=1,1',
  },
  {
    title: 'Projet 3',
    description: 'Description du Projet 3',
    image: 'https://th.bing.com/th/id/OIP.-bBWkxSIGl3a8VPxFeWOuwHaE8?w=221&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
  },
];

const Card3D: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, projects.length);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 30;
    const rotateX = -((y - centerY) / centerY) * 30;
    
    card.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      scale3d(1.1, 1.1, 1.1)
    `;
    
    const shadowX = rotateY / 2;
    const shadowY = -rotateX / 2;
    card.style.boxShadow = `
      ${shadowX}px ${shadowY}px 30px rgba(0, 0, 0, 0.4),
      0 10px 20px rgba(0, 0, 0, 0.3)
    `;
    
    const glareElement = card.querySelector(`.${styles.cardGlare}`);
    if (glareElement instanceof HTMLElement) {
      glareElement.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 80%)`;
      glareElement.style.opacity = '1';
    }
  };

  const handleMouseLeave = (index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
    
    const glareElement = card.querySelector(`.${styles.cardGlare}`);
    if (glareElement instanceof HTMLElement) {
      glareElement.style.opacity = '0';
    }
    
    setActiveIndex(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.cardContainer}
    >
      <h1 className={styles.mainTitle}>Mes Projets</h1>
      {projects.map((project, index) => (
        <motion.div
          ref={el => cardsRef.current[index] = el}
          key={index}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          viewport={{ once: true, amount: 0.5 }}
          className={styles.card}
          onMouseMove={e => handleMouseMove(e, index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={styles.cardContent}
          >
            <img src={project.image} alt={project.title} className={styles.image} />
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.cardInfo}
            >
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDescription}>{project.description}</p>
            </motion.div>
            <div className={styles.cardGlare}></div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Card3D;
