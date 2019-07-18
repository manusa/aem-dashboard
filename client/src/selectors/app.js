import get from 'lodash/get';

export const drawerOpen = state => get(state, 'app.drawerOpen', false);

export default {};
