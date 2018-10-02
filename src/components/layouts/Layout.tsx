import * as React from "react";
import { StaticQuery, graphql } from "gatsby";

import App from "./App";

interface Data {
  javascriptFrontmatter: {
    frontmatter: {
      lang: Lang;
      title: string;
      logo: any;
      navLinks: any;
      contact: any;
    },
  };
}

const Layout: React.SFC<{}> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        javascriptFrontmatter(fileAbsolutePath: {regex: "/app.ts/"}) {
          ...AppFrontmatter
        }
      }
    `}
    render={(data: Data) =>
      <App {...data.javascriptFrontmatter.frontmatter}>
        {children}
      </App>
    }
  />
);

export default Layout;
