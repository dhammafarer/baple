import { IndexPage } from "../../pages";

export const frontmatter: IndexPage = {
  underConstruction: true,
  layout: "index",
  sections: {
    welcome: {
      heading: "Let’s go invent tomorrow rather than worrying about what happened yesterday. Steve Jobs",
      subheading: "Vamos a inventar el mañana en lugar de preocuparnos por lo que pasó ayer Steve Jobs",
      logo: "../../img/logos/baple-group-logo-no-text.png",
      image: "../../img/engineering/rawpixel-659474-unsplash.jpg",
    },
    categories: {
      heading: "Soluciones",
      categoryLinks: [
      ],
    },
    more: {
      logo: "../../img/logos/baple-group-logo-no-text.png",
      heading: "Quieres saber más de nosotros?",
      image: "../../img/engineering/diego-ph-249471-unsplash.jpg",
      link: {
        to: "/contact",
        label: "Contáctanos!",
      },
    },
  },
};
