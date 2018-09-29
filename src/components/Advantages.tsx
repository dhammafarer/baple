import * as React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from '../styles/advantages-styles';
import HalfPane from '../components/HalfPane';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from 'gatsby-link';

interface Img {
  img: Image
  label: string
}

interface Props {
  classes: any
  heading: string
  points: Array<string>
  text: Array<string>
  imgs: Array<Img>
}

const Advantages: React.SFC<Props> = ({ heading, text, points,imgs, classes }) => (
  <section className={classes.section}>
    <div className={classes.body}>
      <Grid container>
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
        <Grid item md={6} sm={12} className={classes.logoPane}>
          {points.map(p =>
          <Paper className={classes.point}>
            <Typography className={classes.pointText}>
              {p}
            </Typography>
          </Paper>
          )}
        </Grid>
      </Grid>
      <div className={classes.imgs}>
        <Grid container>
          {imgs.map((x,i) =>
            <Grid item xs={12}>
              <img className={classes.img} src={x.img.childImageSharp.sizes.src}/>
            </Grid>
          )
          }
        </Grid>
      </div>
    </div>
  </section>
);

export default withStyles(styles)(Advantages);
