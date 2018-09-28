import * as React from 'react';
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Nav from './Nav';
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from '../../styles/header-bar-styles';
import Link from 'gatsby-link';
import { Nav_2} from '../../graphql';

interface Lnk {
  to: string
  label: string
  links: Array<Lnk>
}

type Props = WithStyles<typeof styles> & {
  handleClose: any
  toggleMenu: any
  open: any
  title: string
  logo: string
  nav: Nav_2
}

const HeaderBar: React.SFC<Props> = ({ classes, open, handleClose, toggleMenu, nav, title, logo }) => (
    <div>
      <AppBar position="fixed" className={classes.bar}>
        <Toolbar>
          <img className={classes.logo} src={logo}/>
          <Hidden smDown>
            <Typography variant="title" color="primary" className={classes.title}>
              {title}
            </Typography>
          </Hidden>
          <div className={classes.grow}/>
          <div>
            {nav.navLinks.map(x =>
              <Link key={x.to} to={x.to}>
                <Button className={classes.link}>
                  {x.label}
                </Button>
              </Link>
            )}
          </div>
          <IconButton color="primary" onClick={toggleMenu}>
            <MenuIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Nav
        nav={nav}
        logo={logo}
        title={title}
        open={open}
        handleClose={handleClose}
      />
    </div>
);

export default withStyles(styles)(HeaderBar);
