import Link from 'next/link';
import styles from '../styles/404.module.css';

const Custom404 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Non Trouvée</h1>
      <p className={styles.description}>Désolé, la page que vous recherchez n'existe pas.</p>
      <Link href="/" legacyBehavior>
        <a className={styles.homeLink}>Retour à l'accueil</a>
      </Link>
    </div>
  );
};

export default Custom404;
