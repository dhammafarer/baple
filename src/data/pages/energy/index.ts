import { IndexPage } from "../../pages";

export const frontmatter: IndexPage = {
  layout: "index",
  sections: {
    welcome: {
      heading: "I´d put my money on the sun and solar energy, what a source of power. I hope we don´t have to wait until oil and coal run out, before we tackle that. Thomas Edison, 1931",
      subheading: "Pondría mi dinero en el sol y la energía solar, qué fuente de energía. Espero que no tengamos que esperar hasta que se agoten el petróleo y el carbón para abordar eso.Thomas Edison, 1931",
      logo: "../../img/logos/baple-energy-logo.png",
      image: "../../img/energy/Bable Energy_Wallpaper_0823.jpg",
    },
    categories: {
      heading: "Soluciones de Plástico para usos generales",
      categoryLinks: [
        {
          label: "Baple e-scooters",
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
      logo: "../../img/logos/baple-group-logo-no-text.png",
      heading: "Quieres saber más de nosotros?",
      image: "../../img/plastics/Products_Welcome.jpg",
      link: {
        to: "/contact",
        label: "Contáctanos!",
      },
    },
  },
};
