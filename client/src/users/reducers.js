import get from 'lodash/get';
import merge from 'lodash/merge';
import reduce from 'lodash/reduce';
import {ALL_USERS_SUCCESS, SELF_SUCCESS} from './actions';

const defaultState = {
  self: null,
};

const reducers = (state = defaultState, action = {}) => {
  if (action.type === SELF_SUCCESS) {
    const newState = {...state};
    newState.self = action.payload.response;
    return newState;
  } else if (action.type === ALL_USERS_SUCCESS) {
    return merge(
      {self: state.self},
      reduce(
        get(action.payload.response, 'authorizables'),
        (acc, auth) => {
          acc[auth.id] = auth;
          return acc;
        },
        {}
      )
    );
  }
  return state;
};

export default reducers;