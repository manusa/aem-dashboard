import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import {app} from '../styles/classes';
import theme from '../styles/theme';

import '../styles/main.scss';
import Drawer from '../components/drawer';
import TopBar from '../components/top-bar';

const App = ({classes}) => (
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <div className={classes.root}>
      <TopBar/>
      <Drawer/>
      <main className={classes.main}>
        <div className={classes.mainTopBarSpacer} />
        <Typography variant="h1">Hello React Dark</Typography>
      </main>
    </div>
  </ThemeProvider>
);

export default withStyles(app)(App);
