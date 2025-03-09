import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ['Développeur Full Stack', 'Créateur Web', 'UX Enthusiast', 'Problem Solver'];
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentText = titles[currentIndex];
    let isDeleting = false;
    let charIndex = 0;

    const type = () => {
      if (!isDeleting && charIndex <= currentText.length) {
        setDisplayText(currentText.substring(0, charIndex));
        charIndex++;
        timeout = setTimeout(type, 100);
      } else if (isDeleting && charIndex >= 0) {
        setDisplayText(currentText.substring(0, charIndex));
        charIndex--;
        timeout = setTimeout(type, 50);
      } else if (!isDeleting && charIndex > currentText.length) {
        isDeleting = true;
        timeout = setTimeout(type, 1500);
      } else {
        isDeleting = false;
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        charIndex = 0;
        timeout = setTimeout(type, 200);
      }
    };

    type();
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <section id="hero" className="flex min-h-screen items-center justify-center px-8 bg-black">
      <div className="container mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-8">
          <h1 className="mb-4 text-5xl font-bold md:text-7xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Bonjour, Je suis
            </span>
          </h1>
          <h2 className="text-3xl font-semibold md:text-5xl min-h-[3rem]">
            {displayText}
            <span className="animate-blink">|</span>
          </h2>
        </motion.div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="mb-12 text-xl text-gray-300 max-w-2xl mx-auto">
          Je conçois et développe des expériences web modernes, en combinant code propre et design intuitif.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="flex justify-center gap-6">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="rounded-full bg-blue-500 px-8 py-3 font-bold text-white hover:bg-blue-600 transition-colors">
            Voir mes projets
          </motion.button>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="rounded-full border-2 border-white px-8 py-3 font-bold text-white hover:bg-white/10 transition-colors">
            Me contacter
          </motion.button>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.8 }} className="mt-12 flex justify-center space-x-6">
          <Link href="#" legacyBehavior>
            <motion.a whileHover={{ y: -3, color: "#6e5dcf" }} className="text-2xl text-gray-400 transition-colors">
              <FaGithub />
            </motion.a>
          </Link>
          <Link href="#" legacyBehavior>
            <motion.a whileHover={{ y: -3, color: "#0077b5" }} className="text-2xl text-gray-400 transition-colors">
              <FaLinkedin />
            </motion.a>
          </Link>
          <Link href="#" legacyBehavior>
            <motion.a whileHover={{ y: -3, color: "#1DA1F2" }} className="text-2xl text-gray-400 transition-colors">
              <FaTwitter />
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
