import { CategoryPage } from "../../pages";

export const frontmatter: CategoryPage = {
  underConstruction: true,
  layout: "category",
  sections: {
    intro: {
      heading: "E-Scooter",
      subheading: "Da la bienvenida al futuro: transporte limpio y económico",
      image: "../../img/energy/Scooter_FutureAwaken_0827.jpg",
      body: [
        "Lo que anteriormente fue un sueño, ahora es una realidad. Cada persona debe tener la libertad de decidir sobre un aspecto de su vida tan importante como poder decidir que tipo de medio de transporte desea, independientemente de las influencias externas.",
        "Es por eso que tenemos la misión de ofrecer nuestra soluciones para esas personas que se preocupan por el medio ambiente y las emisiones generadas por las motocicletas de gasolina. Para ello Baple presenta un producto funcional y con la última tecnología.",
        "Los modelos B1/B5 se convertirá en una parte esencial en su vida y le proporcionará una total independencia de movilidad.",
      ],
      link: {
        to: "/plastics/contact",
        label: "Contáctanos!",
      },
    },
    categoryList: {
      categoryItems: [
        {
          heading: "B1 E-Scooter",
          image: "../../img/energy/Welcome.jpg",
          body: [
            "El modelo B1 es un modelo básico pero sorprendente. Pues está diseñado para ser una gran opción como medio de transporte urbano de uso diario. ",
            "El modelo B1 tiene un diseño moderno, y cool. Pero no sólo eso, además tiene unas excelentes características para aquellos usuarios interesados en disponer de una opción libre de CO2 y económica de transporte.",
          ],
          spec: [
            {
              heading: "Especificaciones Generales",
              params: [
                {
                  key: "Velocidad",
                  value: "55 Km/h",
                },
                {
                  key: "Autonomía",
                  value: "65-80 Kilómetros",
                },
                {
                  key: "Carga",
                  value: "6-9 horas",
                },
              ],
            },
          ],
          link: {
            to: "/plastics/contact",
            label: "Contacta con nosotros!",
          },
        },
        {
          heading: "B5 E-Scooter",
          image: "../../img/energy/Triptic1.jpg",
          body: [
            "El modelo B5 es un modelo futurista que te hará sentir estar en una pelicula de ciencia ficción. Está diseñado para ser una de las mejores opciones de transporte urbano actualmente disponibles.",
            "El modelo B5 tiene un diseño de lineas simples y futuristas. Pero no sólo eso, además tiene unas excelentes características para aquellos usuarios interesados en disponer de una de las mejores opciones de transporte: libre de CO2 y económica.",
          ],
          spec: [
            {
              heading: "Especificaciones Generales",
              params: [
                {
                  key: "Velocidad",
                  value: "55 Km/h",
                },
                {
                  key: "Autonomía",
                  value: "80-100 Kilómetros",
                },
                {
                  key: "Carga",
                  value: "4-6 horas",
                },
              ],
            },
          ],
          link: {
            to: "/plastics/contact",
            label: "Contacta con nosotros!",
          },
        },
      ],
    },
  },
};
