import {
  GET_ORDERS,
  GET_ORDERS_ERROR,
  GET_ORDERS_SUCCESS,
  GET_ORDER_DETAIL,
  GET_ORDER_DETAIL_ERROR,
  GET_ORDER_DETAIL_SUCCESS,
  CLEAR_ORDER_DETAIL
} from '../enums';

const getInitialState = () => ({
  'loading': false,
  'errorMessage': '',
  'orders': [],
  'order': null
});

export default (state, { type, payload }) => {
  if (!state) {
    state = getInitialState();
  }

  switch (type) {
    case GET_ORDERS:
      return { ...state, ...{ 'loading': true, 'errorMessage': '' } };
    case GET_ORDERS_SUCCESS:
      return { ...state, ...{ 'loading': false, 'errorMessage': '', 'orders': payload.orders } };
    case GET_ORDERS_ERROR:
      return { ...state, ...{ 'loading': false, 'errorMessage': payload.msg } };
    case GET_ORDER_DETAIL:
      return { ...state, ...{ 'loading': true, 'errorMessage': '' } };
    case GET_ORDER_DETAIL_SUCCESS:
      return { ...state, ...{ 'loading': true, 'errorMessage': '', 'order': payload } };
    case GET_ORDER_DETAIL_ERROR:
      return { ...state, ...{ 'loading': true, 'errorMessage': 'Failed to obtain order detail' } };
    case CLEAR_ORDER_DETAIL:
      return { ...state, ...{ 'order': undefined } };
    default:
      return state;
  }
};