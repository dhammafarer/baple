import { App } from "./pages";

export const frontmatter: App = {
  title: "Baple Metal Packaging",
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
  navLinks: [
    {
      label: "Soluciones",
      to: "/metal-packaging/products",
      links: [
        {
          label: "Botes de Aerosol",
          to: "/metal-packaging/botes-de-aerosol",
        },
        {
          label: "Válvulas de Aerosol",
          to: "/metal-packaging/valvulas-de-aerosol",
        },
        {
          label: "Tapas",
          to: "/metal-packaging/tapas",
        },
        ],
      },
      {
        label: "About",
        to: "/metal-packaging/about",
      },
    {
      label: "Contact",
      to: "/metal-packaging/contact",
    },
  ],
};
