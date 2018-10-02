import * as React from "react";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import classnames from "classnames";
import Img from "gatsby-image";

const styles = (theme: Theme) => createStyles({
  section: {
    position: "relative",
    padding: "3em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.6,
  },
  fullHeight: {
    minHeight: "calc(100vh - 64px)",
  },
  content: {
    zIndex: 1,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  text: {},
  header: {
    marginBottom: "1em",
  },
  heading: {
    paddingBottom: theme.spacing.unit * 3,
  },
  subheading: {},
  paragraph: {},
});

export interface SectionFeaturedProps {
  image?: any;
  gradient?: string;
  heading?: string;
  subheading?: string;
  text?: string[];
  before?: any;
  after?: any;
  fullHeight?: boolean;
}

type Props = WithStyles<typeof styles> & SectionFeaturedProps;

const SectionFeatured: React.SFC<Props> = ({
  classes, before, after, gradient, heading, subheading, text, image, fullHeight,
}) => (
  <section
    className={classnames(classes.section, (fullHeight && classes.fullHeight))}
  >
    <div className={classes.image}>
      {image && <Img className={classes.img} fluid={image.childImageSharp.fluid}/>}
    </div>
    <div style={{
      background: `${gradient ? gradient : ""}` }}
      className={classes.overlay}
    />
    <div className={classes.content}>
      {before && before}
      <div className={classes.header}>
        { heading &&
          <Typography variant="display2" className={classes.heading}>
            {heading}
          </Typography>
        }
        { subheading &&
          <Typography variant="title" className={classes.subheading}>
            {subheading}
          </Typography>
        }
      </div>
      { text &&
        <div className={classes.text}>
          {text.map((t, i) =>
            <Typography key={i} variant="body2" color="inherit" className={classes.paragraph}>
              {t}
            </Typography>,
          )}
        </div>
      }
      {after && after}
    </div>
  </section>
);

export default withStyles(styles)(SectionFeatured);
