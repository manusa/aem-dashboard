import React from 'react';
import {ListItem, ListItemIcon, ListItemText} from '@material-ui/core';

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
