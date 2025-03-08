"use client";

import { useEffect, useState } from "react";
import styles from '../../styles/MorphingText.module.css';

const texts = ["Développeur", "Designer", "Créateur", "Innovateur"];

export const MorphingText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.morphingText}>
      {texts.map((text, i) => (
        <span
          key={i}
          className={`${styles.text} ${i === index ? styles.visible : ''}`}
        >
          {text}
        </span>
      ))}
    </div>
  );
};
