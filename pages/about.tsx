import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Card3D from '../components/Card3D';

export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          À propos de moi
        </h1>
        <p className={styles.description}>
          Voici la page à propos de mon portfolio.
        </p>
        <div className={styles.cardContainer}>
          <Card3D />
        </div>
      </main>
    </div>
  );
}
