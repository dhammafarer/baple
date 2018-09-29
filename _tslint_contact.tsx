import * as React from "react";
import Layout from "../components/layouts/layout";
import { graphql } from "gatsby";

interface Props {
  data: {
    javascriptFrontmatter: {
      frontmatter: {
        sections: {
          contactUs: {
            heading: string,
          },
        },
      },
    },
  };
}

const ContactTemplate: React.SFC<Props> = (({ data }) => {
  const s = data.javascriptFrontmatter.frontmatter.sections.contactUs;
  return (
    <Layout>
      {s.heading}
    </Layout>
  );
});

export default ContactTemplate;

export const query = graphql`
  query($slug: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      frontmatter {
        sections {
          contactUs {
            heading
          }
        }
      }
    }
  }
`;
