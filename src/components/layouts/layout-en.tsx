import * as React from 'react'
import withRoot from '../../utils/withRoot';
import { StaticQuery, graphql } from 'gatsby'
import App from '../structural/App';
import { JavascriptFrontmatter } from '../../graphql';

interface Data {
  app: JavascriptFrontmatter
}

const Layout: React.SFC<{}> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutEnQuery {
        app: javascriptFrontmatter(fileAbsolutePath: {regex: "/app-en.ts/"}) {
          ...AppFrontmatter
        }
      }
    `}
    render={(data: Data) => (
      <>
        <App
          title={data.app.frontmatter.title}
          logo={data.app.frontmatter.logo}
          nav={data.app.frontmatter.nav}
          lang={data.app.frontmatter.lang}
          contact={data.app.frontmatter.contact}
        >
          {children}
        </App>
      </>
    )}
  />
)

export default withRoot(Layout);
