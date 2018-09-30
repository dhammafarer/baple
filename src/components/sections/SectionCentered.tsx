import * as React from "react";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import classnames from "classnames";

const styles = (theme: Theme) => createStyles({
  section: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    padding: theme.spacing.unit * 3,
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: {},
  heading: {},
  subheading: {},
  paragraph: {},
  image: {
    height: "100%",
    width: "100%",
  },
});

type Props = WithStyles<typeof styles> & {
  reverse?: boolean
  image?: string
  gradient?: string
  heading?: string
  subheading?: string
  text?: string[]
  before?: any
  after?: any,
};

const SectionCentered: React.SFC<Props> = ({
  classes, before, after, gradient, heading, subheading, text, image, reverse}) => (
  <section className={classes.section}>
    <div className={classes.content}>
      {before && before}
      { heading &&
        <Typography variant="display1" className={classes.heading}>
          {heading}
        </Typography>
      }
      { subheading &&
        <Typography variant="subheading" className={classes.subheading}>
          {subheading}
        </Typography>
      }
      { text &&
        <div className={classes.text}>
          {text.map((t, i) =>
            <Typography key={i} variant="body2" className={classes.paragraph}>
              {t}
            </Typography>,
          )}
        </div>
      }
      {after && after}
    </div>
    { image &&
      <img src={image} className={classes.image}/>
    }
  </section>
);

export default withStyles(styles)(SectionCentered);
