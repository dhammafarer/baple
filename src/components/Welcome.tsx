import * as React from 'react';
import Section from './SectionCentered';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

interface Props {
  heading?: string
  subheading?: string
  logo?: any
  image?: any
}

const Welcome: React.SFC<Props> = ({ heading, subheading, logo, image }) => (
  <Section
    fullHeight
    heading={heading}
    image={image.childImageSharp.fluid.src}
    subheading={subheading}
    before={logo && <img src={logo.childImageSharp.fluid.src}/>}
  />
);

export default Welcome;
