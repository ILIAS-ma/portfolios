export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  dimensions: {
    width: number;
    height: number;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Projet 1',
    description: 'Description du Projet 1',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80',
    dimensions: {
      width: 600,
      height: 800,
    },
  },
  {
    id: 2,
    title: 'Projet 2',
    description: 'Description du Projet 2',
    imageUrl: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80',
    dimensions: {
      width: 600,
      height: 800,
    },
  },
  {
    id: 3,
    title: 'Projet 3',
    description: 'Description du Projet 3',
    imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80',
    dimensions: {
      width: 600,
      height: 800,
    },
  },
];
