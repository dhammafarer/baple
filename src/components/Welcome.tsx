import * as React from 'react';
import SectionFeatured from './SectionFeatured';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

interface Props {
  heading?: string
  subheading?: string
  logo?: any
  image?: any
}

const Welcome: React.SFC<Props> = ({ heading, subheading, logo, image }) => (
  <SectionFeatured
    image={image}
    heading={heading}
    subheading={subheading}
    before={logo && <img src={logo.childImageSharp.fluid.src}/>}
  />
);

export default Welcome;
