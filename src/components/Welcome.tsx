import * as React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from '../styles//welcome-styles';
import HalfPane from './HalfPane';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

interface Props {
  text: Array<string>
  logo: Image
  mainImg: Image
  classes: any
}

const Welcome: React.SFC<Props> = ({ text, logo, mainImg, classes }) => (
  <div className={classes.section}
    style={{backgroundImage: (mainImg ? `url(${mainImg.childImageSharp.sizes.src})` : '')}}
  >
    <img className={classes.logo} src={logo.childImageSharp.sizes.src}/>

    <div className={classes.text}>
      <Typography
        variant="display1"
        className={classes.english}
        color="inherit"
      >
        {text[0]}
      </Typography>
      <Typography
        variant="headline"
        color="inherit"
        className={classes.spanish}
      >
        {text[1]}
      </Typography>
    </div>
  </div>
);

export default withStyles(styles)(Welcome);
