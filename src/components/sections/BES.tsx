import * as React from "react";
import { createStyles, withStyles, WithStyles, Theme } from "@material-ui/core/styles";
import { StaticQuery, graphql } from "gatsby";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import HorizontalSplit from "./HorizontalSplit";
import { Link } from "gatsby";
import Img from "gatsby-image";

const styles = (theme: Theme) => createStyles({
  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "2rem 0",
  },
  bes: {
    borderRadius: 4,
    padding: theme.spacing.unit * 3,
    border: "1px solid gray",
    borderColor: theme.palette.grey[400],
    textAlign: "center",
  },
  heading: {
    marginBottom: "1rem",
  },
  image: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    opacity: 0.8,
    width: "80%",
    margin: "0 auto",
  },
  besItem: {
  },
  link: {
    margin: "1.4em 0",
  },
  divider: {
    margin: theme.spacing.unit * 3,
  },
});

export interface BESDataProps {
  javascriptFrontmatter: {
    frontmatter: {
      bes: {
        heading: string;
        besItems: Array<{heading: string, subheading: string}>;
        image: any;
        link: {
          label: string
          to: string,
        }
      },
    },
  };
}

export interface BESProps {
  reverse?: boolean;
}

type Props = WithStyles<typeof styles> & BESProps;

const BES: React.SFC<Props> = ({ reverse, classes }) => (
  <StaticQuery
    query={graphql`
      query BESStaticQuery {
        javascriptFrontmatter(fileAbsolutePath: {regex: "/bes.ts/"}) {
          frontmatter {
            bes { ...BESQuery }
          }
        }
      }
      `
    }
  render={(data: BESDataProps) => {
    const bes = data.javascriptFrontmatter.frontmatter.bes;
    return (
      <HorizontalSplit
        left={
          <div className={classes.image}>
            <Img fluid={bes.image.childImageSharp.fluid}/>
          </div>
        }
        right={
          <div className={classes.content}>
            <Typography variant="display1" className={classes.heading}>
              {bes.heading}
            </Typography>
            <div className={classes.bes}>
              {bes.besItems.map((x, i) =>
                <div className={classes.besItem} key={i}>
                  <Typography variant="headline" color="primary" gutterBottom>
                    {x.heading}
                  </Typography>
                  <Typography variant="subheading">
                    {x.subheading}
                  </Typography>
                  {i !== (bes.besItems.length - 1) && <Divider className={classes.divider}/>}
                </div>,
              )}
            </div>

            <div className={classes.link}>
              <Link to={bes.link.to}>
                <Button variant="contained" color="primary" size="large">
                  {bes.link.label}
                </Button>
              </Link>
            </div>
          </div>
        }
      />
    ); }
    }
  />
);

export default withStyles(styles)(BES);

export const query = graphql`
  fragment BESQuery on bes_2 {
    heading
    besItems {
      heading
      subheading
    }
    image {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    link {
      to
      label
    }
  }
`;
