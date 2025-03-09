import Head from 'next/head';
import AboutMe from '../components/AboutMe';
import Card3D from '../components/Card3D';
import ContactForm from '../components/ContactForm';
import Skills from '../components/Skills';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';
import Acceuil from '../components/Acceuil';
import NavBar from '../components/nav-bar';

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Head>
        <title>Mon Portefeuille</title>
        <meta name="description" content="Bienvenue sur mon portefeuille" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <NavBar /> {/* Déplacez NavBar ici */}
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Acceuil />
        <AboutMe 
          title="À propos de moi" 
          description="Je suis un développeur passionné par la création d'applications web performantes et esthétiques. Avec plusieurs années d'expérience dans le développement front-end et back-end, je m'efforce de créer des solutions innovantes qui répondent aux besoins des utilisateurs. Ma passion pour l'apprentissage continu me pousse à me tenir au courant des dernières technologies et tendances dans le domaine du développement web." 
          image="https://img.freepik.com/premium-vector/person-working-computer-vector-art-illustration-black-color-silhouette-8_666870-1242.jpg" 
        />
        <main className="bg-gray-900 min-h-screen">
          <AnimateOnScroll animation="slideUp">
            <section className="h-screen flex items-center justify-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
                Mon Portefeuille
              </h1>
            </section>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fadeIn" delay={0.2}>
            <Skills />
          </AnimateOnScroll>
          
          <div className="py-12 bg-gray-900">
            <h2 className="text-3xl font-bold text-center text-white mb-10">Mes Projets</h2>
            <div className="container mx-auto">
              <Card3D />
            </div>
          </div>
          <Timeline />
          <AnimateOnScroll animation="slideUp" delay={0.4}>
            <ContactForm />
          </AnimateOnScroll>
        </main>
      </motion.div>
    </div>
  );
}