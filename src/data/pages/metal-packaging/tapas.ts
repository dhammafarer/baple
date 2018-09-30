import { CategoryPage } from "../../pages";

export const frontmatter: CategoryPage = {
  layout: "category",
  sections: {
    intro: {
      heading: "Tapas",
      image: "../../img/metal-packaging/caps icon.png",
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
          heading: "Tapas",
          image: "../../img/metal-packaging/Metal Packaging_Tapas.jpg",
          body: [
          "¿Interesado en Tapas?",
          "Por favor, contáctenos para poder ofrecerle un servicio personalizado, asesoramiento y catálogo completo.",
          ],
          spec: [
            {
              heading: "Especificaciones Generales",
              params: [
                {
                  key: "Diámetros",
                  value: "Ø27 mm-70Ø mm",
                },
                {
                  key: "Diseño",
                  value: "Rango completo de diseños",
                },
                {
                  key: "Color",
                  value: "Rango completo de colores y combinaciones",
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
