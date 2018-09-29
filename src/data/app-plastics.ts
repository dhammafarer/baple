import { App } from "./pages";

export const frontmatter: App = {
  contact: [
    {
      address: [
        "No. 33, Lane 21, Sec. 6",
        "Minchuan E. Rd., Neihu District",
        "Taipei 11494, Taiwan",
      ],
      contactName: "Taipei Headquarters",
      email: "info@connet.com.tw",
      facebook: "https://www.facebook.com/groups/292056241330760/",
      instagram: "https://www.facebook.com/groups/292056241330760/",
      phone: "+886-2-8791-2889",
      twitter: "https://www.facebook.com/groups/292056241330760/",
      youtube: "https://www.facebook.com/groups/292056241330760/",
    },
  ],
  lang: "en",
  logo: "./img/logos/baple-group-logo-no-text.png",
  nav: {
    home: "/en/",
    navLinks: [
      {
        label: "Solutions",
        links: [
          {
            label: "SCADA",
            to: "/scada",
          },
          {
            label: "Microgrids",
            to: "/microgrids",
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
  title: "Sisiorkowo",
};
