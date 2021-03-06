import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layouts/Layout";
import Intro, { IntroProps } from "../../components/sections/Intro";
import CategoryList, { CategoryListProps } from "../../components/sections/CategoryList";
import BES, { BESProps } from "../../components/sections/BES";

interface EScootePageProps {
  data: {
    javascriptFrontmatter: {
      frontmatter: {
        sections: {
          intro1: IntroProps,
          intro2: IntroProps,
          bes: BESProps,
          categoryList: CategoryListProps,
        },
      },
    },
  };
}

const EScooterPage: React.SFC<EScootePageProps> = (({ data }) => {
  const { intro1, intro2, bes, categoryList } = data.javascriptFrontmatter.frontmatter.sections;
  return (
    <Layout domain="energy">
      <Intro
        image={intro1.image}
        heading={intro1.heading}
        body={intro1.body}
      />
      <Intro
        reverse
        image={intro2.image}
        heading={intro2.heading}
        body={intro2.body}
      />
      <BES
        heading={bes.heading}
        besItems={bes.besItems}
        link={bes.link}
        image={bes.image}
      />
      <CategoryList categoryItems={categoryList.categoryItems}/>
    </Layout>
  );
});

export default EScooterPage;

export const query = graphql`
  query EScooterPageQuery {
    javascriptFrontmatter(fileAbsolutePath: {regex: "/products/e-scooter.ts/"}) {
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
          intro2 {
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
          bes { ...BESQuery }
          categoryList { categoryItems { ...ItemSpec } }
        }
      }
    }
  }
`;
