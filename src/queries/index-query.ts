import { graphql } from "gatsby";

export const IndexFragment = graphql`
  fragment IndexFrontmatter on JavascriptFrontmatter {
    fields {
      domain
    }
    frontmatter {
      sections {
        products {
          productList {
            heading
            subheading
            body
            link {
              to
              label
            }
            image {
              childImageSharp {
                fluid(quality: 100, maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        categories {
          heading
          image {
            childImageSharp {
              fluid(quality: 100, maxWidth: 1400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          categoryLinks {
            label
            image {
              childImageSharp {
                fluid(quality: 100, maxWidth: 250) {
                  ...GatsbyImageSharpFluid
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
              fluid(maxWidth: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image {
            childImageSharp {
              fluid(maxWidth: 1400) {
                ...GatsbyImageSharpFluid
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
              fixed(width: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          image {
            childImageSharp {
              fluid(maxWidth: 1400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
