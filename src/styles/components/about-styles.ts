import { createStyles, Theme } from "@material-ui/core/styles";

const aboutStyles = (theme: Theme) => createStyles({
  section: {
    background: theme.palette.common.white,
  },
  head: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: "100%",
    height: 300,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    overflow: "hidden",
  },
  mainImg: {
    width: "100%",
  },
  heading: {
    fontSize: "1.8em",
    fontWeight: 700,
    color: theme.palette.primary.main,
    width: "100%",
    textTransform: "uppercase",
    marginBottom: "1.2em",
    textAlign: "center",
  },
  body: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: "3em",
    paddingBottom: "3em",
    margin: "0 auto",
    maxWidth: 1000,
    borderBottom: "1px solid grey",
  },
  logoPane: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginBottom: "1rem",
  },
  text: {
  },
  paragraph: {
    marginBottom: "1em",
    textAlign: "center",
  },
});

export default aboutStyles;
