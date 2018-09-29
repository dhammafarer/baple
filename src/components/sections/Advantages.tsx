import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "../../styles/advantages-styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Link } from "gatsby";
import HorizontalSplit from "../layouts/HorizontalSplit";

type Props = WithStyles<typeof styles> & {
  heading: string,
  points: string[],
  body: string[],
};

const Advantages: React.SFC<Props> = ({ heading, body, points, classes }) => (
  <HorizontalSplit
    left={
      <div className={classes.pane}>
        <Typography
          color="inherit"
          className={classes.heading}
          variant="display1"
        >
          {heading}
        </Typography>
        <div className={classes.text}>
          {body.map((t, i) =>
          <Typography
            variant="body2"
            className={classes.paragraph}
            color="inherit"
          >
              {t}
            </Typography>,
          )}
        </div>
      </div>
    }
  right={
    <div className={classes.pane}>
      {points.map((p) =>
      <Paper className={classes.point}>
        <Typography
          color="inherit"
          variant="title"
          className={classes.pointText}
        >
          {p}
        </Typography>
      </Paper>,
      )}
    </div>
  }
  />
);

export default withStyles(styles)(Advantages);
