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

const ContactUs: React.SFC<Props> = ({ heading, logo, image, classes }) => (
  <SectionFeatured
    gradient="linear-gradient(60deg, #ded, #fef)"
    image={image}
    before={<Img fluid={logo.childImageSharp.fixed} className={classes.logo}/>}
  />
);

export default withStyles(styles)(ContactUs);
