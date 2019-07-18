import {TOGGLE_DRAWER} from '../actions/app';

const defaultState = {
  drawerOpen: true,
};

const app = (state = defaultState, action = {}) => {
  if (action.type === TOGGLE_DRAWER) {
    return {...state,
      drawerOpen: !state.drawerOpen
    };
  }
  return state;
};

export default app;