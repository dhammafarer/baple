import { createStyles, Theme } from "@material-ui/core/styles";

const aboutStyles = (theme: Theme) => createStyles({
  section: {
    background: theme.palette.common.white,
  },
  heading: {
    width: "100%",
    marginBottom: "1.2em",
    textAlign: "center",
  },
  pane: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: "3em",
    paddingBottom: "3em",
    margin: "0 auto",
    maxWidth: 1000,
  },
  text: {
  },
  paragraph: {
    marginBottom: "1em",
    textAlign: "center",
  },
  point: {
    background: theme.palette.primary.light,
    padding: "1em",
    margin: "0.4em",
  },
  pointText: {
    color: theme.palette.common.white,
    textAlign: "center",
  },
});

export default aboutStyles;
