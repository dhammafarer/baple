import * as React from "react";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import classnames from "classnames";
import Img from "gatsby-image";
import { HeroProps } from "./index";

const Header = <div>Header</div>;

const styles = (theme: Theme) => createStyles({
  section: {
    display: "flex",
    flexDirection: "column",
  },
  fullHeight: {
    minHeight: "calc(100vh - 64px)",
  },
  main: {},
  header: {
    position: "relative",
    height: "100%",
    width: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  img: {
    height: "100%",
    width: "100%",
  },
  headerContent: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  container: {
    position: "relative",
    width: "100%",
    padding: theme.spacing.unit * 3,
    borderTop: `1px solid ${theme.palette.common.white}`,
    borderBottom: `1px solid ${theme.palette.common.white}`,
    zIndex: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.6,
    background: "linear-gradient(60deg, #fff, #eee)",
    zIndex: -1,
  },
  heading: {
    color: theme.palette.primary.main,
  },
  subheading: {
    color: theme.palette.secondary.main,
    marginTop: "1rem",
  },
  content: {
    padding: theme.spacing.unit * 3,
  },
  text: {},
  paragraph: {},
});

type Props = WithStyles<typeof styles> & HeroProps;

const HeroMobile: React.SFC<Props> = ({
  classes, before, after, gradient, heading, subheading, text, image, fullHeight,
}) => (
  <section
    className={classes.section}
  >
    <div className={classes.header}>
      <div className={classes.image}>
        <Img
          className={classes.img}
          fluid={image.childImageSharp.fluid}
        />
      </div>
      <div className={classes.headerContent}>
        <div className={classes.container}>
          <div className={classes.overlay}/>
          {before && before}
          <Typography
            className={classes.heading}
            variant="display2"
          >
            {heading}
          </Typography>
          <Typography variant="title">
            {subheading}
          </Typography>
        </div>
      </div>
    </div>
    <div className={classes.content}>
      {text && text}
      {after && after}
    </div>
  </section>
);

export default withStyles(styles)(HeroMobile);
