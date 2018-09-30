import * as React from "react";
import { graphql } from "gatsby";
import App from "../components/layouts/App";
import { Frontmatter_2 } from "../graphql";
import SectionCentered from "../components/sections/SectionCentered";

interface Props {
  data: {
    app: {
      frontmatter: Frontmatter_2,
    },
  };
}

const UnderConstructionTemplate: React.SFC<Props> = (({ data }) => {
  return (
    <App {...data.app.frontmatter}>
      <SectionCentered
        heading={"Under Construction"}
        subheading={"This page will be available soon."}
      />
    </App>
  );
});

export default UnderConstructionTemplate;

export const query = graphql`
  query($layout: String!) {
    app: javascriptFrontmatter(fields: { slug: {eq: $layout} }) {
      ...AppFrontmatter
    }
  }
`;
