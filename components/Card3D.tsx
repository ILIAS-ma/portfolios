// components/Card3D.tsx

import React, { useRef, useState, useEffect } from 'react';
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
    image: 'https://via.placeholder.com/300x200?text=Projet+1',
  },
  {
    title: 'Projet 2',
    description: 'Description du Projet 2',
    image: 'https://via.placeholder.com/300x200?text=Projet+2',
  },
  {
    title: 'Projet 3',
    description: 'Description du Projet 3',
    image: 'https://via.placeholder.com/300x200?text=Projet+3',
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
    
    const rotateY = ((x - centerX) / centerX) * 20;
    const rotateX = -((y - centerY) / centerY) * 20;
    
    const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
    const lift = Math.min(distance / Math.sqrt(centerX * centerX + centerY * centerY) * 10, 10);
    
    card.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      scale3d(1.05, 1.05, 1.05) 
      translateZ(${lift}px)
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
    
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(0)';
    card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
    
    const glareElement = card.querySelector(`.${styles.cardGlare}`);
    if (glareElement instanceof HTMLElement) {
      glareElement.style.opacity = '0';
    }
    
    setActiveIndex(null);
  };

  return (
    <div className={styles.cardContainer}>
      {projects.map((project, index) => (
        <div
          key={index}
          ref={el => cardsRef.current[index] = el}
          className={`${styles.card} ${activeIndex === index ? styles.active : ''}`}
          onMouseMove={e => handleMouseMove(e, index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <div className={styles.cardContent}>
            <img src={project.image} alt={project.title} className={styles.image} />
            <div className={styles.cardInfo}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDescription}>{project.description}</p>
            </div>
            <div className={styles.cardGlare}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card3D;
