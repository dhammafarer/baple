import * as React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from '../styles/contact-styles';
import HalfPane from './HalfPane';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";

interface Props {
  classes: any
  heading: string
  logo: Image
  mainImg: Image
  details: {
    telephone: string
    email: string
    address: Array<string>
  }
}

const Contact: React.SFC<Props> = ({ heading, logo, mainImg, details, classes }) => (
  <section className={classes.section}>
    <div className={classes.header}>
      <img src={logo.childImageSharp.sizes.src} className={classes.logo}/>
      <Typography variant="display2" className={classes.heading}>
        {heading}
      </Typography>
    </div>
    <div className={classes.details}>
      <Grid container spacing={32}>
        <Grid item md={4} xs={12}>
          <Paper className={classes.detailPane}>
            <PhoneIcon className={classes.icon}/>
            <div className={classes.textContent}>
              <Typography className={classes.detailText} variant="title">
                {details.telephone}
              </Typography>
            </div>
          </Paper>
        </Grid>

        <Grid item md={4} xs={12}>
          <Paper className={classes.detailPane}>
            <EmailIcon className={classes.icon}/>
            <div className={classes.textContent}>
              <Typography className={classes.detailText} variant="title">
                {details.email}
              </Typography>
            </div>
          </Paper>
        </Grid>

        <Grid item md={4} xs={12}>
          <Paper className={classes.detailPane}>
            <HomeIcon className={classes.icon}/>
            <div className={classes.textContent}>
              <div className={classes.address}>
                {details.address.map((x, i) =>
                  <Typography className={classes.detailText} variant="title">
                    {x}
                  </Typography>
                )}
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  </section>
);

export default withStyles(styles)(Contact);
