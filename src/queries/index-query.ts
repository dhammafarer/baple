import { graphql } from "gatsby";

export const IndexFragment = graphql`
  fragment IndexFrontmatter on JavascriptFrontmatter {
    frontmatter {
      sections {
        products {
          productList {
            heading
            body
            link {
              to
              label
            }
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  src
                }
              }
            }
          }
        }
        categories {
          heading
          subheading
          image {
            childImageSharp {
              fluid(maxWidth: 1200) {
                src
              }
            }
          }
          categoryLinks {
            label
            image {
              childImageSharp {
                fluid(maxWidth: 250) {
                  src
                }
              }
            }
            to
          }
        }
        more {
          heading
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
          link {
            to
            label
          }
        }
        welcome {
          heading
          subheading
          quotes {
            quote
            author
          }
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
