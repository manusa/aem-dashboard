import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import Typography from '@material-ui/core/Typography';
import {fetchUser} from '../actions/users';
import {Layout} from '../components';
import theme from '../styles/theme';

import '../styles/main.scss';

const App = ({fetchUser}) => {
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Layout title={'AEM Dashboard'}>
        <Typography variant="h1">Hello React Dark</Typography>
      </Layout>
    </ThemeProvider>
  );
};

const mapDispatchToProps = {
  fetchUser,
};

export default connect(null, mapDispatchToProps)(App);
