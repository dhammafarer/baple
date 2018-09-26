import * as React from 'react'
import withRoot from '../utils/withRoot';
import { StaticQuery, graphql } from 'gatsby'

interface Props{}

interface Data {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const Layout: React.SFC<Props> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data: Data) => (
      <>
        <div>
          {children}
        </div>
      </>
    )}
  />
)

export default withRoot(Layout);
