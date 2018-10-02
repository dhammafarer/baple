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
                fixed(width: 250) {
                  ...GatsbyImageSharpFixed
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
