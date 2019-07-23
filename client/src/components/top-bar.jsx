import React, {useState} from 'react';
import {connect} from 'react-redux';
import clsx from 'clsx';
import {
  AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography, withStyles
} from '@material-ui/core';
import {Menu as MenuIcon, Person as PersonIcon} from '@material-ui/icons';
import {toggleDrawer} from '../actions/app';
import {topBar} from '../styles/classes';
import {drawerOpen} from '../selectors/app';
import {appName, appPath} from '../selectors/apps';
import {selfAllowedApps, selfUserName} from '../selectors/users';

const TopBar = ({classes, drawerOpen, toggleDrawer, title, userName, allowedApps}) => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const handleOpenMenu = event => {

    setMenuAnchor(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setMenuAnchor(null);
  };
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
          <IconButton
            color="inherit"
            onClick={toggleDrawer}
          >
            <MenuIcon/>
          </IconButton>
        )}
        <div className={classes.title}>
          <Typography component="h1" variant="h6">{title}</Typography>
        </div>
        <div className={classes.user}>
          <Button
            color="inherit"
            onClick={handleOpenMenu}
          >
            <PersonIcon className={classes.userButtonIcon} />
            <Typography>
              {userName || 'NOT LOGGED IN'}
            </Typography>
          </Button>
          <Menu
            anchorEl={menuAnchor}
            keepMounted
            open={Boolean(menuAnchor)}
            onClose={handleCloseMenu}
          >
            {allowedApps.map(app => (
              <MenuItem key={appPath(app)}>
                <a href={`${appPath(app)}.html`} style={{textDecoration: 'none', color: 'inherit'}}>
                  {appName(app)}
                </a>
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  drawerOpen: drawerOpen(state),
  userName: selfUserName(state),
  allowedApps: selfAllowedApps(state)
});

const mapDispatchToProps = {
  toggleDrawer
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(topBar)(TopBar));
