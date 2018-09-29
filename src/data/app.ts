import { App } from "./pages";

export const frontmatter: App = {
  title: "Baple Plastics",
  contact: [
    {
      address: [
        "No. 33, Lane 21, Sec. 6",
        "Minchuan E. Rd., Neihu District",
        "Taipei 11494, Taiwan",
      ],
      contactName: "HQ",
      email: "info@baple.com.tw",
      facebook: "https://www.facebook.com/baplenews/",
      instagram: "https://www.facebook.com/groups/292056241330760/",
      phone: "+886-2-8791-2889",
      twitter: "https://www.facebook.com/groups/292056241330760/",
      youtube: "https://www.facebook.com/groups/292056241330760/",
    },
  ],
  lang: "es",
  logo: "./img/logos/baple-group-logo-no-text.png",
  nav: {
    home: "/plastics/",
    navLinks: [
      {
        label: "Solutions",
        links: [
          {
            label: "Pulverizadores",
            to: "/plastics/pulverizadores",
          },
          {
            label: "Bombas de loción",
            to: "/plastics/bombas-de-locion",
          },
          {
            label: "Micropulverizadores",
            to: "/plastics/micropulverizadores",
          },
          {
            label: "Botellas",
            to: "/plastics/botellas",
          },
          {
            label: "Tapones",
            to: "/plastics/tapones",
          },
        ],
        to: "/solutions",
      },
      {
        label: "Contact",
        to: "/contact",
      },
      {
        label: "About",
        to: "/about",
      },
    ],
  },
};
