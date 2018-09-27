import { createStyles, Theme } from "@material-ui/core/styles";

const welcomeStyles = (theme:Theme) => createStyles({
  section: {
    background: theme.palette.grey[200],
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: 'calc(100vh - 64px)',
    padding: '3em 0',
    height: '100%',
    width: '100%',
    justifyConent: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row'
    }
  },
  logo: {
    width: 250,
    height: 250,
  },
  text: {
    margin: '2em 0.6em',
    maxWidth: 400,
    textAlign: 'center',
  },
  english: {
    fontFamily: 'Cedarville Cursive, sans-serif',
    color: theme.palette.grey[900],
    marginBottom: '1.2em',
  },
  spanish: {
    color: theme.palette.grey[900],
    fontWeight: 300,
  },
});

export default welcomeStyles;
