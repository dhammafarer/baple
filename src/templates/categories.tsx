import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/Layout";
import Categories from "../components/sections/Categories";
import Products from "../components/sections/Products";
import { Domain } from "../components/layouts/Layout";

interface Props {
  data: {
    javascriptFrontmatter: {
      fields: {
        domain: Domain,
      },
      frontmatter: {
        sections: {
          categories: any,
          products: any,
        },
      },
    },
  };
}

const CategoriesTemplate: React.SFC<Props> = (({ data }) => {
  const { categories, products } = data.javascriptFrontmatter.frontmatter.sections;
  return (
    <Layout domain={data.javascriptFrontmatter.fields.domain}>
      { categories &&
        <Categories
          heading={categories.heading}
          subheading={categories.subheading}
          categoryLinks={categories.categoryLinks}
        />
      }
      { products &&
        <Products
          products={products.productList}
        />
      }
    </Layout>
  );
});

export default CategoriesTemplate;

export const query = graphql`
  query($slug: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      ...CategoriesFrontmatter
    }
  }
`;
