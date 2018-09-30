import { App } from "./pages";

export const frontmatter: App = {
  title: "Baple Energy",
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
  logo: "./img/logos/baple-energy-logo.png",
  nav: {
    home: "/energy/",
    navLinks: [
      {
        label: "Home",
        to: "/energy",
      },
      {
        label: "Soluciones",
        to: "/energy/solutions",
        links: [
          {
            label: "E-Scooter",
            to: "/energy/e-scooter",
          },
          {
            label: "Powerwall",
            to: "/energy/powerwall",
          },
          {
            label: "Energy Storage",
            to: "/energy/energy-storage",
          },
        ],
      },
      {
        label: "About",
        to: "/energy/about",
      },
      {
        label: "Contact",
        to: "/energy/contact",
      },
    ],
  },
};
