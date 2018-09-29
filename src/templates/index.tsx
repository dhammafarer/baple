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
    app: {
      frontmatter: any,
    },
  };
}

const IndexTemplate: React.SFC<Props> = (({ data }) => {
  const s = data.javascriptFrontmatter.frontmatter.sections.welcome;
  return (
    <Layout app={data.app}>
      {s.heading}
    </Layout>
  );
});

export default IndexTemplate;

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
    app: javascriptFrontmatter(fileAbsolutePath: {regex: "/app.ts/"}) {
      ...AppFrontmatter
    }
  }
`;
