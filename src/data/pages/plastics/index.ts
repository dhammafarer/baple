import { IndexPage } from "../../pages";

export const frontmatter: IndexPage = {
  layout: "index",
  sections: {
    welcome: {
      heading: "Sisiorek",
      subheading: "the company",
      image: "../../img/plastics/Products_Welcome.jpg",
      logo: "../../img/logos/baple-group-logo-no-text.png",
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
