import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layouts/Layout";
import Intro from "../../components/sections/Intro";
import CategoryList from "../../components/sections/CategoryList";
import { Domain } from "../../components/layouts/Layout";

interface Props {
  data: {};
}

const CategoryTemplae: React.SFC<Props> = (({ data }) => {
  return (
    <Layout domain="energy">
      scooter
    </Layout>
  );
});

export default CategoryTemplae;

export const query = graphql`
  query($slug: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      ...CategoryFrontmatter
    }
  }
`;
