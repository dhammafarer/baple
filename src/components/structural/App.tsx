import * as React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Head from './Head';
import Header from './Header';
import Footer from './Footer';
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from '../../styles/layout-styles';

type Props = WithStyles<typeof styles> & {
  lang: Lang
  title: string
  logo: any
  nav: any
}

const App: React.SFC<Props> = ({ title, logo, children, nav, classes, lang }) => (
  <div className={classes.layout}>
    <CssBaseline/>
    <Head title={title} lang={lang}/>
    <Header title={title} logo={logo.childImageSharp.fluid.src} nav={nav}/>
    <main className={classes.main}>
      {children}
    </main>
    <Footer logo={logo.childImageSharp.fluid.src} title={title}/>
  </div>
);

export default withStyles(styles)(App);

export const AppFragment = graphql`
  fragment AppFrontmatter on JavascriptFrontmatter {
    frontmatter {
      title
      lang
      logo {
        childImageSharp {
          fluid(maxWidth: 200) {
            src
          }
        }
      }
      nav {
        home
        navLinks {
          to
          label
          links
            {
              to
              label
            }
        }
      }
    }
  }
`;
