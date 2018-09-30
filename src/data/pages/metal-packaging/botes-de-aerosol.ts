import { CategoryPage } from "../../pages";

export const frontmatter: CategoryPage = {
  layout: "category",
  sections: {
    intro: {
      heading: "Botes de aerosol - NECK IN y STRAIGHT",
      image: "../../img/metal-packaging/Metal Packaging_Latas.jpg",
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
          heading: "Botes de Aerosol",
          image: "../../img/metal-packaging/Metal Packaging_Latas.jpg",
          body: [
          "¿Interesado en Botes de Aerosol?",
          "Por favor, contáctenos para poder ofrecerle un servicio personalizado, asesoramiento y catálogo completo.",
          ],
          spec: [
            {
              heading: "Especificaciones Generales",
              params: [
                {
                  key: "Diámetros",
                  value: "Ø45mm-Ø70mm",
                },
                {
                  key: "Altura",
                  value: "80 - 320 mm",
                },
                {
                  key: "Material",
                  value: "Hojalata",
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
