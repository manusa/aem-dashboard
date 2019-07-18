import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Drawer from './drawer';
import TopBar from './top-bar';
import {layout} from '../styles/classes';

const Layout = ({classes, title, children}) => (
  <>
    <div className={classes.root}>
      <TopBar title={title}/>
      <Drawer/>
      <main className={classes.main}>
        <div className={classes.mainTopBarSpacer} />
        {children}
      </main>
    </div>
  </>
);

export default withStyles(layout)(Layout);
