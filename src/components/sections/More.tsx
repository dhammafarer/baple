import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "../../styles/components/more-styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "gatsby";
import SectionCentered from "./SectionCentered";
import Img from "gatsby-image";

type Props = WithStyles<typeof styles> & {
  heading: string;
  link?: {
    to?: string
    label?: string,
  };
  image: any;
  logo: any;
};

const More: React.SFC<Props> = ({ heading, image, logo, link, classes }) => (
  <SectionCentered
    image={image}
    heading={heading}
    before={
      logo && <Img className={classes.logo} fixed={logo.childImageSharp.fixed}/>
    }
  after={
    <Button className={classes.button} variant="outlined" color="primary" size="large">
      <Link to={link.to}>
        {link.label}
      </Link>
    </Button>
  }
  />
);

export default withStyles(styles)(More);
