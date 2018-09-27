import * as React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from '../styles//welcome-styles';
import SectionFeatured from './SectionFeatured';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

interface Props {
  heading: string
  subheading: string
  logo: any
  image: any
  classes: any
}

const Welcome: React.SFC<Props> = ({ heading, subheading, logo, image, classes }) => (
  <SectionFeatured
    image={image}
    heading={heading}
    subheading={subheading}
    before={<img src={logo.childImageSharp.fluid.src}/>}
  />
);

export default withStyles(styles)(Welcome);
