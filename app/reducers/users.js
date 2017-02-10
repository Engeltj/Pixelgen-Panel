const getInitialState = function() {
  return {
    gettingUsers: true
  };
};

import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR
} from '../enums';

export default function(state, action) {
  if (!state) {
    state = getInitialState();
  }

  switch (action.type) {
    case GET_USERS:
      return { ...state, ...getInitialState() };
    case GET_USERS_SUCCESS:
      console.log(action.payload);
      return { ...state, ...{ gettingUsers: false, users: action.payload.users } };
    case GET_USERS_ERROR:
      return { ...state, ...{ gettingUsers: false } };
    default:
      return state;
  }
}