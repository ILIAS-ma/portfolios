import Head from 'next/head';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Card3D from '../components/Card3D';

const projects = [
  {
    title: 'Projet 1',
    description: 'Description du Projet 1',
    image: '/images/project1.jpg',
  },
  {
    title: 'Projet 2',
    description: 'Description du Projet 2',
    image: '/images/project2.jpg',
  },
  {
    title: 'Projet 3',
    description: 'Description du Projet 3',
    image: '/images/project3.jpg',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Head>
        <title>Mon Portfolio</title>
        <meta name="description" content="Bienvenue sur mon portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AboutMe 
        title="À propos de moi" 
        description="Je suis un développeur passionné par la création d'applications web performantes et esthétiques. Avec plusieurs années d'expérience dans le développement front-end et back-end, je m'efforce de créer des solutions innovantes qui répondent aux besoins des utilisateurs. Ma passion pour l'apprentissage continu me pousse à me tenir au courant des dernières technologies et tendances dans le domaine du développement web." 
        image="https://img.freepik.com/premium-vector/person-working-computer-vector-art-illustration-black-color-silhouette-8_666870-1242.jpg" 
      />
      <div style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center', color: 'white' }}>Mon Portefeuille</h1>
        <Card3D />
      </div>
    </div>
  );
}