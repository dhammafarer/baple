import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/layout";

interface Props {
  data: {
    javascriptFrontmatter: {
      frontmatter: {
        sections: {
          welcome: {
            heading: string,
          },
        },
      },
    },
  };
}

const CategoryTemplate: React.SFC<Props> = (({ data }) => {
  const s = data.javascriptFrontmatter.frontmatter.sections.welcome;
  return (
    <Layout>
      {s.heading}
    </Layout>
  );
});

export default CategoryTemplate;

export const query = graphql`
  query($slug: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      frontmatter {
        sections {
          welcome {
            heading
          }
        }
      }
    }
  }
`;
