import * as React from "react";
import { graphql } from "gatsby";
import App from "../components/layouts/App";
import { Frontmatter_2, ContactUs_2, ContactDetails_2 } from "../graphql";
import ContactUs from "../components/sections/ContactUs";
import ContactDetails from "../components/sections/ContactDetails";

interface Props {
  data: {
    javascriptFrontmatter: {
      frontmatter: {
        sections: {
          contactUs: ContactUs_2;
          contactDetails: ContactDetails_2;
        },
      },
    },
    app: {
      frontmatter: Frontmatter_2,
    },
  };
}

const ContactTemplate: React.SFC<Props> = (({ data }) => {
  const { contactUs, contactDetails } = data.javascriptFrontmatter.frontmatter.sections;
  return (
    <App {...data.app.frontmatter}>
      <ContactUs
        heading={contactUs.heading}
        logo={contactUs.logo}
        image={contactUs.image}
      />
      <ContactDetails
        contact={contactDetails.contact}
      />
    </App>
  );
});

export default ContactTemplate;

export const query = graphql`
  query($slug: String!, $layout: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      ...ContactFrontmatter
    }
    app: javascriptFrontmatter(fields: { slug: {eq: $layout} }) {
      ...AppFrontmatter
    }
  }
`;
