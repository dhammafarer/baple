import { createStyles } from "@material-ui/core/styles";

const footerStyles = (theme:any) => createStyles({
  layout: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
  },
  footer: {
    marginTop: theme.spacing.unit * 3,
  },
  footerSocial: {
    backgroundColor: theme.palette.primary.light,
    textAlign: 'center'
  },
  footerAddress: {
    backgroundColor: theme.palette.secondary.dark,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerCopy: {
    backgroundColor: theme.palette.primary.dark,
    textAlign: 'center'
  },
  white: {
    color: '#fff'
  },
  logo: {
    width: 150,
    height: 150,
  },
  contact: {
    borderLeft: '1px solid gray',
    borderColor: theme.palette.secondary.light,
    paddingLeft: 25,
    color: '#ccc',
  }
});

export default footerStyles;
