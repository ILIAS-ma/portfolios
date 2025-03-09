import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';  // Ajout de l'import pour Next Image
import styles from '../styles/Card3D.module.css';
import { projects } from '../data/projectsData';

const Card3D: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
    cardsRef.current = cardsRef.current.slice(0, projects.length);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (!isBrowser) return;

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

    const glareElement = card.querySelector(`.${styles.cardGlare}`);
    if (glareElement instanceof HTMLElement) {
      glareElement.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 80%)`;
      glareElement.style.opacity = '1';
    }
  };

  const handleMouseLeave = (index: number) => {
    if (!isBrowser) return;
    
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

  // Fonction améliorée pour gérer les erreurs de chargement d'image
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, projectTitle: string) => {
    console.error(`Erreur de chargement de l'image pour le projet: ${projectTitle}`);
    // Fallback vers une image de placeholder fiable
    e.currentTarget.src = "https://placehold.co/300x400/333/fff?text=Image+Non+Disponible";
    e.currentTarget.classList.add(styles.errorImage);
  };

  // Fonction pour extraire les technologies du texte "details"
  const extractTechnologies = (details: string) => {
    const techMatch = details.match(/Technologies utilisées\s*:\s*(.*)/i);
    if (techMatch && techMatch[1]) {
      return techMatch[1].trim();
    }
    return "";
  };

  return (
    <div className={styles.cardContainer}>
      {projects.map((project, index) => (
        <Link key={project.id} href={`/project/${project.slug}`} legacyBehavior>
          <a className={styles.projectLink}>
            <div
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
                {/* Utilisation de l'élément Image de Next.js pour une meilleure optimisation */}
                <div className={styles.imageWrapper}>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    loading="lazy"
                    className={styles.image}
                    onError={(e) => handleImageError(e, project.title)}
                  />
                </div>
                <div className={styles.cardInfo}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <div className={styles.techTags}>
                    {extractTechnologies(project.details).split(',').map((tech, i) => (
                      <span key={i} className={styles.techTag}>{tech.trim()}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.cardGlare}></div>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Card3D;
