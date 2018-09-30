import * as React from "react";
import { graphql } from "gatsby";
import App from "../components/layouts/App";
import { Frontmatter_2, Welcome_2, Categories_2, More_2 } from "../graphql";
import Welcome from "../components/sections/Welcome";
import Categories from "../components/sections/Categories";
import Products from "../components/sections/Products";
import More from "../components/sections/More";

interface Props {
  data: {
    javascriptFrontmatter: {
      frontmatter: {
        sections: {
          welcome?: Welcome_2,
          categories?: Categories_2,
          products?: any,
          more?: More_2,
        },
      },
    },
    app: {
      frontmatter: Frontmatter_2,
    },
  };
}

const IndexTemplate: React.SFC<Props> = (({ data }) => {
  const { welcome, categories, products, more } = data.javascriptFrontmatter.frontmatter.sections;
  return (
    <App {...data.app.frontmatter}>
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
          gradient="linear-gradient(to left, rgba(255,255,55,0.3), rgba(255,55,255,0.8))"
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
    </App>
  );
});

export default IndexTemplate;

export const query = graphql`
  query($slug: String!, $layout: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      ...IndexFrontmatter
    }
    app: javascriptFrontmatter(fields: { slug: {eq: $layout} }) {
      ...AppFrontmatter
    }
  }
`;
