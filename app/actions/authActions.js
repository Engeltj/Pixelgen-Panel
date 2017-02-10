import fetch from 'isomorphic-fetch';
import _ from 'lodash';
import { request } from '../index';

import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT
} from '../enums';

export const signOut = () => {
  localStorage.removeItem('token');
  return {
    'type': SIGN_OUT
  };
};

export const signInRequest = () => ({
  'type': SIGN_IN
});

export const signInSuccess = (payload) => {
  if (payload.token) {
    localStorage.setItem('token', payload.token);
  }
  return {
    'type': SIGN_IN_SUCCESS,
    payload
  };
};

export const signInError = (error) => {
  return {
    'type': SIGN_IN_ERROR,
    error
  };
};

export const signInWithToken = () => (dispatch) => {
  request.get('/api/users/me')
        .then((user) => {
          if (user.msg === 'Expired token') {
            return dispatch(signOut());
          }
          dispatch(signInSuccess({ user }));
        });
};

export const signIn = function (email, password) {
  return (dispatch) => {
    dispatch(signInRequest());

    request.post('/api/auth/signin', {
      email,
      password
    }).then((body) => {
      if (body.msg) {
        return dispatch(signInError(body.msg));
      }

      dispatch(signInSuccess(body));
    }).catch((err) => {
      dispatch(signInError(err.msg));
    });
  };
};