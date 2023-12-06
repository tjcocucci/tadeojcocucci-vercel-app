export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const contentItems: { name: string; items: Item[] }[] = [
  {
    name: "aboutMe",
    items: [
      {
        name: "whoami",
        slug: "about",
        description: "aboutMeDescription",
      },
      {
        name: "cv",
        slug: "cv-page",
        description: "cvDescription",
      },
    ],
  },
  {
    name: "portfolio",
    items: [
      {
        name: "web",
        slug: "portfolio/web",
        description: "webDescription",
      },
      {
        name: "unity",
        slug: "portfolio/unity",
        description: "unityDescription",
      },
      {
        name: "academic",
        slug: "portfolio/academic",
        description: "academicDescription",
      },
    ],
  },
  {
    name: "interests",
    items: [
      {
        name: "reading",
        slug: "interests/reading",
        description: "readingDescription",
      },
      {
        name: "movies",
        slug: "interests/movies",
        description: "moviesDescription",
      },
      {
        name: "photography",
        slug: "interests/photography",
        description: "photographyDescription",
      },
    ],
  },
  {
    name: "sitemap",
    items: [
      {
        name: "sitemap",
        slug: "sitemap",
        description: "sitemapDescription",
      },
    ],
  },
];
