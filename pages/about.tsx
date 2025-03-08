import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>À propos</title>
        <meta name="description" content="En savoir plus sur moi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          À propos de moi
        </h1>
        <p className={styles.description}>
          Voici la page à propos de mon portfolio.
        </p>
      </main>
    </div>
  );
}
