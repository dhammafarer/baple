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
            label: "Learn More",
          },
        },
        {
          heading: "Baple Powerwalls",
          image: "../../img/energy/Bable Energy_Wallpaper_0823.jpg",
          body: [
            "Da la bienvenida al futuro: energía limpia y de autoconsumo!",
          ],
          link: {
            to: "/energy/powerwall",
            label: "Learn More",
          },
        },
        {
          heading: "Baple Energy Storage",
          image: "../../img/energy/Solar panel_Cube2.jpg",
          body: [
            "Da la bienvenida al futuro: energía limpia y de autoconsumo!",
          ],
          link: {
            to: "/energy/energy-storage",
            label: "Learn More",
          },
        },
      ],
    },
  },
};
