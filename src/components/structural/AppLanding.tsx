import * as React from 'react';
import Helmet from 'react-helmet';
import Head from './Head';
import Header from './Header';
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles, createStyles } from "@material-ui/core/styles";

interface Props {
  lang: Lang
  title: string
  classes: any
  nav: any
}

const styles = (theme:any) => createStyles({
  layout: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  page: {
    flex: 1,
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    display: 'flex',
    marginTop: 64,
  }
});

const AppLanding: React.SFC<Props> = ({ title, children, classes, nav, lang }) => (
  <div className={classes.layout}>
    <CssBaseline/>
    <Head title={title} lang={lang}/>
    <Header nav={nav}/>
    <div className={classes.page}>
      {children}
    </div>
  </div>
);

export default withStyles(styles)(AppLanding);
