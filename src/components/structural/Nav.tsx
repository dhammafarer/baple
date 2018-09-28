import * as React from 'react';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from '../../styles/nav-styles';
import Link from 'gatsby-link';
import CloseIcon from "@material-ui/icons/Close";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import { Nav_2, Contact_2 } from '../../graphql';

type Props = WithStyles<typeof styles> & {
  handleClose: any
  open: any
  logo: string
  title: string
  nav: Nav_2
  contact?: Contact_2
}

const Nav: React.SFC<Props> = ({ open, handleClose, nav, classes, logo, title, contact}) => (
  <Drawer anchor="right" open={open} onClose={handleClose}>
    <div
      tabIndex={0}
      role="button"
      onClick={handleClose}
      onKeyDown={handleClose}
      className={classes.nav}
    >
      <IconButton className={classes.close}>
        <CloseIcon color="secondary"/>
      </IconButton>
      <Link to={nav.home}>
        <img className={classes.logo} src={logo}/>
        <Typography variant="title" className={classes.title}>
          {title}
        </Typography>
      </Link>
      <List className={classes.list}>
        <Divider/>
        {
          nav.navLinks.map((x:any) => {
            return (
              x.links ?
              <ListItem divider className={classes.listItem}>
                <List className={classes.list}>
                  <ListItem button className={classes.listItem}>
                    <Link to={x.to} className={classes.link}>
                      <Typography
                        variant="body1"
                        color="inherit"
                        className={classes.linkText}
                      >
                        {x.label}
                      </Typography>
                    </Link>
                  </ListItem>
                  {x.links.map((y:any) =>
                    <ListItem button key={y.to} className={classes.listItem}>
                      <Link to={y.to} className={classes.linkNested}>
                        <Typography
                          variant="body1"
                          color="inherit"
                          className={classes.linkNestedText}
                        >
                          {y.label}
                        </Typography>
                      </Link>
                    </ListItem>
                  )}
                </List>
              </ListItem>
              :
              <ListItem key={x.to} button divider className={classes.listItem}>
                <Link to={x.to} className={classes.link}>
                  <Typography
                    variant="body1"
                    color="inherit"
                    className={classes.linkText}
                  >
                    {x.label}
                  </Typography>
                </Link>
              </ListItem>
            )
          })
        }
      </List>
      { contact &&
        <div className={classes.contact}>
          <div className={classes.details}>
            <PhoneIcon className={classes.icon}/>
            <Typography color="inherit" gutterBottom>
              {contact[0].phone}
            </Typography>
          </div>
          <div className={classes.details}>
            <EmailIcon className={classes.icon}/>
            <Typography color="inherit">
              {contact[0].email}
            </Typography>
          </div>
        </div>
      }
    </div>
  </Drawer>
);

export default withStyles(styles)(Nav);
