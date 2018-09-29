import { NotFoundPage } from "../pages";

export const frontmatter: NotFoundPage = {
  layout: "404",
  sections: {
    notFound: {
      heading: "Not Found",
      subheading: "Unfortunately this page doesn't exist.",
      image: "./img/header/automation.jpg",
      logo: "../img/logos/ctn-logo-square.jpg",
    },
  },
};
