import {SELF_SUCCESS} from '../actions/users';

const defaultState = {
  self: null,
};

const users = (state = defaultState, action = {}) => {
  if (action.type === SELF_SUCCESS) {
    const newState = {...state};
    newState.self = action.payload.response;
    return newState;
  }
  return state;
};

export default users;