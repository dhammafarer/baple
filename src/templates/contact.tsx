import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/Layout";
import ContactUs from "../components/sections/ContactUs";
import ContactDetails from "../components/sections/ContactDetails";
import { Domain } from "../components/layouts/Layout";

interface Props {
  data: {
    javascriptFrontmatter: {
      fields: {
        domain: Domain,
      },
      frontmatter: {
        sections: {
          contactUs: any,
        },
      },
    },
    site: {
      siteMetadata: {
        contact: any,
      },
    },
  };
}

const ContactTemplate: React.SFC<Props> = (({ data }) => {
  const { contactUs } = data.javascriptFrontmatter.frontmatter.sections;
  return (
    <Layout domain={data.javascriptFrontmatter.fields.domain}>
      <ContactUs
        heading={contactUs.heading}
        logo={contactUs.logo}
        image={contactUs.image}
      />
      <ContactDetails
        contact={data.site.siteMetadata.contact}
      />
    </Layout>
  );
});

export default ContactTemplate;

export const query = graphql`
  query($slug: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      ...ContactFrontmatter
    }
    site {
      siteMetadata {
        contact {
          email
          phone
          address
          socialMedia {
            facebook
            instagram
            twitter
          }
        }
      }
    }
  }
`;
