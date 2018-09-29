import { graphql } from "gatsby";

export const AppFragment = graphql`
  fragment AppFrontmatter on JavascriptFrontmatter {
    frontmatter {
      title
      lang
      logo {
        childImageSharp {
          fluid(maxWidth: 200) {
            src
          }
        }
      }
      contact {
        contactName
        phone
        email
        address
        facebook
        twitter
        youtube
        instagram
      }
      nav {
        home
        navLinks {
          to
          label
          links
            {
              to
              label
            }
        }
      }
    }
  }
`;
