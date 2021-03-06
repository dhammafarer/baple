import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layouts/Layout";
import Intro, { IntroProps } from "../../components/sections/Intro";
import BES, { BESProps } from "../../components/sections/BES";
import SectionCentered from "../../components/sections/SectionCentered";

interface BesProps12 {
  heading: string;
  body: string[];
  image: any;
  link: {
    to: string,
    label: string,
  };
}

interface PowerwallProps {
  data: {
    javascriptFrontmatter: {
      frontmatter: {
        sections: {
          intro1: IntroProps,
          bes: BESProps,
          bes1: BesProps12,
          bes2: BesProps12,
        },
      },
    },
  };
}

const PowerwallPage: React.SFC<PowerwallProps> = (({ data }) => {
  const { intro1, bes, bes1, bes2 } = data.javascriptFrontmatter.frontmatter.sections;
  return (
    <Layout domain="energy">
      <SectionCentered
        reverse
        image={intro1.image}
        heading={intro1.heading}
        body={intro1.body}
      />
      <BES
        heading={bes.heading}
        besItems={bes.besItems}
        link={bes.link}
        image={bes.image}
      />
      <SectionCentered
        image={bes1.image}
        heading={bes1.heading}
        body={bes1.body}
        link={bes1.link}
      />
      <SectionCentered
        image={bes2.image}
        heading={bes2.heading}
        body={bes2.body}
        link={bes2.link}
      />
    </Layout>
  );
});

export default PowerwallPage;

export const query = graphql`
  query PowerwallQuery {
    javascriptFrontmatter(fileAbsolutePath: {regex: "/products/powerwall.ts/"}) {
      frontmatter {
        sections {
          intro1 {
            heading
            body
            image {
              childImageSharp {
                fluid(maxWidth: 1400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          bes { ...BESQuery }
          bes1 {
            heading
            body
            link {
              to
              label
            }
            image {
              childImageSharp {
                fluid(maxWidth: 1400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          bes2 {
            heading
            body
            link {
              to
              label
            }
            image {
              childImageSharp {
                fluid(maxWidth: 1400, quality: 100) {
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
