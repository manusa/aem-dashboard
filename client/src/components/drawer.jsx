import React from 'react';
import clsx from 'clsx';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import withStyles from '@material-ui/core/styles/withStyles';
import {drawer} from '../styles/classes';

const Drawer = ({classes, open=true}) => {
  return (
    <SwipeableDrawer
      classes={{
        root: classes.root,
        paper: clsx(classes.paper, open && classes.open)
      }}
      onClose={() => {}}
      onOpen={(() => {})}
      variant="persistent"
      open={open}
    >
      <div className={classes.top}>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
    </SwipeableDrawer>
  );
};

export default withStyles(drawer)(Drawer);
