import { graphql } from "gatsby";

export const AboutFragment = graphql`
  fragment AboutFrontmatter on JavascriptFrontmatter {
    frontmatter {
      sections {
        about1 {
          logo {
            childImageSharp {
              fluid(maxWidth: 250) {
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
          heading
          body
        }
        about2 {
          image {
            childImageSharp {
              fluid(maxWidth: 1200) {
                src
              }
            }
          }
          body
        }
        advantages {
          heading
          body
          points
        }
        tcs {
          heading
          image {
            childImageSharp {
              fluid(maxWidth: 1200) {
                src
              }
            }
          }
        }
        qas {
          heading
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
