import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/Layout";
import About from "../components/sections/About";
import Advantages from "../components/sections/Advantages";
import Tcs from "../components/sections/Tcs";
import { Domain } from "../components/layouts/Layout";

interface Props {
  data: {
    javascriptFrontmatter: {
      fields: {
        domain: Domain,
      },
      frontmatter: {
        sections: {
          about1?: any
          about2?: any
          advantages?: any
          tcs?: any
          qas?: any,
        },
      },
    },
  };
}

const AboutTemplate: React.SFC<Props> = (({ data }) => {
  const { about1, about2, advantages, tcs, qas } = data.javascriptFrontmatter.frontmatter.sections;
  return (
    <Layout domain={data.javascriptFrontmatter.fields.domain}>
      { about1 &&
        <About
          image={about1.image}
          logo={about1.logo}
          heading={about1.heading}
          body={about1.body}
        />
      }
      { about2 &&
        <About
          reverse
          image={about2.image}
          body={about2.body}
        />
      }
      <Advantages
        heading={advantages.heading}
        body={advantages.body}
        points={advantages.points}
      />
      <Tcs
        heading={tcs.heading}
        image={tcs.image}
      />
      <Tcs
        heading={qas.heading}
        image={qas.image}
      />
    </Layout>
  );
});

export default AboutTemplate;

export const query = graphql`
  query($slug: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      ...AboutFrontmatter
    }
  }
`;
