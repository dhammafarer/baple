import { IndexPage } from "../../pages";

export const frontmatter: IndexPage = {
  layout: "index",
  sections: {
    welcome: {
      heading: "Because innovation sells packaging and packaging sells products",
      subheading: "Porque innovación vende packaging y el packaging vende productos",
      logo: "../../img/logos/baple-group-logo-no-text.png",
      image: "../../img/plastics/Products_Welcome.jpg",
    },
    categories: {
      categoryLinks: [
        {
          label: "Pulverizadores",
          image: "./img/logos/ctn-logo-square.jpg",
          to: "/plastics/pulverizadores",
        },
      ],
    },
    more: {
      logo: "./img/logos/ctn-logo-square.jpg",
      heading: "Want to learn more?",
      image: "./img/medium-island.jpg",
      link: {
        to: "/contact",
        label: "Contact us!",
      },
    },
  },
};
