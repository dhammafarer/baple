import * as React from "react";
import { graphql } from "gatsby";
import App from "../components/layouts/App";

interface Props {
  data: {
    javascriptFrontmatter: {
      frontmatter: {
        sections: {
          notFound: {
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

const NotFound: React.SFC<Props> = (({ data }) => {
  const s = data.javascriptFrontmatter.frontmatter.sections.notFound;
  return (
    <App {...data.app.frontmatter}>
      {s.heading}
    </App>
  );
});

export default NotFound;

export const query = graphql`
  query($slug: String!, $layout: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      frontmatter {
        sections {
          notFound {
            heading
          }
        }
      }
    }
    app: javascriptFrontmatter(fields: { slug: {eq: $layout} }) {
      ...AppFrontmatter
    }
  }
`;
