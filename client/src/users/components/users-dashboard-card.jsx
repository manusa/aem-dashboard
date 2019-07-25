import React from 'react';
import {connect} from 'react-redux';
import {Card, CardContent, Typography} from '@material-ui/core';
import {usersCount} from '../';

const UsersDashboardCard = ({usersCount}) => (
  <Card>
    <CardContent>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Users
      </Typography>
      <Typography component="p" variant="h4">
        {usersCount}
      </Typography>
    </CardContent>
  </Card>
);

const mapStateToProps = (state) => ({
  usersCount: usersCount(state),
});

export default connect(mapStateToProps)(UsersDashboardCard);
