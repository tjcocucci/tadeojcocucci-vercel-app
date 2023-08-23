export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const contentItems: { name: string; items: Item[] }[] = [
  {
    name: "Sobre mí",
    items: [
      {
        name: "Hola!",
        slug: "about/hello",
        description: "Información sobre mí y mi trabajo",
      },
      {
        name: "Currículum",
        slug: "cv",
        description: "Mi CV",
      },
    ],
  },
  {
    name: "Portfolio",
    items: [
      {
        name: "Web",
        slug: "portfolio/web",
        description: "My web projects",
      },
      {
        name: "Unity",
        slug: "portfolio/unity",
        description: "My Unity projects",
      },
      {
        name: "Académico",
        slug: "portfolio/academic",
        description: "Mis proyectos académicos",
      },
    ],
  },
  {
    name: "Intereses",
    items: [
      {
        name: "Lecturas",
        slug: "interests/reading",
        description: "Libros que leo",
      },
      {
        name: "Películas",
        slug: "interests/movies",
        description: "Pelis que veo",
      },
      {
        name: "Fotografía",
        slug: "interests/photography",
        description: "Fotos que saco",
      },
    ],
  },
  {
    name: "Miscelánea",
    items: [
      {
        name: "Mapa del sitio",
        slug: "sitemap",
        description: "Un mapa de este sitio",
      },
    ],
  },
];
