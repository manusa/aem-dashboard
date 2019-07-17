import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import withStyles from '@material-ui/core/styles/withStyles';
import {topBar} from '../styles/classes';

const TopBar = ({classes, open=true}) => {
  return (
    <AppBar
      position="absolute"
      className={clsx(
        classes.root,
        open && classes.open
      )}
    >
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(topBar)(TopBar);
