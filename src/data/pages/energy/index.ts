import { IndexPage } from "../../pages";

export const frontmatter: IndexPage = {
  layout: "index",
  sections: {
    welcome: {
      quotes: [
        {
          quote: "I'd put my money on the sun and solar energy, what a source of power. I hope we don´t have to wait until oil and coal run out, before we tackle that.",
          author: "Thomas Edison, 1931",
        },
        {
          quote: "Pondría mi dinero en el sol y la energía solar, qué fuente de energía. Espero que no tengamos que esperar hasta que se agoten el petróleo y el carbón para abordar eso.",
          author: "Thomas Edison, 1931",
        },
      ],
      logo: "../../img/logos/baple-energy-logo.png",
      image: "../../img/background/Powerwall.jpg",
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
            label: "Más",
          },
        },
        {
          heading: "Baple Powerwalls",
          image: "../../img/background/Powerwall_Half.jpg",
          subheading: "Da la bienvenida al futuro: energía limpia y de autoconsumo!",
          body: [],
          link: {
            to: "/energy/powerwall",
            label: "Más",
          },
        },
        {
          heading: "Baple Energy Storage",
          image: "../../img/background/Storage_Half.jpg",
          subheading: "Da la bienvenida al futuro: energía limpia y de autoconsumo!",
          body: [],
          link: {
            to: "/energy/energy-storage",
            label: "Más",
          },
        },
      ],
    },
    more: {
      logo: "../../img/logos/baple-energy-logo.png",
      heading: "Quieres saber más de nosotros?",
      image: "../../img/contact-us-1.jpg",
      link: {
        to: "/contact",
        label: "Contáctanos!",
      },
    },
  },
};
