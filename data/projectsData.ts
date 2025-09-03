// Import nécessaire pour Next.js si on utilise des chemins d'image statiques
import image1 from './components/images/image1.png';
import image2 from './components/images/image2.png';
import image3 from './components/images/image3.png';
import image4 from './components/images/image4.png';
import image5 from './components/images/image5.png';
import Image from 'next/image';

// Définition de l'interface pour les projets
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string; // Changé de StaticImageData à string
  slug: string;
  category: string;
  details: string;
  githubUrl?: string;
  linkedinUrl?: string;
  liveUrl?: string;
}

// Tableau de projets
export const projects: Project[] = [
  {
    id: 1,
    title: 'Réplique du site Nike',
    description:
      "J'ai réalisé une réplique du site web de Nike pour tester mes connaissances en développement frontend. Ce projet m'a permis de mettre en pratique mes compétences en HTML, CSS et JavaScript.",
    imageUrl:
      'https://th.bing.com/th/id/OIP.FrkDWv59fvi7ZzCsLp-WPwHaDV?w=321&h=157&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    slug: 'projet-1',
    category: 'Web',
    details: 'Technologies utilisées : HTML, CSS, JavaScript',
    linkedinUrl:
      'https://www.linkedin.com/feed/update/urn:li:activity:7251542001324552193/',
  },
  {
    id: 2,
    title: 'CRUD pour Brabus',
    description:
      "J'ai développé un système de gestion de contenu (CRUD) pour le site web de Brabus. Ce projet m'a permis de mettre en pratique mes compétences en développement backend et en base de données. Les utilisateurs peuvent se connecter en tant qu'administrateurs ou utilisateurs pour créer, modifier, supprimer et mettre à jour des posts.",
    imageUrl:
      'https://www.fastcar.co.uk/wp-content/uploads/sites/2/2023/06/Brabus-Signature-Night-2023.png',
    slug: 'projet-2',
    category: 'Mobile',
    details: 'Technologies utilisées : SQL, PHP, CSS, HTML',
    githubUrl: 'https://github.com/ILIAS-ma/sql-brabus',
    linkedinUrl:
      'https://www.linkedin.com/posts/ilias-bounabat_webdevelopment-sqlsecurity-automobile-activity-7259436837834801153-M4dK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDMyLsBP7dquBWqcnR2PZJRl6dmeZ5Zazo',
  },
  {
    id: 3,
    title: 'Convertisseur de devise',
    description:
      "J'ai créé un convertisseur de devise en utilisant une API pour récupérer les taux de change en temps réel. Ce projet m'a permis de mettre en pratique mes compétences en développement frontend et en utilisation d'API.",
    imageUrl:
      'https://cimg.cnyes.cool/prod/news/4803365/l/ab1e3cf6cad5e237e85d0104d06cf5ce.jpg',
    slug: 'projet-3',
    category: 'Design',
    details: 'Technologies utilisées : JavaScript, API',
    githubUrl: 'https://github.com/ILIAS-ma/currency-converter',
    linkedinUrl:
      'https://www.linkedin.com/posts/ilias-bounabat_git-daezveloppementcollaboratif-gestiondeprojet-activity-7244763351598211072-9ICm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDMyLsBP7dquBWqcnR2PZJRl6dmeZ5Zazo',
  },
  // 🚀 Nouveau projet 1 (plateforme football)
  {
    id: 4,
    title: 'Plateforme Football – Ensemble On Est Plus Fort',
    description:
      "Dans le cadre de mon stage au sein de l'association Ensemble On Est Plus Fort (Drancy), j'ai participé à la conception d'une plateforme dédiée aux joueurs de football. Elle permet l'inscription, le suivi des performances et la gestion complète via un espace administrateur.",
    imageUrl:
      'https://placehold.co/600x400/0f172a/ffffff?text=Plateforme+Football', // à remplacer si tu as un vrai visuel
    slug: 'projet-4-football',
    category: 'Web',
    details:
      'Technologies utilisées : PHP (MVC), Node.js, MySQL, HTML, CSS, JavaScript, Agile',
    liveUrl: 'https://pfefootball.site/',
    linkedinUrl:
      'https://www.linkedin.com/feed/update/urn:li:activity:7345334033595162626/',
  },
  // 🚀 Nouveau projet 2 (site journalisme sportif)
  {
    id: 5,
    title: 'Site Journalisme Sportif – Ensemble On Est Plus Fort',
    description:
      "Toujours dans le cadre de mon stage à l'association Ensemble On Est Plus Fort, j'ai travaillé sur un site pour stagiaires en journalisme sportif. Il offre la possibilité de publier des articles, intégrer du contenu multimédia et gérer les publications via un espace admin.",
    imageUrl:
      'https://placehold.co/600x400/1a1a1a/ffffff?text=Journalisme+Sportif', // à remplacer si tu as un vrai visuel
    slug: 'projet-5-journalisme',
    category: 'Web',
    details:
      'Technologies utilisées : PHP (MVC), Node.js, MySQL, HTML, CSS, JavaScript, Agile',
    liveUrl: 'https://www.passe-d.net/',
    linkedinUrl:
      'https://www.linkedin.com/feed/update/urn:li:activity:7345334033595162626/',
  },
];
