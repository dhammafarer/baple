import * as React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Head from "../structural/Head";
import Header from "../structural/Header";
import Footer from "../structural/Footer";
import Policy from "../Policy";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "../../styles/components/layout-styles";

export interface AppProps {
  title: string;
  logo: any;
  lang: string;
  navLinks: any;
  contact: any;
}

const App: React.SFC<AppProps & WithStyles<typeof styles>> = ({
  title, logo, contact, children, navLinks, classes, lang }) => (
  <div className={classes.layout}>
    <CssBaseline/>
    <Policy />
    <Head title={title} lang={lang}/>
    <Header title={title} logo={logo} navLinks={navLinks} contact={contact}/>
    <main className={classes.main}>
      {children}
    </main>
    <Footer logo={logo} contact={contact} title={title}/>
  </div>
);

export default withStyles(styles)(App);
