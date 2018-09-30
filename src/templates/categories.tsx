import * as React from "react";
import { graphql } from "gatsby";
import App from "../components/layouts/App";
import { Frontmatter_2, Categories_2 } from "../graphql";
import Categories from "../components/sections/Categories";

interface Props {
  data: {
    javascriptFrontmatter: {
      frontmatter: {
        sections: {
          categories: Categories_2,
        },
      },
    },
    app: {
      frontmatter: Frontmatter_2,
    },
  };
}

const CategoriesTemplate: React.SFC<Props> = (({ data }) => {
  const { categories } = data.javascriptFrontmatter.frontmatter.sections;
  return (
    <App {...data.app.frontmatter}>
      <Categories
        heading={categories.heading}
        categoryLinks={categories.categoryLinks}
      />
    </App>
  );
});

export default CategoriesTemplate;

export const query = graphql`
  query($slug: String!, $layout: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      ...CategoriesFrontmatter
    }
    app: javascriptFrontmatter(fields: { slug: {eq: $layout} }) {
      ...AppFrontmatter
    }
  }
`;
