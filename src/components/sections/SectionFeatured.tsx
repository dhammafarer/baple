import * as React from "react";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import classnames from "classnames";

const styles = (theme: Theme) => createStyles({
  section: {
    paddingTop: "3em",
    paddingBottom: "3em",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  fullHeight: {
    minHeight: "calc(100vh - 64px)",
  },
  content: {
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

type Props = WithStyles<typeof styles> & {
  image?: string
  gradient?: string
  heading?: string
  subheading?: string
  text?: string[]
  before?: any
  after?: any
  fullHeight?: boolean,
};

const SectionFeatured: React.SFC<Props> = ({
  classes, before, after, gradient, heading, subheading, text, image, fullHeight,
}) => (
  <section style={{
    backgroundImage: `${gradient ? gradient + "," : ""}url( ${image ? image : ""}
      )`,
    }}
    className={classnames(classes.section, (fullHeight && classes.fullHeight))}
  >
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
            <Typography key={i} variant="body2" className={classes.paragraph}>
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
