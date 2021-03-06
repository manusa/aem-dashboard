import React from 'react';
import {connect} from 'react-redux';
import clsx from 'clsx';
import {Divider, IconButton, List, SwipeableDrawer, withStyles} from '@material-ui/core';
import {ChevronLeft as ChevronLeftIcon, Dashboard as DashboardIcon} from '@material-ui/icons';
import DrawerListItem from './drawer-list-item';
import {toggleDrawer} from '../actions/app';
import {drawerOpen} from '../selectors/app';
import {drawer} from '../styles/classes';

const Drawer = ({classes, drawerOpen, toggleDrawer}) => {
  return (
    <SwipeableDrawer
      classes={{
        root: classes.root,
        paper: clsx(classes.paper, !drawerOpen && classes.paperClose)
      }}
      onClose={() => {}}
      onOpen={(() => {})}
      variant="permanent"
      open={drawerOpen}
    >
      <div className={classes.top}>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <DrawerListItem icon={<DashboardIcon />} text="Dashboard"/>
      </List>
    </SwipeableDrawer>
  );
};

const mapStateToProps = (state) => ({
  drawerOpen: drawerOpen(state),
});

const mapDispatchToProps = {
  toggleDrawer
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(drawer)(Drawer));
