import { CategoryPage } from "../../pages";

export const frontmatter: CategoryPage = {
  layout: "category",
  sections: {
    intro: {
      heading: "Válvulas de aerosol",
      image: "../../img/metal-packaging/Valve_1.jpg",
      body: [
        "Baple dispone de la gran mayoría de soluciones demandadas por la industria. Adicionalmente, la incorporación de nuevas y modernas soluciones forma parte del trabajo rutinario para ofrecer siempre soluciones de valor añadido a nuestros partners.",
        "Nuestro rango de soluciones para aerosol están disponibles en la mayoria de diametros y alturas demandadas por la industria, en materiales de aluminio y hojalata, y con un estricto cumplimiento con los estándares FEA (European Aerosol Federation)."
      ],
      link: {
        to: "/metal-packaging/contact",
        label: "Contáctanos!",
      },
    },
    categoryList: {
      categoryItems: [
        {
          heading: "Válvulas de Aerosol",
          image: "../../img/metal-packaging/Metal Packaging_Valves.jpg",
          body: [
          "¿Interesado en Válvulas de Aerosol?",
          "Por favor, contáctenos para poder ofrecerle un servicio personalizado, asesoramiento y catálogo completo.",
          ],
          spec: [
            {
              heading: "Especificaciones Generales",
              params: [
                {
                  key: "Tipos",
                  value: "Llenado Rápido, 360 grados,Recarga de Gas, Gas de Cocina, Medición, Mousee, Polvo, Pintura",
                },
              ],
            },
          ],
          link: {
            to: "/metal-packaging/contact",
            label: "Contacta con nosotros!",
          },
        },
      ],
    },
  },
};
