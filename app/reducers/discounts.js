import {
  GET_USERS,
  GET_USER_DISCOUNTS
} from '../enums';

const getInitialState = function () {
  return {
    'gettingDiscounts': false
  };
};

export default function (state, action) {
  if (!state) {
    state = getInitialState();
  }

  switch (action.type) {
    case GET_USERS:
      return { ...state, ...getInitialState() };
    case GET_USER_DISCOUNTS:
      return { ...state, ...{ 'gettingDiscounts': true } };
    default:
      return state;
  }
}