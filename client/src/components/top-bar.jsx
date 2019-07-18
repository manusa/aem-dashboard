import React from 'react';
import {connect} from 'react-redux';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import {topBar} from '../styles/classes';
import {drawerOpen} from '../selectors/app';
import {toggleDrawer} from '../actions/app';

const TopBar = ({classes, drawerOpen, toggleDrawer, title}) => {
  return (
    <AppBar
      position="absolute"
      className={clsx(
        classes.root,
        drawerOpen && classes.open
      )}
    >
      <Toolbar>
        {!drawerOpen && (
          <IconButton onClick={toggleDrawer}>
            <MenuIcon/>
          </IconButton>
        )}
        <div>
          <Typography component="h1" variant="h6">{title}</Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  drawerOpen: drawerOpen(state)
});

const mapDispatchToProps = {
  toggleDrawer
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(topBar)(TopBar));
