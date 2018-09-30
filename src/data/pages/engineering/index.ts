import { IndexPage } from "../../pages";

export const frontmatter: IndexPage = {
  layout: "index",
  sections: {
    welcome: {
      logo: "../../img/logos/baple-group-logo-no-text.png",
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
    more: {
      logo: "../../img/logos/baple-group-logo-no-text.png",
      heading: "Quieres saber más de nosotros?",
      image: "../../img/engineering/rawpixel-659474-unsplash.jpg",
      link: {
        to: "/contact",
        label: "Contáctanos!",
      },
    },
  },
};
