import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styles from '../styles/footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h3>Me contacter</h3>
            <ul>
              <li>
                <a href="tel:+33651466582">Téléphone : +33 6 51 46 65 82 </a>
              </li>
              <li>
                <a href="mailto:bounabatilias2004@gmail.com">Email : bounabatilias2004@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <h3>Me suivre sur les réseaux sociaux</h3>
            <ul>
              <li>
                <Link href="https://www.linkedin.com/in/ilias-bounabat/" legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://github.com/ILIAS-ma" legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.socialLinks}>
          <Link href="https://github.com/ILIAS-ma" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/ilias-bounabat/" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </Link>
          <Link href="mailto:bounabatilias2004@gmail.com" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" aria-label="Email">
              <FaEnvelope />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
