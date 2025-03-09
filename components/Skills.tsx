import * as React from 'react';
import styles from '../styles/Skills.module.css';

// Interface pour définir la structure d'une compétence
interface Skill {
  name: string;
  category: string;
}

// Tableau de compétences
const skills: Skill[] = [
  { name: 'JavaScript', category: 'JS' },
  { name: 'Python', category: 'Python' },
  { name: 'HTML', category: 'HTML' },
  { name: 'PHP', category: 'PHP' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Prisma', category: 'Backend' },
  { name: 'Figma', category: 'Design' },
  { name: 'Sass', category: 'CSS' },
  { name: 'Tailwind', category: 'CSS' },
  { name: 'NextJs', category: 'Frontend' },
  { name: 'Symfony', category: 'Backend' },
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'JS' },
  { name: 'WordPress', category: 'CMS' },
  { name: 'Drupal', category: 'CMS' },
  { name: 'Joomla', category: 'CMS' },
];

// Composant de compétences
const Skills: React.FC = () => {
  return (
    <div className={styles.skillsContainer}>
      <h1>Compétences</h1>
      <div className={styles.skillsCategories}>
        <div className={styles.skillsBackend}>
          <h2>Backend</h2>
          <ul>
            {skills.filter((skill) => skill.category === 'Backend').map((skill) => (
              <li key={skill.name}>{skill.name}</li>
            ))}
          </ul>
        </div>
        <div className={styles.skillsFrontend}>
          <h2>Frontend</h2>
          <ul>
            {skills.filter((skill) => ['Frontend', 'JS', 'CSS'].includes(skill.category)).map((skill) => (
              <li key={skill.name}>{skill.name}</li>
            ))}
          </ul>
        </div>
        <div className={styles.skillsBackend}>
          <h2>CMS</h2>
          <ul>
            {skills.filter((skill) => skill.category === 'CMS').map((skill) => (
              <li key={skill.name}>{skill.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
