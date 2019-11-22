import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function loginAction() {
  return dispatch => {
    dispatch({ type: LOGIN_START });

    axios
      .get('https://devdesk-backend.herokuapp.com/api/auth/login')
      .then(res => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: LOGIN_ERROR, payload: err });
      });
  };
}

export function loginSuccess() {
  return dispatch => {
    axios
      .post('https://devdesk-backend.herokuapp.com/api/auth/login')
      .then(res => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: LOGIN_ERROR, payload: err });
      });
  };
}
