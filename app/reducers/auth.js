/* global localStorage */
import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT
} from '../enums';

const getInitialState = function () {
  const token = localStorage.getItem('token');

  return {
    'user': null,
    'signingIn': false,
    'hasError': false,
    'isAuthenticated': Boolean(token)
  };
};

export default function (state, action) {
  if (!state) {
    state = getInitialState();
  }

  switch (action.type) {
    case SIGN_OUT:
      return { ...state, ...getInitialState() };
    case SIGN_IN:
      return { ...state, ...{ 'signingIn': true, 'hasError': false, 'isAuthenticated': false } };
    case SIGN_IN_SUCCESS:
      return { ...state, ...{ 'signingIn': false, 'hasError': false, 'isAuthenticated': true, 'user': action.payload.user } };
    case SIGN_IN_ERROR:
      return { ...state, ...{ 'signingIn': false, 'hasError': true, 'error': action.error, 'isAuthenticated': false } };
    default:
      return state;
  }
}