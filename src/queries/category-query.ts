import { graphql } from "gatsby";

export const CategoryFragment = graphql`
  fragment CategoryFrontmatter on JavascriptFrontmatter {
    fields {
      domain
    }
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
            ...ItemSpec
          }
        }
      }
    }
  }
`;
