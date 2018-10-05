import { IndexPage } from "../../pages";

export const frontmatter: IndexPage = {
  layout: "index",
  sections: {
    welcome: {
      logo: "../../img/logos/baple-engineering-logo.png",
      image: "../../img/engineering/diego-ph-249471-unsplash.jpg",
      quotes: [
        {
          quote: "Let’s go invent tomorrow rather than worrying about what happened yesterday.",
          author: "Steve Jobs",
        },
        {
          quote: "Vamos a inventar el mañana en lugar de preocuparnos por lo que pasó ayer",
          author: "Steve Jobs",
        },
      ],
    },
    products: {
      productList: [
        {
          heading: "Baple E-Scooters",
          image: "../../img/energy/Scooter_FutureAwaken_0827.jpg",
          subheading: "The future awakens, let´s get it on!",
          body: [
            "El despertar del futuro, vamos a por él!",
          ],
          link: {
            to: "/energy/e-scooter",
            label: "Learn More",
          },
        },
        {
          heading: "Baple Powerwalls",
          subheading: "Da la bienvenida al futuro: energía limpia y de autoconsumo!",
          image: "../../img/energy/Bable Energy_Wallpaper_0823.jpg",
          body: [],
          link: {
            to: "/energy/powerwall",
            label: "Learn More",
          },
        },
        {
          heading: "Baple Energy Storage",
          image: "../../img/energy/Solar panel_Cube2.jpg",
          subheading: "Da la bienvenida al futuro: energía limpia y de autoconsumo!",
          body: [],
          link: {
            to: "/energy/energy-storage",
            label: "Learn More",
          },
        },
      ],
    },
    more: {
      logo: "../../img/logos/baple-engineering-logo.png",
      heading: "Quieres saber más de nosotros?",
      link: {
        to: "/contact",
        label: "Contáctanos!",
      },
    },
  },
};
