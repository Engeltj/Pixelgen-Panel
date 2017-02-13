import {
  GET_ORDERS,
  GET_ORDERS_ERROR,
  GET_ORDERS_SUCCESS
} from '../enums';

const getInitialState = () => ({
  loading: false,
  errorMessage: '',
  orders: []
});

export default (state, { type, payload }) => {
  if (!state) {
    state = getInitialState();
  }

  switch (type) {
    case GET_ORDERS:
      return { ...state, ...{ 'loading': true, 'errorMessage': '' } };
    case GET_ORDERS_SUCCESS:
      return { ...state, ...{ 'loading': false, 'errorMessage': '', orders: payload.orders } };
    case GET_ORDERS_ERROR:
      return { ...state, ...{ 'loading': false, 'errorMessage': payload.msg } };
    default:
      return state;
  }
};