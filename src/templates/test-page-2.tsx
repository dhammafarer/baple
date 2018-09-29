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

const TestPage: React.SFC<Props> = ({ data }) => {
  return (
    <Layout>
      <div>
        Test Page 2
      </div>
      {data.javascriptFrontmatter.frontmatter.sections.welcome.heading}
    </Layout>
  );
};

export default TestPage;

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
