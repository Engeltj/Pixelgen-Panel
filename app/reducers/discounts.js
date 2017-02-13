import {
  GET_USERS,
  GET_USER_DISCOUNTS,
  GET_USER_DISCOUNTS_ERROR,
  GET_USER_DISCOUNTS_SUCCESS
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
    case GET_USER_DISCOUNTS_SUCCESS:
      console.log(action.payload);
      return { ...state, ...{ 'gettingDiscounts': false, 'discounts': action.payload } };
    case GET_USER_DISCOUNTS_ERROR:
      return { ...state, ...{ 'gettingDiscounts': false } };
    default:
      return state;
  }
}