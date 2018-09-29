import * as React from "react";
import { graphql } from "gatsby";
import App from "../components/layouts/App";
import { Frontmatter_2, Welcome_2, Categories_2, More_2 } from "../graphql";
import Welcome from "../components/sections/Welcome";
import Categories from "../components/sections/Categories";
import More from "../components/sections/More";

interface Props {
  data: {
    javascriptFrontmatter: {
      frontmatter: {
        sections: {
          welcome: Welcome_2,
          categories: Categories_2,
          more: More_2,
        },
      },
    },
    app: {
      frontmatter: Frontmatter_2,
    },
  };
}

const IndexTemplate: React.SFC<Props> = (({ data }) => {
  const { welcome, categories, more } = data.javascriptFrontmatter.frontmatter.sections;
  return (
    <App {...data.app.frontmatter}>
      <Welcome
        heading={welcome.heading}
        subheading={welcome.subheading}
        logo={welcome.logo.childImageSharp.fluid.src}
        image={welcome.image.childImageSharp.fluid.src}
      />
      <Categories
        heading={categories.heading}
        categoryLinks={categories.categoryLinks}
      />
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
