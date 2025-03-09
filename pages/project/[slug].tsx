import React from 'react';
import { useRouter } from 'next/router';
import { projects } from '../../data/projectsData';
import styles from '../../styles/Project.module.css';
import NavBar from '../../components/nav-bar';
import Footer from '../../components/footer';
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
import Head from 'next/head';

const Project: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <p>Chargement...</p>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{project.title} | Portfolio</title>
        <meta name="description" content={project.description} />
      </Head>
      <NavBar />
      <div className={styles.projectContent}>
        <div className={styles.imageContainer}>
          <img 
            src={project.imageUrl} 
            alt={project.title}
            loading="lazy" 
            className={styles.image}
            onError={(e) => {
              console.error(`Erreur de chargement de l'image: ${project.imageUrl}`);
              e.currentTarget.src = "https://placehold.co/600x400/333/fff?text=Image+Non+Disponible";
            }}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.details}>
            <h2>Détails du projet</h2>
            <p>{project.details}</p>
          </div>
          <div className={styles.links}>
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                <FaGithub /> GitHub
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
            {project.linkedinUrl && (
              <a href={project.linkedinUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                <FaLinkedin /> LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
