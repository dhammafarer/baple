import * as React from 'react'
import withLocale from '../../utils/withLocale';

const Layout: React.SFC<{}> = ({ children }) => (
  <>
    <div>
      {children}
    </div>
  </>
)

export default withLocale(Layout);
