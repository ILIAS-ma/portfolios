import React from 'react';
import { useRouter } from 'next/router';
import { projects } from '../../data/projectsData';
import styles from '../../styles/Project.module.css';
import NavBar from '../../components/nav-bar';
import Footer from '../../components/footer';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Project: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <p>Projet non trouvé</p>;
  }

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.projectContent}>
        <div className={styles.imageContainer}>
          <img src={project.imageUrl} alt={project.title} className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.details}>
            <h2>Détails du projet</h2>
            <p>{project.details}</p>
          </div>
          <div className={styles.links}>
            <a href="https://github.com/ILIAS-ma" target="_blank" rel="noopener noreferrer" className={styles.link}>
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/ilias-bounabat/" target="_blank" rel="noopener noreferrer" className={styles.link}>
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
