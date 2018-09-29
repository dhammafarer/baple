import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/layout";

interface Props {
  data: {
    javascriptFrontmatter: {
      frontmatter: {
        welcome: {
          heading: string,
        },
      },
    },
  };
}

const TestPage: React.SFC<Props> = ({ data }) => {
  return (
    <Layout>
      {data.javascriptFrontmatter.frontmatter.welcome.heading}
    </Layout>
  );
};

export default TestPage;

export const query = graphql`
  query($slug: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      frontmatter {
        welcome {
          heading
        }
      }
    }
  }
`;
