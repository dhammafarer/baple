import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "../../styles/tcs-styles";
import Typography from "@material-ui/core/Typography";
import SectionCentered from "./SectionCentered";

type Props = WithStyles<typeof styles> & {
  image: any;
  heading: string;
};

const Tcs: React.SFC<Props> = ({ image, heading, classes }) => (
  <SectionCentered
    image={image.childImageSharp.fluid.src}
    heading={heading}
  />
);

export default withStyles(styles)(Tcs);
