import * as React from "react";
import { graphql } from "gatsby";
import App from "../components/layouts/App";
import { Frontmatter_2 } from "../graphql";
import About from "../components/sections/About";
import Advantages from "../components/sections/Advantages";
import Tcs from "../components/sections/Tcs";

interface Props {
  data: {
    javascriptFrontmatter: {
      frontmatter: {
        sections: {
          about1?: any
          about2?: any
          advantages?: any
          tcs?: any
          qas?: any,
        },
      },
    },
    app: {
      frontmatter: Frontmatter_2,
    },
  };
}

const IndexTemplate: React.SFC<Props> = (({ data }) => {
  const { about1, about2, advantages, tcs, qas } = data.javascriptFrontmatter.frontmatter.sections;
  return (
    <App {...data.app.frontmatter}>
      { about1 &&
        <About
          image={about1.image}
          logo={about1.logo}
          heading={about1.heading}
          body={about1.body}
        />
      }
      { about2 &&
        <About
          reverse
          image={about2.image}
          body={about2.body}
        />
      }
      <Advantages
        heading={advantages.heading}
        body={advantages.body}
        points={advantages.points}
      />
      <Tcs
        heading={tcs.heading}
        image={tcs.image}
      />
      <Tcs
        heading={qas.heading}
        image={qas.image}
      />
    </App>
  );
});

export default IndexTemplate;

export const query = graphql`
  query($slug: String!, $layout: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      ...AboutFrontmatter
    }
    app: javascriptFrontmatter(fields: { slug: {eq: $layout} }) {
      ...AppFrontmatter
    }
  }
`;
