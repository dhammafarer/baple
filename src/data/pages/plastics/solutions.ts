import { CategoriesPage } from "../../pages";

export const frontmatter: CategoriesPage = {
  layout: "categories",
  sections: {
    categories: {
      heading: "Soluciones de Plástico para usos generales",
      categoryLinks: [
        {
          label: "Pulverizadores",
          image: "../../img/plastics/icons/pulverizadores-logo.png",
          to: "/plastics/pulverizadores",
        },
        {
          label: "Bombas de locion",
          image: "../../img/plastics/icons/bombas-locion-logo.png",
          to: "/plastics/bombas-de-locion",
        },
        {
          label: "Micropulverizadores",
          image: "../../img/plastics/icons/micropulverizador-logo.png",
          to: "/plastics/micropulverizadores",
        },
        {
          label: "Tapones",
          image: "../../img/plastics/icons/tapones-de-plastico-logo.png",
          to: "/plastics/tapones",
        },
        {
          label: "Botellas",
          image: "../../img/plastics/icons/botes-de-plastico-logo.png",
          to: "/plastics/botellas",
        },
      ],
    },
  },
};
