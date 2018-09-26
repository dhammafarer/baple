import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Paper from "@material-ui/core/Paper";
import { Theme, createStyles, WithStyles, withStyles } from "@material-ui/core/styles";

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
        name: string
        image: {
          childImageSharp: {
            sizes: {
              src: string
            }
          }
        }
      }
    }
  }
} & WithStyles<typeof styles>

const IndexPage: React.SFC<Props> = ({ classes, data }) => (
  <Layout>
    <Paper className={classes.paper}>
      {data.javascriptFrontmatter.frontmatter.name}
      <img src={data.javascriptFrontmatter.frontmatter.image.childImageSharp.sizes.src}/>
    </Paper>
  </Layout>
)

export default withStyles(styles)(IndexPage);

export const query = graphql`
  query IndexQuery {
    javascriptFrontmatter(fileAbsolutePath: {regex: "/test.ts/"}) {
      frontmatter {
        name
        image {
          childImageSharp {
            sizes(maxWidth: 600) {
              src
            }
          }
        }
      }
    }
  }
`
