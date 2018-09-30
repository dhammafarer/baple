import { graphql } from "gatsby";

export const CategoriesFragment = graphql`
  fragment CategoriesFrontmatter on JavascriptFrontmatter {
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
      }
    }
  }
`;
