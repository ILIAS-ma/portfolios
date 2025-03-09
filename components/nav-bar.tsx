import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/Navbar.module.css';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.pageYOffset + 100;
      
      // Détection du défilement pour la barre de navigation
      setScrolled(window.scrollY > 20);

      // Détection de la section active
      sections.forEach((section) => {
        const sectionId = section.getAttribute('id');
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveLink(sectionId || 'home');
        }
      });
    };

    // Ajout de l'ID à la section d'accueil si elle n'en a pas
    const firstSection = document.querySelector('section:first-of-type');
    if (firstSection && !firstSection.getAttribute('id')) {
      firstSection.setAttribute('id', 'home');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      closeMenu();
      setActiveLink(id);
    }
  };

  const menuItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'projects', label: 'Projets' },
    { id: 'education', label: 'Parcours' }, // Renommé de 'Scolarité' à 'Parcours'
    { id: 'skills', label: 'Compétences' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarBrand}>
        <Link href="/" legacyBehavior>
          <a>Mon Portfolio</a>
        </Link>
      </div>
      
      <ul className={styles.navbarLinks}>
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link href={`#${item.id}`} legacyBehavior>
              <a 
                className={activeLink === item.id ? styles.active : ''}
                onClick={(e) => scrollToSection(item.id, e)}
              >
                {item.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.navbarToggle} onClick={() => setIsOpen(!isOpen)}>
        <motion.span 
          animate={{ 
            rotate: isOpen ? 45 : 0, 
            y: isOpen ? 9 : 0,
            backgroundColor: isOpen ? "#000" : "#000" 
          }}
        />
        <motion.span 
          animate={{ 
            opacity: isOpen ? 0 : 1,
            width: isOpen ? 0 : "100%" 
          }}
        />
        <motion.span 
          animate={{ 
            rotate: isOpen ? -45 : 0, 
            y: isOpen ? -9 : 0,
            backgroundColor: isOpen ? "#000" : "#000" 
          }}
        />
      </div>

      <AnimatePresence>
        <motion.div 
          className={`${styles.navbarMenu} ${isOpen ? styles.isOpen : ''}`}
          initial={{ opacity: 0, x: "100%" }}
          animate={{ 
            opacity: isOpen ? 1 : 0,
            x: isOpen ? "0%" : "100%"
          }}
          transition={{ duration: 0.3 }}
        >
          <ul>
            {menuItems.map((item, index) => (
              <motion.li 
                key={item.id}
                custom={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isOpen ? 1 : 0,
                  y: isOpen ? 0 : 20
                }}
                transition={{ delay: isOpen ? index * 0.1 : 0 }}
                style={{ "--index": index } as React.CSSProperties}
              >
                <Link href={`#${item.id}`} legacyBehavior>
                  <a onClick={(e) => scrollToSection(item.id, e)}>
                    {item.label}
                  </a>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
