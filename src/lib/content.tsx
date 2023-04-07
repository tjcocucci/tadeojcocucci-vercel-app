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
        slug: "about",
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
        slug: "web",
        description: "My web projects",
      },
      {
        name: "Unity",
        slug: "unity",
        description: "My Unity projects",
      },
      {
        name: "Académico",
        slug: "academic",
        description: "Mis proyectos académicos",
      },
    ],
  },
  {
    name: "Intereses",
    items: [
      {
        name: "Lecturas",
        slug: "reading",
        description: "Libros que leo",
      },
      {
        name: "Películas",
        slug: "movies",
        description: "Pelis que veo",
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
