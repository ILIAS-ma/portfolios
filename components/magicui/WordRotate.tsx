import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WordRotateProps {
  words: string[];
  duration: number;
  className?: string;
  motionProps?: any;
}

const WordRotate: React.FC<WordRotateProps> = ({ words, duration, className, motionProps }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className={className}>
      <AnimatePresence exitBeforeEnter>
        <motion.span key={words[index]} {...motionProps}>
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default WordRotate;
