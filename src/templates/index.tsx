import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/Layout";
import { Frontmatter_2, Welcome_2, Categories_2, More_2 } from "../graphql";
import Welcome from "../components/sections/Welcome";
import Categories from "../components/sections/Categories";
import Products from "../components/sections/Products";
import More from "../components/sections/More";
import { Domain } from "../components/layouts/Layout";

interface Props {
  data: {
    javascriptFrontmatter: {
      fields: {
        domain: Domain,
      },
      frontmatter: {
        sections: {
          welcome?: any,
          categories?: Categories_2,
          products?: any,
          more?: More_2,
        },
      },
    },
  };
}

const IndexTemplate: React.SFC<Props> = (({ data }) => {
  const { welcome, categories, products, more } = data.javascriptFrontmatter.frontmatter.sections;
  return (
    <Layout domain={data.javascriptFrontmatter.fields.domain}>
      { welcome &&
        <Welcome
          heading={welcome.heading}
          subheading={welcome.subheading}
          logo={welcome.logo}
          image={welcome.image}
          quotes={welcome.quotes}
        />
      }
      { categories &&
        <Categories
          gradient="linear-gradient(to left, #ddd, #eee)"
          heading={categories.heading}
          subheading={categories.subheading}
          image={categories.image}
          categoryLinks={categories.categoryLinks}
        />
      }
      { products &&
        <Products
          products={products.productList}
        />
      }
      { more &&
        <More
          heading={more.heading}
          image={more.image}
          logo={more.logo}
          link={more.link}
        />
      }
    </Layout>
  );
});

export default IndexTemplate;

export const query = graphql`
  query($slug: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      ...IndexFrontmatter
    }
  }
`;
