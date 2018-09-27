import { createStyles, Theme } from "@material-ui/core/styles";

const layoutStyles = (theme:Theme) => createStyles({
  '@global': {
    a: {
      textDecoration: 'none',
      color: 'inherit',
    }
  },
  layout: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flex: 1,
    width: '100%',
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 64,
    margin: '0 auto',
    maxWidth: 1600,
  }
});

export default layoutStyles;
