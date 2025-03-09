import React, { useEffect } from "react";
import styles from "../styles/Timeline.module.css";
import AnimateOnScroll from "./AnimateOnScroll";
import { motion } from "framer-motion";

const Timeline: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          }
        });
      },
      { threshold: 0.5 }
    );

    const items = document.querySelectorAll(`.${styles.timelineItem}`);
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.timelineContainer}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.sectionTitle}>Mon Parcours</h2>
      </motion.div>
      
      <div className={styles.timeline}>
        {/* Timeline Line */}
        <div className={styles.timelineLine}>
          <div className={styles.timelineProgress}></div>
        </div>

        {/* Block 1 */}
        <div className={`${styles.timelineItem} ${styles.itemRight}`}>
          <div className={styles.timelinePoint}>
            <div className={styles.pointOuter}></div>
            <div className={styles.pointInner}></div>
          </div>
          <motion.div 
            className={styles.timelineContent}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className={styles.contentInner}>
              <h3 className={styles.itemTitle}>IIM Digital School Développement Web</h3>
              <div className={styles.periodTag}>
                <span className={styles.periodDate}>2023 - 2026</span>
                <span className={styles.periodTitle}>BACHELOR DIGITAL INNOVATION</span>
              </div>
              <ul className={styles.list}>
                <li>Backend & BDD : PHP/MySQL, Node.js</li>
                <li>Sécurisation et modélisation des données</li>
                <li>UX/UI : Wireframes, prototypes, interfaces optimisées</li>
                <li>Gestion de projet : Versionning, architecture fullstack, CMS</li>
                <li>Innovation : IoT, IA, algorithmie</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Block 2 */}
        <div className={`${styles.timelineItem} ${styles.itemLeft}`}>
          <div className={styles.timelinePoint}>
            <div className={styles.pointOuter}></div>
            <div className={styles.pointInner}></div>
          </div>
          <motion.div 
            className={styles.timelineContent}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className={styles.contentInner}>
              <h3 className={styles.itemTitle}>Classe Préparatoire - Sorbonne Paris Nord</h3>
              <div className={styles.periodTag}>
                <span className={styles.periodDate}>2022 - 2023</span>
              </div>
              <ul className={styles.list}>
                <li>Mathématique</li>
                <li>Physique</li>
                <li>Chimie</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Block 3 */}
        <div className={`${styles.timelineItem} ${styles.itemRight}`}>
          <div className={styles.timelinePoint}>
            <div className={styles.pointOuter}></div>
            <div className={styles.pointInner}></div>
          </div>
          <motion.div 
            className={styles.timelineContent}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className={styles.contentInner}>
              <h3 className={styles.itemTitle}>Lycée Général - Jean-Zay</h3>
              <div className={styles.periodTag}>
                <span className={styles.periodDate}>2019 - 2022</span>
              </div>
              <ul className={styles.list}>
                <li>Mathématiques</li>
                <li>Physique et Chimie</li>
                <li>Littérature anglaise</li>
                <li>Biotechnologie</li>
                <li>Classe européenne</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
