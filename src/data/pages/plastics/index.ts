import { IndexPage } from "../../pages";

export const frontmatter: IndexPage = {
  layout: "index",
  sections: {
    welcome: {
      heading: "Because innovation sells packaging and packaging sells products",
      subheading: "Porque innovación vende packaging y el packaging vende productos",
      logo: "../../img/logos/baple-plastics-logo.png",
      image: "../../img/plastics/Products_Welcome.jpg",
    },
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
    more: {
      logo: "../../img/logos/baple-plastics-logo.png",
      heading: "Quieres saber más de nosotros?",
      image: "../../img/contact-us-1.jpg",
      link: {
        to: "/contact",
        label: "Contáctanos!",
      },
    },
  },
};
