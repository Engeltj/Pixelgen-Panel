const getInitialState = function() {
  return {
    user: null,
    signingIn: false,
    hasError: false
  };
};

import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR
} from '../enums';

export default function(state, action) {
  if (!state) {
    state = getInitialState();
  }

  switch (action.type) {
    case SIGN_IN:
      console.log('Action: ', action.payload);
      return { ...state, ...{ signingIn: true, hasError: false } };
    case SIGN_IN_SUCCESS:
      return { ...state, ...{ signingIn: false } };
    case SIGN_IN_ERROR:
      return { ...state, ...{ signingIn: false, hasError: true } };
    default:
      return state;
  }
}