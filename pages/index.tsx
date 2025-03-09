import Head from 'next/head';
import AboutMe from '../components/AboutMe';
import Card3D from '../components/Card3D';
import Skills from '../components/Skills'; // Assurez-vous que le chemin est correct

const projects = [
  {
    id: 1,
    title: "Site E-commerce Luxe",
    description: "Une expérience utilisateur immersive avec animations fluides et design élégant",
    imageUrl: "/images/project1.jpg"
  },
  {
    id: 2,
    title: "Application Blockchain",
    description: "Interface utilisateur moderne pour une plateforme de finance décentralisée",
    imageUrl: "/images/project2.jpg"
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    description: "Visualisation de données interactive et responsive pour entreprises",
    imageUrl: "https://th.bing.com/th/id/OIP.-bBWkxSIGl3a8VPxFeWOuwHaE8?w=221&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Head>
        <title>Mon Portefeuille</title>
        <meta name="description" content="Bienvenue sur mon portefeuille" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutMe 
        title="À propos de moi" 
        description="Je suis un développeur passionné par la création d'applications web performantes et esthétiques. Avec plusieurs années d'expérience dans le développement front-end et back-end, je m'efforce de créer des solutions innovantes qui répondent aux besoins des utilisateurs. Ma passion pour l'apprentissage continu me pousse à me tenir au courant des dernières technologies et tendances dans le domaine du développement web." 
        image="https://img.freepik.com/premium-vector/person-working-computer-vector-art-illustration-black-color-silhouette-8_666870-1242.jpg" 
      />
      <main className="bg-gray-900 min-h-screen">
        <section className="h-screen flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
            Mon Portefeuille
          </h1>
        </section>
        <Skills />
        <div className="flex flex-wrap justify-center gap-8">
          <Card3D 
            title={projects[0].title}
            description={projects[0].description}
            imageUrl={projects[0].imageUrl}
          />
        </div>
    
    
      </main>
    </div>
  );
}