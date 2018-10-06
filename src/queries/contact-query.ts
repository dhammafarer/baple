import { graphql } from "gatsby";

export const ContactFragment = graphql`
  fragment ContactFrontmatter on JavascriptFrontmatter {
    fields {
      domain
    }
    frontmatter {
      sections {
        contactUs {
          heading
          image {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          logo {
            childImageSharp {
              fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
