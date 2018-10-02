import * as React from "react";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "mdi-material-ui/Facebook";
import TwitterIcon from "mdi-material-ui/Twitter";
import YoutubeIcon from "mdi-material-ui/Youtube";
import InstagramIcon from "mdi-material-ui/Instagram";

import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "../../styles/components/footer-styles";

type Props = WithStyles<typeof styles> & {
  title: string
  logo?: any;
  contact: any;
};

const Footer: React.SFC<Props> = ({ classes, contact, title, logo }) => (
  <footer className={classes.footer}>
    <div className={classNames(classes.footerAddress, classes.layout)}>
      {logo && <img className={classes.logo} src={logo.childImageSharp.fixed.src}/>}
      <div className={classes.contact}>
        <Typography variant="title" color="inherit" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subheading" color="inherit" gutterBottom>
          {contact.name}
        </Typography>
        <Typography variant="caption" color="inherit">
          {contact.phone}
        </Typography>
        <Typography variant="caption" color="inherit">
          {contact.email}
        </Typography>
      </div>
    </div>
    <div className={classNames(classes.footerSocial, classes.layout)}>
      {contact.socialMedia.facebook &&
        <a href={contact.socialMedia.facebook}>
          <IconButton><FacebookIcon/></IconButton>
        </a>
      }
    </div>
    <div className={classNames(classes.footerCopy, classes.layout)}>
      <Typography variant="caption" color="secondary">
        © 2018 Copyright: <span className={classes.white}>Baple Group</span>
      </Typography>
    </div>
  </footer>
);

export default withStyles(styles)(Footer);
