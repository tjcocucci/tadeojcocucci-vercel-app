export type Category = {
  name: string;
  slug: string;
};

export const categories: Category[] = [
  { name: "Hola!", slug: "hello" },
  { name: "Historia e intereses", slug: "story" },
  { name: "Ética de trabajo", slug: "workethics" },
  { name: "Formación académica y herramientas", slug: "skills" },
];

function getContent(slug: string) {
  switch (slug) {
    case "hello":
      return <div>Hola!</div>;
    case "story":
      return <div>Historia e intereses</div>;
    case "workethics":
      return <div>Ética de trabajo</div>;
  }
}

