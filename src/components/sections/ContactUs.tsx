import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "../../styles/contact-us-styles";
import SectionFeatured from "./SectionFeatured";

type Props = WithStyles<typeof styles> & {
  heading: string;
  logo: any;
  image: any;
};

const Contact: React.SFC<Props> = ({ heading, logo, image, classes }) => (
  <SectionFeatured
    image={image.childImageSharp.fluid.src}
    heading={heading}
    before={<img src={logo.childImageSharp.fluid.src} className={classes.logo}/>}
  />
);

export default withStyles(styles)(Contact);
