import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "../../styles/components/contact-us-styles";
import SectionFeatured from "./SectionFeatured";
import Img from "gatsby-image";

type Props = WithStyles<typeof styles> & {
  heading: string;
  logo: any;
  image: any;
};

const Contact: React.SFC<Props> = ({ heading, logo, image, classes }) => (
  <SectionFeatured
    image={image}
    heading={heading}
    before={<Img fluid={logo.childImageSharp.fluid} className={classes.logo}/>}
  />
);

export default withStyles(styles)(Contact);
