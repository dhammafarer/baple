import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "../../styles/welcome-styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Welcome_2 } from "../../graphql";
import SectionFeatured from "../sections/SectionFeatured";

type Props = WithStyles<typeof styles> & {
  heading: string,
  subheading: string,
  logo: any,
  image: any,
};

const Welcome: React.SFC<Props> = ({ heading, subheading, logo, image, classes }) => (
  <SectionFeatured
    fullHeight
    image={image && image.childImageSharp.fluid.src}
    before={
      <div className={classes.section}>
        {logo && <img src={logo.childImageSharp.fluid.src}/>}
        <div className={classes.text}>
          <Typography
            className={classes.heading}
            variant="display2"
          >
            {heading}
          </Typography>
          <Typography
            className={classes.subheading}
            variant="display1"
          >
            {heading}
          </Typography>
        </div>
      </div>
    }
  />
);

export default withStyles(styles)(Welcome);
