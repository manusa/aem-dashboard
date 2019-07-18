import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemIcon';

const DrawerListItem = ({icon, text}) => (
  <ListItem button>
    <ListItemIcon>
      {icon}
    </ListItemIcon>
    <ListItemText>
      {text}
    </ListItemText>
  </ListItem>
);

export default DrawerListItem;
