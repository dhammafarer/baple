import * as React from "react";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import HorizontalSplit from "../layouts/HorizontalSplit";
import Typography from "@material-ui/core/Typography";

const styles = (theme: Theme) => createStyles({
  image: {
    width: "100%",
    height: "100%",
  },
  content: {
    background: theme.palette.background.paper,
    height: "100%",
    width: "100%",
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  body: {
    margin: "1.4em 0",
  },
  heading: {},
  subheading: {},
  paragraph: {
    marginBottom: "0.4em",
    ["&:last-child"]: {
      marginBottom: 0,
    },
  },
});

type Props = WithStyles<typeof styles> & {
  reverse?: boolean;
  image?: any;
  heading?: string;
  subheading?: string;
  body?: string[];
  before?: any;
  after?: any;
};

const SectionImage: React.SFC<Props> = ({classes, before, after, reverse, heading, subheading, body, image}) => (
  <HorizontalSplit
    reverse={reverse}
    left={image && <img className={classes.image} src={image.childImageSharp.fluid.src}/>}
    right={
      <div className={classes.content}>
        {before && before}
        { heading &&
          <Typography
            variant="display1"
            className={classes.heading}
            gutterBottom
          >
            {heading}
          </Typography>
        }
        { subheading &&
          <Typography
            variant="headline"
            className={classes.subheading}
          >
            {subheading}
          </Typography>
        }
        { body &&
          <div className={classes.body}>
            {body.map((t, i) =>
            <Typography
              key={i}
              variant="body2"
              className={classes.paragraph}
            >
                {t}
              </Typography>,
            )}
          </div>
        }
        {after && after}
      </div>
    }
  />
);

export default withStyles(styles)(SectionImage);
