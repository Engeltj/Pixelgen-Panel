import {
  GET_USERS,
  GET_USER_DISCOUNTS,
  GET_USER_DISCOUNTS_ERROR,
  GET_USER_DISCOUNTS_SUCCESS,
  SAVE_USER_DISCOUNTS,
  SAVE_USER_DISCOUNTS_SUCCESS,
  SAVE_USER_DISCOUNTS_ERROR
} from '../enums';

const getInitialState = function () {
  return {
    'gettingDiscounts': false,
    'savingDiscounts': false,
    'discounts': null,
    'user': ''
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
      return { ...state, ...{ 'gettingDiscounts': true, 'user': action.payload } };
    case GET_USER_DISCOUNTS_SUCCESS:
      return { ...state, ...{ 'gettingDiscounts': false, 'discounts': action.payload } };
    case GET_USER_DISCOUNTS_ERROR:
      return { ...state, ...{ 'gettingDiscounts': false } };
    case SAVE_USER_DISCOUNTS:
      return { ...state, ...{ 'savingDiscounts': true } };
    case SAVE_USER_DISCOUNTS_SUCCESS:
      return { ...state, ...{ 'savingDiscounts': false, 'discounts': null, 'user': '' } };
    case SAVE_USER_DISCOUNTS_ERROR:
      return { ...state, ...{ 'savingDiscounts': false } };
    default:
      return state;
  }
}