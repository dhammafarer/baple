import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "../../styles/more-styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "gatsby";
import SectionImage from "./SectionImage";

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
  <SectionImage
    image={image.childImageSharp.fluid.src}
    heading={heading}
    before={
      <img className={classes.logo} src={logo.childImageSharp.fluid.src}/>
    }
  after={
    <Button className={classes.button} variant="contained" color="primary" size="large">
      <Link to={link.to}>
        {link.label}
      </Link>
    </Button>
  }
  />
);

export default withStyles(styles)(More);
