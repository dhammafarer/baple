import { createStyles, Theme } from "@material-ui/core/styles";

const categoriesStyles = (theme:Theme) => createStyles({
  categories: {
    paddingTop: '6em',
    paddingBottom: '6em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heading: {
    marginBottom: '1.2em',
  },
  card: {
    display: 'flex',
    height: '100%',
  },
  cardAction: {
    width: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing.unit * 3,
  },
  img: {
    width: 150,
    height: 'auto',
  },
  label: {
    width: '100%',
    textAlign: 'center',
    fontSize: '1.4em',
    fontWeight: 300,
    color: theme.palette.grey[700],
    marginTop: '1em'
  }
});

export default categoriesStyles;
