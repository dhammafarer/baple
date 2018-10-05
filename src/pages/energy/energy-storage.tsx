import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layouts/Layout";
import Intro, { IntroProps } from "../../components/sections/Intro";
import CategoryList, { CategoryListProps } from "../../components/sections/CategoryList";
import BES, { BESProps } from "../../components/sections/BES";
import SectionCentered from "../../components/sections/SectionCentered";

interface EnergyStorageProps {
  data: {
    javascriptFrontmatter: {
      frontmatter: {
        sections: {
          intro1: IntroProps,
          infographic: {
            heading: string,
            image: any,
          },
        },
      },
    },
  };
}

const EnergyStoragePage: React.SFC<EnergyStorageProps> = (({ data }) => {
  const { intro1, infographic } = data.javascriptFrontmatter.frontmatter.sections;
  return (
    <Layout domain="energy">
      <SectionCentered
        reverse
        image={intro1.image}
        heading={intro1.heading}
        body={intro1.body}
      />
      <SectionCentered
        image={infographic.image}
      />
    </Layout>
  );
});

export default EnergyStoragePage;

export const query = graphql`
  query EnergyStoragePageQuery {
    javascriptFrontmatter(fileAbsolutePath: {regex: "/products\/energy-storage.ts/"}) {
      frontmatter {
        sections {
          intro1 {
            heading
            body
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          infographic {
            heading
            image {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
