import * as React from "react";
import { graphql } from "gatsby";
import App from "../components/layouts/App";
import { Frontmatter_2, Categories_2, Products_2 } from "../graphql";
import Categories from "../components/sections/Categories";
import Products from "../components/sections/Products";

interface Props {
  data: {
    javascriptFrontmatter: {
      frontmatter: {
        sections: {
          categories: Categories_2,
          products: Products_2,
        },
      },
    },
    app: {
      frontmatter: Frontmatter_2,
    },
  };
}

const CategoriesTemplate: React.SFC<Props> = (({ data }) => {
  const { categories, products } = data.javascriptFrontmatter.frontmatter.sections;
  return (
    <App {...data.app.frontmatter}>
      { categories &&
        <Categories
          heading={categories.heading}
          categoryLinks={categories.categoryLinks}
        />
      }
      { products &&
        <Products
          products={products.productList}
        />
      }
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
