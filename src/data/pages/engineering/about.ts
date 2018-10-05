import { AboutPage } from "../../pages";

export const frontmatter: AboutPage = {
  layout: "about",
  sections: {
    about1: {
      logo: "../../img/logos/baple-engineering-logo.png",
      image: "../../img/engineering/diego-ph-249471-unsplash.jpg",
      heading: "Baple Engineering",
      body: [
        "Baple fue fundada en 2013 con una clara visión y misión.",
        "VISIÓN: Ayudar a la Industria Española a ser un referente internacional.",
        "MISIÓN: Ayudar a empresas españoles a disponer de las soluciones más modernas del mercado internacional a costes competitivos. ",
      ],
    },
    about2: {
      image: "../../img/engineering/rawpixel-659474-unsplash.jpg",
      body: [
        "En la actualidad, Baple Engineering está especializada en ofrecer bajo demanda soluciones especiales, y/o a medida para proyectos de diserva índole, ya sea electrónica, ingeniería, construcción civil, transporte de mercancias peligrosas.",
        "Innovación, Tecnología, y Servicio Personalizado son los pilares fundamentales de Baple para crear una cooperación fuerte, sostenible y durareda con sus partners. Siendo este el valor añadido que sólo un proveedor especializado es capaz de aportar.",
      ],
    },
    advantages: {
      heading: "Advantages of Baple Engineering",
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
      image: "../../img/Baple_Company_TCS_system.jpg",
    },
    qas: {
      heading: "Baple Quality Assurance",
      image: "../../img/Baple_Company_QA_system.jpg",
    },
  },
};
