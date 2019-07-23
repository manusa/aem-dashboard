import React from 'react';
import {Grid, Paper, Typography, withStyles} from '@material-ui/core';
import {dashGrid} from '../styles/classes';

const DashGrid = ({classes}) => (
  <Grid className={classes.root} container spacing={3}>
    <Grid item xs={12} md={4} lg={3}>
      <Paper>
        <Typography variant="h3">Hello React</Typography>
      </Paper>
    </Grid>
    <Grid item xs={12} md={4} lg={3}>
      <Paper>
        <Typography variant="h3">Hello React</Typography>
      </Paper>
    </Grid>
  </Grid>
);

export default (withStyles(dashGrid))(DashGrid);
