import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Paper from "@material-ui/core/Paper";
import { Theme, createStyles, withStyles } from "@material-ui/core/styles";

const styles = (theme:Theme) => createStyles({
  paper: {
    background: theme.palette.primary.main,
  }
});

interface Props {
  classes: any
}

const IndexPage: React.SFC<Props> = ({ classes }) => (
  <Layout>
    <Paper className={classes.paper}>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </Paper>
  </Layout>
)

export default withStyles(styles)(IndexPage);
