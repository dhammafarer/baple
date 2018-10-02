import { graphql } from "gatsby";

export const AppFragment = graphql`
  fragment AppFrontmatter on JavascriptFrontmatter {
    frontmatter {
      title
      lang
      logo {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
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
      navLinks {
        to
        label
        links {
          to
          label
        }
      }
    }
  }
`;
