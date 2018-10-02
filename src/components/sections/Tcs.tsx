import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "../../styles/components/tcs-styles";
import Divider from "@material-ui/core/Divider";
import SectionCentered from "./SectionCentered";

type Props = WithStyles<typeof styles> & {
  image: any;
  heading: string;
};

const Tcs: React.SFC<Props> = ({ image, heading, classes }) => (
  <SectionCentered
    before={<Divider className={classes.divider}/>}
    image={image}
  />
);

export default withStyles(styles)(Tcs);
