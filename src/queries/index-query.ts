import { graphql } from "gatsby";

export const IndexFragment = graphql`
  fragment IndexFrontmatter on JavascriptFrontmatter {
    frontmatter {
      sections {
        welcome {
          heading
          subheading
          logo {
            childImageSharp {
              fluid(maxWidth: 300) {
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
`;
