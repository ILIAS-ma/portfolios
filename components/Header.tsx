import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'professional', 'education', 'skills', 'projects', 'contact'];
      setScrolled(window.scrollY > 20);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : ''}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Portfolio
        </motion.div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['hero', 'about', 'professional', 'skills', 'projects', 'contact'].map((item) => (
              <motion.li key={item}>
                <a
                  href={`#${item}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item); }}
                  className={`text-sm uppercase tracking-wider ${activeSection === item ? 'text-blue-400 font-medium' : 'text-gray-300 hover:text-white'}`}
                >
                  {item === 'hero' ? 'Accueil' : item}
                  {activeSection === item && (
                    <motion.div
                      className="h-0.5 bg-blue-400 mt-1"
                      layoutId="activeSection"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col space-y-1.5">
            <motion.span animate={{ rotateZ: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} className="block h-0.5 w-6 bg-white" />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block h-0.5 w-6 bg-white" />
            <motion.span animate={{ rotateZ: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} className="block h-0.5 w-6 bg-white" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-gray-900/95 mt-4 rounded-lg overflow-hidden">
          <ul className="flex flex-col p-4 space-y-4">
            {['hero', 'about', 'professional', 'skills', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item); }}
                  className={`block px-4 py-2 text-sm uppercase tracking-wider ${activeSection === item ? 'text-blue-400 font-medium' : 'text-gray-300 hover:text-white'}`}
                >
                  {item === 'hero' ? 'Accueil' : item}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
}
