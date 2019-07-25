import React from 'react';
import {Container, Grid, Paper, Typography, withStyles} from '@material-ui/core';
import {UsersDashboardCard} from '../users';
import {dashGrid} from '../styles/classes';

const DashGrid = ({classes}) => (
  <Container className={classes.root}>
    <Grid container spacing={3}>
      <Grid item xs={12} md={4} lg={3}>
        <Paper>
          <UsersDashboardCard />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Paper>
          <Typography variant="h3">Other Dashes</Typography>
        </Paper>
      </Grid>
    </Grid>
  </Container>
);

export default withStyles(dashGrid)(DashGrid);
