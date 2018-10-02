import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/Layout";
import SectionCentered from "../components/sections/SectionCentered";
import { Domain } from "../components/layouts/Layout";

interface Props {
  data: {
    javascriptFrontmatter: {
      fields: {
        domain: Domain,
      },
    },
  };
}

const UnderConstructionTemplate: React.SFC<Props> = (({ data }) => {
  return (
    <Layout domain={data.javascriptFrontmatter.fields.domain}>
      <SectionCentered
        heading={"Under Construction"}
        subheading={"This page will be available soon."}
      />
    </Layout>
  );
});

export default UnderConstructionTemplate;

export const query = graphql`
  query($slug: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      fields {
        domain
      }
    }
  }
`;
