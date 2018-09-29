import { IndexPage } from "./pages";

export const frontmatter: IndexPage = {
  categories: {
    categoryLinks: [
      {
        image: "./img/logos/ctn-logo-square.jpg",
        label: "Pulverizadores",
        to: "/plastics/pulverizadores",
      },
    ],
  },
  more: {
    heading: "Want to learn more?",
    image: "./img/medium-island.jpg",
    link: {
      label: "Contact us!",
      to: "/contact",
    },
    logo: "./img/logos/ctn-logo-square.jpg",
  },
  welcome: {
    heading: "Heading",
    subheading: "subheading line",
    image: "./img/header/scada.jpg",
    logo: "./img/logos/ctn-logo-square.jpg",
  },
};
