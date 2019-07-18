import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/layout';
import theme from '../styles/theme';

import '../styles/main.scss';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Layout title={'AEM Dashboard'}>
      <Typography variant="h1">Hello React Dark</Typography>
    </Layout>
  </ThemeProvider>
);

export default App;
