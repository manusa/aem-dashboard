const SELF_REQUEST = 'SELF_REQUEST';
export const SELF_SUCCESS = 'SELF_SUCCESS';
const SELF_FAILURE = 'SELF_FAILURE';
const ALL_USERS_REQUEST = 'ALL_USERS_REQUEST';
export const ALL_USERS_SUCCESS = 'ALL_USERS_SUCCESS';
const ALL_USERS_FAILURE = 'ALL_USERS_FAILURE';

export const fetchUser = () => async (dispatch) => {
  dispatch({type: SELF_REQUEST});
  const response = await fetch('/libs/cq/security/userinfo.json');
  if (response.ok) {
    const json = await response.json();
    dispatch({type: SELF_SUCCESS, payload: {
        response: json
      }});
  } else {
    const message = await response.text();
    dispatch({type: SELF_FAILURE, payload: {
        message
      }});
  }
};

export const fetchAllUsers = () =>  async (dispatch) => {
  dispatch({type: ALL_USERS_REQUEST});
  const response = await fetch('/bin/security/authorizables.json?hideGroups=true&_charset=utf-8');
  if (response.ok) {
    const json = await response.json();
    dispatch({type: ALL_USERS_SUCCESS, payload: {
        response: json
      }});
  } else {
    const message = await response.text();
    dispatch({type: ALL_USERS_FAILURE, payload: {
        message
      }});
  }
};

export default {};
