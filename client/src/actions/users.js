const SELF_REQUEST = 'SELF_REQUEST';
export const SELF_SUCCESS = 'SELF_SUCCESS';
const SELF_FAILURE = 'SELF_FAILURE';

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

export default {};
