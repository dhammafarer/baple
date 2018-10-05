import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";

const primary = "#336699";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: "#757475",
    },
  },
  typography: {
    fontFamily: [
      "Open Sans",
      "sans-serif",
    ].join(","),
    display2: {
      color: primary,
    },
    display1: {
      color: primary,
    },
  },
});

export default theme;
