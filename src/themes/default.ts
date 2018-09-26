import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#336699',
    },
    secondary: {
      main: '#757475',
    }
  },
  typography: {
    fontFamily: [
      'Open Sans',
      'sans-serif'
    ].join(',')
  }
});

export default theme;
