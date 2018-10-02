import { graphql } from "gatsby";

export const CategoryFragment = graphql`
  fragment CategoryFrontmatter on JavascriptFrontmatter {
    frontmatter {
      sections {
        intro {
          heading
          body
          image {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          link {
            to
            label
          }
        }
        categoryList {
          categoryItems {
            heading
            body
            image {
              childImageSharp {
                fluid(maxWidth: 960) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            link {
              to
              label
            }
            spec {
              heading
              params {
                key
                value
              }
            }
          }
        }
      }
    }
  }
`;
