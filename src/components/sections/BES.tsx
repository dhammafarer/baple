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
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    borderRadius: 4,
    padding: theme.spacing.unit * 3,
    border: "1px solid gray",
    borderColor: theme.palette.grey[400],
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      margin: 0,
    },
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

export interface BESProps {
  reverse?: boolean;
  heading: string;
  besItems: Array<{heading: string, subheading: string}>;
  image: any;
  link: {
    label: string
    to: string,
  };
}

type Props = WithStyles<typeof styles> & BESProps;

const BES: React.SFC<Props> = ({ reverse, classes, heading, image, besItems, link }) => {
  return (
    <HorizontalSplit
      left={
        <div className={classes.image}>
          <Img fluid={image.childImageSharp.fluid}/>
        </div>
      }
      right={
        <div className={classes.content}>
          <Typography variant="display1" className={classes.heading}>
            {heading}
          </Typography>
          <div className={classes.bes}>
            {besItems.map((x, i) =>
              <div className={classes.besItem} key={i}>
                <Typography variant="headline" color="primary" gutterBottom>
                  {x.heading}
                </Typography>
                <Typography variant="subheading">
                  {x.subheading}
                </Typography>
                {i !== (besItems.length - 1) && <Divider className={classes.divider}/>}
              </div>,
            )}
          </div>

          <div className={classes.link}>
            <Link to={link.to}>
              <Button variant="contained" color="primary" size="large">
                {link.label}
              </Button>
            </Link>
          </div>
        </div>
      }
    />
  );
};

export default withStyles(styles)(BES);

export const query = graphql`
  fragment BESQuery on bes_3 {
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
