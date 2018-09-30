import { graphql } from "gatsby";

export const CategoriesFragment = graphql`
  fragment CategoriesFrontmatter on JavascriptFrontmatter {
    frontmatter {
      sections {
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
