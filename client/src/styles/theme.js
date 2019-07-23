import {createMuiTheme} from '@material-ui/core';
import {blue, deepOrange} from '@material-ui/core/colors';

const theme = createMuiTheme({
  spacing: 4,
  palette: {
    type: 'light',
    primary: blue,
    secondary: deepOrange
  }
});

export default theme;