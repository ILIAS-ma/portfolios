import * as React from 'react';
import styles from '../styles/Skills.module.css';
import AnimateOnScroll from './AnimateOnScroll';

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
      <AnimateOnScroll animation="slideUp">
        <h1 className={styles.skillsTitle}>Compétences</h1>
      </AnimateOnScroll>
      
      <div className={styles.skillsCategories}>
        <AnimateOnScroll animation="slideRight" delay={0.2}>
          <div className={styles.skillsBackend}>
            <h2>Backend</h2>
            <ul>
              {skills.filter((skill) => skill.category === 'Backend').map((skill, index) => (
                <AnimateOnScroll key={skill.name} animation="scale" delay={0.1 * index}>
                  <li>{skill.name}</li>
                </AnimateOnScroll>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll animation="fadeIn" delay={0.3}>
          <div className={styles.skillsFrontend}>
            <h2>Frontend</h2>
            <ul>
              {skills.filter((skill) => ['Frontend', 'JS', 'CSS'].includes(skill.category)).map((skill, index) => (
                <AnimateOnScroll key={skill.name} animation="scale" delay={0.1 * index}>
                  <li>{skill.name}</li>
                </AnimateOnScroll>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll animation="slideLeft" delay={0.4}>
          <div className={styles.skillsBackend}>
            <h2>CMS</h2>
            <ul>
              {skills.filter((skill) => skill.category === 'CMS').map((skill, index) => (
                <AnimateOnScroll key={skill.name} animation="scale" delay={0.1 * index}>
                  <li>{skill.name}</li>
                </AnimateOnScroll>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Skills;
