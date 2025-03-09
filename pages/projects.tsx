import React, { useState } from 'react';
import Link from 'next/link';
import { projects } from '../data/projectsData';
import styles from '../styles/Projects.module.css';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);

  return (
    <div className={styles.container}>
      <NavBar />
      <h1 className={styles.title}>Mes Projets</h1>
      <div className={styles.filters}>
        {['All', 'Web', 'Mobile', 'Design'].map(category => (
          <button
            key={category}
            className={`${styles.filterButton} ${filter === category ? styles.active : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className={styles.projectsGrid}>
        {filteredProjects.map(project => (
          <Link key={project.id} href={`/project/${project.slug}`} legacyBehavior>
            <a className={styles.projectCard}>
              <img src={project.imageUrl} alt={project.title} className={styles.projectImage} />
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDescription}>{project.description}</p>
            </a>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
