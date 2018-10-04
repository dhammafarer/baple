import { CategoriesPage } from "../../pages";

export const frontmatter: CategoriesPage = {
  layout: "categories",
  sections: {
  products: {
      productList: [
        {
          heading: "Baple E-Scooters",
          image: "../../img/energy/Scooter_FutureAwaken_0827.jpg",
          body: [
            "The future awakens, let´s get it on!",
            "El despertar del futuro, vamos a por él!",
          ],
          link: {
            to: "/energy/e-scooter",
            label: "Más",
          },
        },
        {
          heading: "Baple Powerwalls",
          image: "../../img/background/Powerwall_Half.jpg",
          body: [
            "Da la bienvenida al futuro: energía limpia y de autoconsumo!",
          ],
          link: {
            to: "/energy/powerwall",
            label: "Más",
          },
        },
        {
          heading: "Baple Energy Storage",
          image: "../../img/background/Storage_Half.jpg",
          body: [
            "Da la bienvenida al futuro: energía limpia y de autoconsumo!",
          ],
          link: {
            to: "/energy/energy-storage",
            label: "Más",
          },
        },
      ],
    },
  },
};
