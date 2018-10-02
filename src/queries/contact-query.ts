import { graphql } from "gatsby";

export const ContactFragment = graphql`
  fragment ContactFrontmatter on JavascriptFrontmatter {
    frontmatter {
      sections {
        contactUs {
          heading
          image {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          logo {
            childImageSharp {
              fixed(width: 250) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        contactDetails {
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
        }
      }
    }
  }
`;
