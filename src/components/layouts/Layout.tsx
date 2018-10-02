import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import withRoot from "../../utils/withRoot";

import App from "./App";

export type Domain = "group" | "plastics" | "energy" | "engineering" | "metalPackaging";

export interface LayoutProps {
  domain: Domain;
}

interface AppData {
  name: Domain;
  title: string;
  navLinks: any;
}

interface ContactData {
  name: string;
  phone: string;
  email: string;
  address: string[];
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

interface Data {
  [key: string]: any;
  site: {
    siteMetadata: {
      domains: AppData[];
      contact: ContactData;
    },
  };
  logo: any;
}

const Layout: React.SFC<LayoutProps> = ({ children, domain }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            domains {
              name
              title
              navLinks {
                to
                label
                links {
                  to
                  label
                }
              }
            }
            contact {
              email
              phone
              address
              socialMedia {
                facebook
                twitter
                instagram
              }
            }
          }
        }
        groupLogo: file(relativePath: {eq: "logos/baple-group-logo-no-text.png"}) {
          childImageSharp {
            fixed(width: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        plasticsLogo: file(relativePath: {eq: "logos/baple-plastics-logo.png"}) {
          childImageSharp {
            fixed(width: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        energyLogo: file(relativePath: {eq: "logos/baple-energy-logo.png"}) {
          childImageSharp {
            fixed(width: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        metalPackagingLogo: file(relativePath: {eq: "logos/baple-metal-packaging-logo.png"}) {
          childImageSharp {
            fixed(width: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        engineeringLogo: file(relativePath: {eq: "logos/baple-engineering-logo.png"}) {
          childImageSharp {
            fixed(width: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
  render={(data: Data) => {
    const sm = data.site.siteMetadata;
    const d = sm.domains.find((x) => x.name === domain);
    const logo = data[domain + "Logo"];
    return (
      <App
        title={d.title}
        logo={logo}
        navLinks={d.navLinks}
        lang={"es"}
        contact={sm.contact}
      >
        {children}
      </App>
      ); }
    }
  />
);

export default withRoot(Layout);
