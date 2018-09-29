import * as React from "react";
import withRoot from "../../utils/withRoot";
import App from "../structural/App";
import { JavascriptFrontmatter } from "../../graphql";

interface Props {
  app: JavascriptFrontmatter;
}

const Layout: React.SFC<Props> = ({ children, app }) => (
  <>
    <App
      title={app.frontmatter.title}
      logo={app.frontmatter.logo}
      nav={app.frontmatter.nav}
      lang={app.frontmatter.lang}
      contact={app.frontmatter.contact}
    >
      {children}
    </App>
  </>
);

export default withRoot(Layout);
