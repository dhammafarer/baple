import { AboutPage } from "../../pages";

export const frontmatter: AboutPage = {
  layout: "about",
  sections: {
    about1: {
      logo: "../../img/logos/baple-energy-logo.png",
      image: "../../img/background/Powerwall.jpg",
      heading: "Baple Energy",
      body: [
        "Baple fue fundada en 2013 con una clara visión y misión.",
        "VISIÓN: Ayudar a los hogares españoles a mejorar su calidad de vida con las tecnologias más modernas y beneficiosas para el medio ambiente.",
        "MISIÓN: Ayudar a instaladores locales a aportar soluciones que permitar mejorar la calidad de vida de los hogares, al mismo tiempo que se ayuda al planeta.",
      ],
    },
    advantages: {
      heading: "Advantages of Baple Plastics",
      body: [
        "Innovación y Tecnología es la base para poder suministrar productos con los niveles de calidad exigidos por el mercado internacional, ofreciendo soluciones cada vez más modernas y más personalizadas a nuestros partners.",
      "Debido a los múltiples centros de fabricación, tenemos la capacidad de ofrecer una gran flexibilidad en la personalización de productos y servicios adicionales que aporten valor añadido al consumidor.",
      ],
      points: [
        "Innovacción y Tecnología",
        "Servicio Personalizado",
        "Baple TCS System",
      ],
    },
    tcs: {
      heading: "Baple TCS System",
      image: "../../img/plastics/Baple_Company_TCS_system.jpg",
    },
    qas: {
      heading: "Baple Quality Assurance",
      image: "../../img/plastics/Baple_Company_QA_system.jpg",
    },
  },
};
