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
                src
              }
            }
          }
          logo {
            childImageSharp {
              fluid(maxWidth: 250) {
                src
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
