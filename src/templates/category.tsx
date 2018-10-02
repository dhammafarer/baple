import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/Layout";
import Intro from "../components/sections/Intro";
import CategoryList from "../components/sections/CategoryList";
import { Domain } from "../components/layouts/Layout";

interface Props {
  data: {
    javascriptFrontmatter: {
      fields: {
        domain: Domain,
      },
      frontmatter: {
        sections: {
          intro: any,
          categoryList: any,
        },
      },
    },
  };
}

const CategoryTemplae: React.SFC<Props> = (({ data }) => {
  const { intro, categoryList } = data.javascriptFrontmatter.frontmatter.sections;
  return (
    <Layout domain={data.javascriptFrontmatter.fields.domain}>
      <Intro
        heading={intro.heading}
        subheading={intro.subheading}
        image={intro.image}
        body={intro.body}
        link={intro.link}
      />
      <CategoryList
        heading={intro.heading}
        categoryItems={categoryList.categoryItems}
      />
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
