import React, { useRef, useState, useEffect } from 'react';
import styles from '../styles/Card3D.module.css';
import { projects } from '../data/projectsData';

const Card3D: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    // Ce code ne s'exécutera que côté client
    setIsBrowser(true);
    cardsRef.current = cardsRef.current.slice(0, projects.length);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (!isBrowser) return; // Ne rien faire si l'exécution est côté serveur

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

    // Calcul de la distance et du soulèvement
    const distance = Math.sqrt(
      Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
    );
    const lift = Math.min(
      (distance / Math.sqrt(centerX * centerX + centerY * centerY)) * 10,
      10
    );

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

    // Application de l'effet de brillance
    const glareElement = card.querySelector(`.${styles.cardGlare}`);
    if (glareElement instanceof HTMLElement) {
      glareElement.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 80%)`;
      glareElement.style.opacity = '1';
    }
  };

  const handleMouseLeave = (index: number) => {
    if (!isBrowser) return; // Ne rien faire si l'exécution est côté serveur
    
    const card = cardsRef.current[index];
    if (!card) return;

    card.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(0)';
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
          key={project.id}
          ref={(el) => {
            if (isBrowser) {
              cardsRef.current[index] = el;
            }
          }}
          className={`${styles.card} ${activeIndex === index ? styles.active : ''}`}
          onMouseMove={(e) => handleMouseMove(e, index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <div className={styles.cardContent}>
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className={styles.image}
              onError={(e) => {
                console.error(`Erreur de chargement de l'image: ${project.imageUrl}`);
                e.currentTarget.src = "https://via.placeholder.com/300x400/333/fff?text=Image+Non+Disponible";
              }} 
            />
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
