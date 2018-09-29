import * as React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from '../styles/about-styles';
import HalfPane from '../components/HalfPane';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from 'gatsby-link';

interface Props {
  classes: any
  heading: string
  mainImg: Image
  logo: Image
  text: Array<string>
}

const About: React.SFC<Props> = ({ heading, mainImg, logo, text, classes }) => (
  <section className={classes.section}>
    <div
      style={{backgroundImage: `url(${mainImg.childImageSharp.sizes.src})`}}
      className={classes.head}
    >
    </div>
    <div className={classes.body}>
      <Grid container>
        <Grid item md={6} sm={12} className={classes.logoPane}>
          <img src={logo.childImageSharp.sizes.src} className={classes.logo}/>
        </Grid>
        <Grid item md={6} sm={12}>
          <Typography color="inherit" className={classes.heading}>
            {heading}
          </Typography>
          <div className={classes.text}>
            {text.map((t,i) =>
              <Typography variant="body2" className={classes.paragraph} color="inherit">
                {t}
              </Typography>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  </section>
);

export default withStyles(styles)(About);
