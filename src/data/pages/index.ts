import { IndexPage } from "../pages";

export const frontmatter: IndexPage = {
  layout: "index",
  sections: {
    welcome: {
      heading: "Sisiorek",
      subheading: "the company",
      image: "./img/header/automation.jpg",
      logo: "../img/logos/ctn-logo-square.jpg",
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
