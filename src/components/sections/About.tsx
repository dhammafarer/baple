import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "../../styles/about-styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "gatsby";
import SectionImage from "./SectionImage";

type Props = WithStyles<typeof styles> & {
  heading?: string
  image?: any
  logo?: any
  body?: string[],
};

const About: React.SFC<Props> = ({ heading, image, logo, body, classes }) => (
  <SectionImage
    image={image.childImageSharp.fluid.src}
  />
);

export default withStyles(styles)(About);
