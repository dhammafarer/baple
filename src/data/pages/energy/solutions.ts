import { CategoriesPage } from "../../pages";

export const frontmatter: CategoriesPage = {
  layout: "categories",
  sections: {
  products: {
      productList: [
        {
          image: "../../img/energy/Scooter_FutureAwaken_0827.jpg",
          heading: "Baple E-Scooters",
          subheading: "The future awakens, let's get it on!",
          body: [
            "El despertar del futuro, vamos a por él!",
          ],
          link: {
            to: "/energy/e-scooter",
            label: "Más",
          },
        },
        {
          image: "../../img/background/Powerwall_Half.jpg",
          heading: "Baple Powerwalls",
          subheading: "Da la bienvenida al futuro: energía limpia y de autoconsumo!",
          link: {
            to: "/energy/powerwall",
            label: "Más",
          },
        },
        {
          heading: "Baple Energy Storage",
          image: "../../img/background/Storage_Half.jpg",
          subheading: "Da la bienvenida al futuro: energía limpia y de autoconsumo!",
          link: {
            to: "/energy/energy-storage",
            label: "Más",
          },
        },
      ],
    },
  },
};
