import * as React from "react";
import { graphql } from "gatsby";
import App from "../components/layouts/App";
import { Frontmatter_2, Intro_2, CategoryList_2 } from "../graphql";
import Intro from "../components/sections/Intro";
import CategoryList from "../components/sections/CategoryList";

interface Props {
  data: {
    javascriptFrontmatter: {
      frontmatter: {
        sections: {
          intro: Intro_2,
          categoryList: CategoryList_2,
        },
      },
    },
    app: {
      frontmatter: Frontmatter_2,
    },
  };
}

const IndexTemplate: React.SFC<Props> = (({ data }) => {
  const { intro, categoryList } = data.javascriptFrontmatter.frontmatter.sections;
  return (
    <App {...data.app.frontmatter}>
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
    </App>
  );
});

export default IndexTemplate;

export const query = graphql`
  query($slug: String!, $layout: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      ...CategoryFrontmatter
    }
    app: javascriptFrontmatter(fields: { slug: {eq: $layout} }) {
      ...AppFrontmatter
    }
  }
`;
