const getInitialState = function() {
  return {
    gettingDiscounts: false
  };
};

import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_USER_DISCOUNTS,
  GET_USER_DISCOUNTS_SUCCESS,
  GET_USER_DISCOUNTS_ERROR
} from '../enums';

export default function(state, action) {
  if (!state) {
    state = getInitialState();
  }

  switch (action.type) {
    case GET_USERS:
      return { ...state, ...getInitialState() };
    case GET_USER_DISCOUNTS:
      return { ...state, ...{ gettingDiscounts: true} };
    default:
      return state;
  }
}