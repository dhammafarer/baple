import { IndexPage } from "../../pages";

export const frontmatter: IndexPage = {
  layout: "index",
  sections: {
    welcome: {
      heading: "Because innovation sells packaging and packaging sells products",
      subheading: "Porque innovación vende packaging y el packaging vende productos",
      logo: "../../img/logos/baple-metal-packaging-logo.png",
      image: "../../img/background/MetalPackaging.jpg",
    },
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
    more: {
      logo: "../../img/logos/baple-metal-packaging-logo.png",
      heading: "Quieres saber más de nosotros?",
      image: "../../img/contact-us-1.jpg",
      link: {
        to: "/contact",
        label: "Contáctanos!",
      },
    },
  },
};
