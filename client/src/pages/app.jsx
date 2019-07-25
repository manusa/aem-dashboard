import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {CssBaseline} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import {fetchUser, fetchAllUsers} from '../users';
import {DashGrid, Layout} from '../components';
import theme from '../styles/theme';

import '../styles/main.scss';

const App = ({fetchUser, fetchAllUsers}) => {
  useEffect(() => {
    fetchUser();
    fetchAllUsers();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Layout title={'AEM Dashboard'}>
        <DashGrid />
      </Layout>
    </ThemeProvider>
  );
};

const mapDispatchToProps = {
  fetchUser,
  fetchAllUsers
};

export default connect(null, mapDispatchToProps)(App);
