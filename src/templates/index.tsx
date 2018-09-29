import * as React from "react";
import { graphql } from "gatsby";
import App from "../components/layouts/App";
import { Frontmatter_2, Welcome_2 } from "../graphql";
import Welcome from "../components/sections/Welcome";

interface Props {
  data: {
    javascriptFrontmatter: {
      frontmatter: {
        sections: {
          welcome: Welcome_2,
        },
      },
    },
    app: {
      frontmatter: Frontmatter_2,
    },
  };
}

const IndexTemplate: React.SFC<Props> = (({ data }) => {
  const s = data.javascriptFrontmatter.frontmatter.sections.welcome;
  console.log(s);
  return (
    <App {...data.app.frontmatter}>
      <Welcome
        heading={s.heading}
        subheading={s.subheading}
        logo={s.logo.childImageSharp.fluid.src}
        image={s.image.childImageSharp.fluid.src}
      />
    </App>
  );
});

export default IndexTemplate;

export const query = graphql`
  query($slug: String!, $layout: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      frontmatter {
        sections {
          welcome {
            heading
            subheading
            logo {
              childImageSharp {
                fluid(maxWidth: 200) {
                  src
                }
              }
            }
            image {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  src
                }
              }
            }
          }
        }
      }
    }
    app: javascriptFrontmatter(fields: { slug: {eq: $layout} }) {
      ...AppFrontmatter
    }
  }
`;
