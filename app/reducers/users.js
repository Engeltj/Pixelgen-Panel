import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR
} from '../enums';

const getInitialState = function () {
  return {
    'gettingUsers': false,
    'users': []
  };
};

export default function (state, action) {
  if (!state) {
    state = getInitialState();
  }

  switch (action.type) {
    case GET_USERS:
      return { ...state, ...{ 'gettingUsers': true } };
    case GET_USERS_SUCCESS:
      return { ...state, ...{ 'gettingUsers': false, 'users': action.payload.users } };
    case GET_USERS_ERROR:
      return { ...state, ...{ 'gettingUsers': false } };
    default:
      return state;
  }
}