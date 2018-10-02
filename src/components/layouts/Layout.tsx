import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import withRoot from "../../utils/withRoot";

import App from "./App";

export type Domain = "group" | "plastics" | "energy" | "engineering" | "metalPackaging";

export interface LayoutProps {
  domain: Domain;
}

interface AppData {
  title: string;
  logo: any;
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
  site: {
    siteMetadata: {
      domains: { [k in Domain]: AppData },
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
              group {
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
        logo: file(relativePath: {eq: "logos/baple-group-logo-no-text.png"}) {
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
    const d = sm.domains[domain];
    return (
      <App
        title={d.title}
        logo={data.logo}
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
