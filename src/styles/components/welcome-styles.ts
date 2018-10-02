import { createStyles, Theme } from "@material-ui/core/styles";

const welcomeStyles = (theme: Theme) => createStyles({
  section: {
    height: "100%",
    width: "100%",
    justifyConent: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  logo: {
    width: 300,
    height: 300,
  },
  text: {
    margin: "2em 0.6em",
    textAlign: "center",
  },
  heading: {
    fontFamily: "Cedarville Cursive, sans-serif",
    color: theme.palette.grey[900],
    marginBottom: "1.2em",
  },
  subheading: {
    color: theme.palette.grey[900],
    fontWeight: 300,
  },
  quotes: {
    maxWidth: 600,
  },
  blockquote: {
    marginBottom: "0.2em",
  },
  quote: {
    fontStyle: "italic",
    marginBottom: "0.4em",
  },
  author: {
  },
});

export default welcomeStyles;
