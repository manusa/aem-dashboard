const drawerWidth = 240;

export const app = theme => ({
  root: {
    display: 'flex'
  },
  main: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  mainTopBarSpacer: theme.mixins.toolbar
});

export const topBar = theme => ({
  root: {
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  open: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }
});

export const drawer = theme => ({
  root: {
    display: 'flex',
    flexShrink: 0
  },
  top: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar,
  },
  paper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
  },
  paperOpen: {
  }
});
