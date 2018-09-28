import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layouts/layout-en'
import Paper from "@material-ui/core/Paper";
import { Theme, createStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import {Welcome_2} from '../../graphql';
import Welcome from '../../components/Welcome';

const styles = (theme:Theme) => createStyles({
  paper: {
    background: theme.palette.primary.main,
  }
});

type Props = {
  classes: any
  data: {
    javascriptFrontmatter: {
      frontmatter: {
        welcome: Welcome_2
      }
    }
  }
} & WithStyles<typeof styles>

const IndexPage: React.SFC<Props> = ({ classes, data }) => (
  <Layout>
    <Welcome {...data.javascriptFrontmatter.frontmatter.welcome}/>
  </Layout>
)

export default withStyles(styles)(IndexPage);

export const query = graphql`
  query IndexQuery {
    javascriptFrontmatter(fileAbsolutePath: {regex: "/index-en.ts/"}) {
      frontmatter {
        welcome {
          heading
          subheading
          image {
            childImageSharp {
              fluid(maxWidth: 600) {
                src
              }
            }
          }
        }
      }
    }
  }
`
