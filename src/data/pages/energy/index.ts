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
    },
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
