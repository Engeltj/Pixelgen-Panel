const getInitialState = function() {
  let token = localStorage.getItem('token');

  return {
    user: null,
    signingIn: false,
    hasError: false,
    isAuthenticated: !!token
  };
};

import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT
} from '../enums';

export default function(state, action) {
  if (!state) {
    state = getInitialState();
  }

  switch (action.type) {
    case SIGN_OUT:
      return { ...state, ...getInitialState() };
    case SIGN_IN:
      return { ...state, ...{ signingIn: true, hasError: false, isAuthenticated: false } };
    case SIGN_IN_SUCCESS:
      console.log('User: ', action.payload.user);
      return { ...state, ...{ signingIn: false, hasError: false, isAuthenticated: true, user: action.payload.user } };
    case SIGN_IN_ERROR:
      return { ...state, ...{ signingIn: false, hasError: true, error: action.error, isAuthenticated: false } };
    default:
      return state;
  }
}