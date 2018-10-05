import { CategoriesPage } from "../../pages";

export const frontmatter: CategoriesPage = {
  layout: "categories",
  sections: {
    categories: {
      heading: "Soluciones de Aerosol",
      categoryLinks: [
        {
          label: "Botes de Aerosol",
          image: "../../img/metal-packaging/aerosol tin cans icon.png",
          to: "/metal-packaging/botes-de-aerosol",
        },
        {
          label: "Válvulas de Aerosol",
          image: "../../img/metal-packaging/aerosol valves icon.png",
          to: "/metal-packaging/valvulas-de-aerosol",
        },
        {
          label: "Tapas",
          image: "../../img/metal-packaging/caps icon.png",
          to: "/metal-packaging/tapas",
        },
      ],
    },
  },
};
