import { App } from "./pages";

export const frontmatter: App = {
  title: "Baple Engineering",
  lang: "es",
  logo: "./img/logos/baple-group-logo-no-text.png",
  contact: [
    {
      address: [
        "No. 33, Lane 21, Sec. 6",
        "Minchuan E. Rd., Neihu District",
        "Taipei 11494, Taiwan",
      ],
      contactName: "HQ",
      email: "info@baple.com.tw",
      phone: "+886-2-8791-2889",
      facebook: "https://www.facebook.com/baplenews/",
      instagram: "https://www.facebook.com/groups/292056241330760/",
      twitter: "https://www.facebook.com/groups/292056241330760/",
      youtube: "https://www.facebook.com/groups/292056241330760/",
    },
  ],
  nav: {
    home: "/engineering/",
    navLinks: [
      {
        label: "Home",
        to: "/engineering",
      },
      {
        label: "About",
        to: "/engineering/about",
      },
      {
        label: "Contact",
        to: "/engineering/contact",
      },
    ],
  },
};
