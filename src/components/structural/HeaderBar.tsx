import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Nav from "./Nav";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "../../styles/components/header-bar-styles";
import Link from "gatsby-link";
import { NavLink } from "./Nav";

export interface HeaderBarProps {
  handleClose: any;
  toggleMenu: any;
  open: any;
  title: string;
  logo: any;
  navLinks: NavLink[];
  contact?: any;
}

const HeaderBar: React.SFC<HeaderBarProps & WithStyles<typeof styles>> = ({
  classes, open, handleClose, toggleMenu, navLinks, title, logo, contact }) => (
    <div>
      <AppBar position="fixed" className={classes.bar}>
        <Toolbar>
          <img className={classes.logo} src={logo.childImageSharp.fixed.src}/>
          <Hidden smDown>
            <Typography variant="title" color="primary" className={classes.title}>
              {title}
            </Typography>
          </Hidden>
          <div className={classes.grow}/>
          <Hidden smDown>
            <div>
              {navLinks.map((x) =>
                <Link key={x.to} to={x.to}>
                  <Button className={classes.link}>
                    {x.label}
                  </Button>
                </Link>,
              )}
            </div>
          </Hidden>
          <IconButton color="primary" onClick={toggleMenu}>
            <MenuIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Nav
        navLinks={navLinks}
        logo={logo}
        title={title}
        open={open}
        handleClose={handleClose}
        contact={contact}
      />
    </div>
);

export default withStyles(styles)(HeaderBar);
