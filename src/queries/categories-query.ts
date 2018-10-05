import { graphql } from "gatsby";

export const CategoriesFragment = graphql`
  fragment CategoriesFrontmatter on JavascriptFrontmatter {
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
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        categories {
          heading
          categoryLinks {
            label
            image {
              childImageSharp {
                fluid(maxWidth: 250) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            to
          }
        }
      }
    }
  }
`;
