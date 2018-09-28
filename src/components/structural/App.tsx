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
  contact: any
}

const App: React.SFC<Props> = ({ title, logo, contact, children, nav, classes, lang }) => (
  <div className={classes.layout}>
    <CssBaseline/>
    <Head title={title} lang={lang}/>
    <Header title={title} logo={logo.childImageSharp.fluid.src} nav={nav} contact={contact}/>
    <main className={classes.main}>
      {children}
    </main>
    <Footer logo={logo.childImageSharp.fluid.src} contact={contact} title={title}/>
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
      contact {
        contactName
        phone
        email
        address
        facebook
        twitter
        youtube
        instagram
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
