import { graphql } from "gatsby";

export const AboutFragment = graphql`
  fragment AboutFrontmatter on JavascriptFrontmatter {
    fields {
      domain
    }
    frontmatter {
      sections {
        about1 {
          logo {
            childImageSharp {
              fixed(quality: 90, width: 250) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          image {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heading
          body
        }
        about2 {
          image {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1200) {
                ...GatsbyImageSharpFluid
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
              fluid(quality: 90, maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        qas {
          heading
          image {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
